//select the canvas
const cvs = document.getElementById('pong');
const ctx = cvs.getContext('2d');

//creat the user / computer paddle
const user={
    x:0,
    y:cvs.height/2-100/2,
    width:10,
    height:1000,
    color:"white",
    score:0
}

const com = {
    x: cvs.width-10,
    y: cvs.height / 2 - 100 / 2,
    width: 10,
    height: 10,
    color: "white",
    score: 0
}

//load the sound
const comScore=new Audio();
comScore.src="sounds/comScore.mp3"

const hit = new Audio();
hit.src = "sounds/hit.mp3"

const userScore = new Audio();
userScore.src = "sounds/userScore.mp3"

const walls = new Audio();
walls.src = "sounds/sfx_hit.wav"


// create the ball
const ball = {
    x: cvs.width/2,
    y: cvs.height / 2,
    radius:10,
    velocityX:10,
    velocityY:10,
    speed:10,
    color: "white",
}

// create the net
const net={
    x:cvs.width/2-2/2,
    y:0,
    width:2,
    height:10,
    color:"white"
}

//draw rect function
function drawRect(x,y,w,h,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,w,h);
}


//draw circle
function drawCircle(x,y,r,color){
    ctx.fillStyle=color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,false);
    ctx.closePath();
    ctx.fill();
}



//draw the text
function drawText(text,x,y,color){
    ctx.fillStyle=color;
    ctx.font="45px fantasy";
    ctx.fillText(text,x,y);
}


//draw the net
function drawNet(x,y,){
    for(let i=0;i<=cvs.height;i+=15){
        drawRect(net.x,net.y+i,net.width,net.height,net.color)
    }
}



//render the game
function render(){
    //clear the canvas
    drawRect(0, 0, cvs.width, cvs.height, 'black');

    //draw the net
    drawNet();

    //draw the score
    drawText(user.score,cvs.width/4,cvs.height/5,"white");
    drawText(com.score, 3*cvs.width / 4, cvs.height / 5, "white");

    //draw the user and com paddle
    drawRect(user.x,user.y,user.width,user.height,user.color);
    drawRect(com.x,com.y,com.width,com.height,com.color);

    //draw the ball
    drawCircle(ball.x,ball.y,ball.radius,ball.color);
}

//control the user paddle
cvs.addEventListener("mousemove", movePaddle);

function movePaddle(evt){
    let rect=cvs.getBoundingClientRect();
    user.y=evt.clientY-rect.top-user.height/2;
    //这里的user.height/2可以增加控制的精度
}



//collision detection
function collision(b,p){
    b.top=b.y-b.radius;
    b.bottom=b.y+b.radius;
    b.left=b.x-b.radius;
    b.right=b.x+b.radius;

    p.top=p.y;
    p.bottom=p.y+p.height;
    p.left=p.x;
    p.right=p.x+p.width;

    return b.right>p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom;
}

//reset the ball
function resetBall(){
    ball.x=cvs.width/2;
    ball.y=cvs.height/2;
    ball.speed=10;
    ball.velocityX=-ball.velocityX;
}

//update pos,mov,score..
function update(){
    ball.x+=ball.velocityX;
    ball.y+=ball.velocityY;

    //create AI to control the com paddle
    let computerLevel=0.5;
    com.y += (ball.y-(com.y+com.height/2))*computerLevel;

    if(ball.y+ball.radius > cvs.height || ball.y-ball.radius <0){
        ball.velocityY = -ball.velocityY;
        //wall.play();
    }

    let player=(ball.x < cvs.width/2) ? user : com;

    if(collision(ball,player)){
        //where the ball hit the player
        let collidePoint = ball.y-(player.y+player.height/2);
        //normalization
        collidePoint = collidePoint/(player.height/2);
         //ball.velocityX=-ball.velocityX;

       // comScore.play()

        //x direction of the ball when it hits
        let direction=(ball.x<cvs.width/2)?1:-1;

        //calculate the angle in Radian
        let angelRad=collidePoint*(Math.PI/4); 
        //这里就是45度，因为Math.PI就是180度

        //change the vel x and y
         ball.velocityX= direction * ball.speed * Math.cos(angelRad);
         ball.velocityY=            ball.speed * Math.sin(angelRad);

        //increase the speed when the ball hits the paddle
        //console.log("ballSpeed+"+ball.speed);
        ball.speed += 1;
    }

    if(ball.x-ball.radius<0){
        com.score++;resetBall();
    }else if(ball.x+ball.radius>cvs.width){
        user.score++;resetBall();
    }

}





//game init
function game(){ 
    render();
    update();
}

// loop
const framePerSecond=50;
setInterval(() => {
    game()
}, 1000/framePerSecond);