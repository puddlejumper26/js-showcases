//                                  --1--


//select the canvas
const cvs=document.getElementById("bird");
const ctx=cvs.getContext("2d");

//vars and consts
let frames=0;
//                                  --8--
const DEGREE=Math.PI/180;
//用来控制最后的声音播放一遍
let onceS = 1;

//get the image
const sprite = new Image();
sprite.src="img/sprite.png";



//                                 --14--
// load the sound
const SCORE_S=new Audio();
SCORE_S.src="audio/sfx_point.wav";

const FLAP = new Audio();
FLAP.src = "audio/sfx_flap.wav";

const HIT=new Audio();
HIT.src="audio/sfx_hit.wav";

const SWOOSHING=new Audio();
SWOOSHING.src="audio/sfx_swooshing.wav";

const DIE = new Audio();
DIE.src = "audio/sfx_die.wav";
//                                  --5--
//Game State
const state={
    current:0,
    getReady:0,
    game:1,
    over:2
}
//control the game
cvs.addEventListener('click', function(evt){
    switch (state.current) {
        case state.getReady:
            state.current=state.game;
//                        --14--
            SWOOSHING.play();
            
            break;
        case state.game:
            bird.flap();
//                        --14--
            FLAP.play();
            
            break;
        case state.over:
            // state.current = state.getReady;
            // break;
//                                  --13--
            let rect = cvs.getBoundingClientRect();
            let clickX = evt.clientX - rect.left;
            let clickY = evt.clientY - rect.top;

            //配合最后的声音只播放一遍
           onceS = 1;
            
            // 检查是否按了按钮
            if (clickX >= startBtn.x && clickX <= startBtn.x + startBtn.w && clickY >= startBtn.y && clickY <= startBtn.y + startBtn.h) {
                pipes.reset();
                bird.speedReset();
                score.reset();
                state.current = state.getReady;
               
            }
            break;
    }
});


//                                  --2--

//background
const bg = {
    sX: 0,
    sY: 0,
    w: 275,
    h: 226,
    x: 0,
    y: cvs.height - 226,

//                                  --9--
    dx:0.2,
//                                  --2--
    draw: function () {
       ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
       ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    },

    update: function () {
//                                  --9--
        if (state.current === state.game) {
            this.x = (this.x - this.dx) % (this.w / 2);
        }
    }
}

//forground
const fg={
    sX: 276,
    sY: 0,
    w: 224,
    h: 112,
    x: 0,
    y: cvs.height - 112,

//                                  --9--
    dx:2,
//                                  --2--

    draw:function(){
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    },

    update:function(){
//                                  --9--
        if(state.current===state.game){
            this.x=(this.x-this.dx)%(this.w/2);
        }
    }

}

//                                  --3--
//bird
const bird={
    animation:[
        { sX: 276, sY: 112 },
        { sX: 276, sY: 139 },
        { sX: 276, sY: 164 },
        { sX: 276, sY: 139 },
    ],
    x: 50,
    y: 150,
    w: 34,
    h: 26,
//                                  --11--
    radius:12,

//                                  --7--
    speed:0,
    gravity:0.25,
    jump:4.5,
//                                  --8--
    rotation:0,
//                                  --5--
    frame: 0,

    draw:function(){
        let bird=this.animation[this.frame];
        // ctx.drawImage(sprite, bird.sX, bird.sY, this.w, this.h, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
//                                  --8--
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(sprite, bird.sX, bird.sY, this.w, this.h,  - this.w / 2,  - this.h / 2, this.w, this.h);
        ctx.restore();
    },

//                        --5--
    flap:function(){
//                        --7--
        this.speed = -this.jump;
    },

//                                  --6--
    update:function(){
        this.period = state.current===state.getReady?10:5;
        this.frame += frames % this.period===0?1:0;
        this.frame = this.frame % this.animation.length;

//                                  --7--

        if(state.current===state.getReady){
            this.y=150;
//                                  --8--
            this.rotation=0*DEGREE;
//                                  --7--
        }else{

            this.speed += this.gravity;
            this.y += this.speed;

            if(this.y+this.h/2>cvs.height-fg.h){
               // 用下面的这个条件控制hit和die的声音就播放一遍，因为每次播放都是要重新刷一遍update，所以现在 
               if(onceS ===1 ){            
                HIT.play();
//                        --14--
                DIE.play(); 
                onceS = 0;
               }
                this.y = cvs.height - fg.h - this.h / 2;
                state.current = state.over;
   
            }
            
//                                  --8--
            if(this.speed>=this.jump){
                this.rotation=90*DEGREE;
                this.frame=1;
                if (this.y + this.h / 2 >= cvs.height - fg.h) { this.rotation = 180 * DEGREE;}
            }else{
                this.rotation=-25*DEGREE;
            }
        }

    },

//                                  --13--
    speedReset:function(){
        this.speed=0;
    }

}

function sleep(d) {
    for (var t = Date.now(); Date.now() - t <= d;);
}

//                                  --4--
// get ready  开始
const getReady={
    sX: 0,
    sY: 228,
    w: 173,
    h: 152,
    x: cvs.width / 2 - 173 / 2,
    y: 80,

    draw:function(){
//                        --5--
        if(state.current === state.getReady){
            //                        --4--
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
}

//game over 
const gameOver={
    sX: 175,
    sY: 228,
    w: 225,
    h: 202,
    x: cvs.width / 2 - 225 / 2,
    y: 90,

    draw: function () {
//                        --5--
        if(state.current === state.over){
            //                        --4--
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
}

//                                  --10--
//pipe
const pipes={
    position:[],
    top: {
        sX: 553,
        sY: 0
    },
    bottom: {
        sX: 502,
        sY: 0
    },
    w: 53,
    h: 400,
    gap: 150,
    maxYPos: -150,
    dx: 2,

    draw:function(){
        for (let i = 0; i < this.position.length; i++) {
            let p = this.position[i];
            let topYPos = p.y;
            let bottomYPos = p.y + this.h + this.gap;

            //画上下的管道
            ctx.drawImage(sprite, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.w, this.h);
            ctx.drawImage(sprite, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.w, this.h);
        }
    },

    update:function(){
        if (state.current != state.game) return;

        if(frames%100===0){
            this.position.push({
                x:cvs.width,
                y:this.maxYPos*(Math.random()+1)
            });
        }
        for(let i=0;i<this.position.length;i++){
            let p=this.position[i];
            p.x -= this.dx;
            
            if (p.x + this.w <= 0) {
                this.position.shift();
//                        --14--
                SCORE_S.play();
//                                  --12--
                score.value +=1;
                score.best = Math.max(score.value,score.best);
                localStorage.setItem("best1",score.best);
            }
//                                  --11--
            let bottomPipeY = p.y+this.gap+this.h;
            if (bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > p.y && bird.y - bird.radius < p.y + this.h) {
                state.current = state.over;
//                        --14--
                HIT.play();
            }
            
            if (bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > p.y + this.h + this.gap && bird.y - bird.radius < p.y + this.h + this.gap + this.h) {
                state.current = state.over;
//                        --14--
                HIT.play();
            }
        }
    },
//                                  --13--

    reset:function(){
        this.position=[];
    }

}

//                                  --12--
const score={
    best:parseInt(localStorage.getItem("best1")) || 0,
    value:0,

    draw:function(){
        ctx.fillStyle="#FFF";
        if(state.current===state.game){
            ctx.lineWidth = 2;
            ctx.font = "35px Teko";
            ctx.fillText(this.value, cvs.width / 2, 50);
            ctx.strokeText(this.value, cvs.width / 2, 50);
        }else if(state.current===state.over){
            ctx.lineWidth = 2;
            ctx.font = "25px Teko";
            ctx.fillText(this.value, 225, 186);
            ctx.strokeText(this.value, 225, 186);
            ctx.fillText(this.best, 225, 228);
            ctx.strokeText(this.best, 225, 228);
        }
    },

//                                  --13--
    reset:function(){
        this.value=0;
    }
}

//                                  --13--
const startBtn={
    x: 120,
    y: 263,
    w: 83,
    h: 29
}






//                                  --1--
//draw
function draw(){
// 每次循环能够重新画出一张新的canvas
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
//                        --2--
    bg.draw();
//                        --10--
    pipes.draw();
    fg.draw();
//                        --3--
    bird.draw();
//                        --4--
    getReady.draw();
    gameOver.draw();

//                        --12--
    score.draw();
}

//update
function update(){
//                        --6--
    bird.update();
//                        --9--
    bg.update();
    fg.update();
//                        --10--
    pipes.update();
}

//loop
function loop(){
    update();
    draw();
    frames++;
    requestAnimationFrame(loop);
}

//调用loop
loop();




