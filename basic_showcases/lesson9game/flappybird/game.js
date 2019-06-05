//select the cvs
const cvs = document.getElementById("bird");
const ctx = cvs.getContext('2d');

//game vars and consts
let frames = 0;
const DEGREE=Math.PI/180;

//用来控制最后的声音播放一遍
let onceS = 1;

// load the sound
const SCORE_S = new Audio();
SCORE_S.src = "audio/sfx_point.wav";

const FLAP = new Audio();
FLAP.src = "audio/sfx_flap.wav";

const HIT = new Audio();
HIT.src = "audio/sfx_hit.wav";

const SWOOSHING = new Audio();
SWOOSHING.src = "audio/sfx_swooshing.wav";

const DIE = new Audio();
DIE.src = "audio/sfx_die.wav";

//game state
const state={
    current:0,
    getReady:0,
    game:1,
    over:2
}

// 开始按钮
const startBtn={
    x:120,
    y:263,
    w:83,
    h:29
}


//control the game 
cvs.addEventListener('click',function(evt){
    switch(state.current){
        case state.getReady:
            state.current=state.game;
            SWOOSHING.play();
            break;
        case state.game:
            bird.flap();
            FLAP.play();
            break;
        case state.over:
            //因为如果用户变换浏览器的大小，那么按钮原来的位置就会改变，所以用下面的函数。
            let rect=cvs.getBoundingClientRect();
            let clickX=evt.clientX-rect.left;
            let clickY=evt.clientY-rect.top;

            //配合最后的声音只播放一遍
            onceS = 1;

            // 检查是否按了按钮
            if(clickX>=startBtn.x && clickX <=startBtn.x + startBtn.w && clickY>=startBtn.y && clickY <= startBtn.y+startBtn.h){
                pipes.reset();
                bird.speedReset();
                score.reset();
                state.current=state.getReady;
            }
            break;
    }
})

//load Sprit image
const sprite= new Image();
sprite.src="img/sprite.png";

//background
const bg={
    sX:0,
    sY:0,
    w:275,
    h:226,
    x:0,
    y:cvs.height-226,

    dx:0.2,

    draw:function(){
        ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x+this.w, this.y, this.w, this.h);
    },

    update: function () {
        if (state.current === state.game) {
            this.x = (this.x - this.dx) % (this.w / 2);
        }
    }

    
}

//forground
const fg={
    sX:276,
    sY:0,
    w:224,
    h:112,
    x:0,
    y:cvs.height-112,
    //用来移动地面
    dx:2,

    draw:function(){
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x+this.w, this.y, this.w, this.h);
    },

    //移动地面
    update:function(){
        if(state.current===state.game){
            this.x=(this.x-this.dx)%(this.w/2);
            // 这里用 /2 出来的显示效果最流畅，如果是》2就会卡顿
        }
    }



}

//bird

const bird={
    animation:[
        { sX:276, sY:112},
        { sX:276, sY:139},
        { sX:276, sY:164},
        { sX:276, sY:139},
    ],
    x:50,
    y:150,
    w:34,
    h:26,

    frame:0,

    gravity:0.25,
    jump:4.6,
    speed:0,
    rotation:0,

    //为下面的鸟撞上下管道
    radius:12,

    draw:function(){
        let bird=this.animation[this.frame];
        
        ctx.save();
        // 将canvas原点移动到this.x,this.y，即鸟所在的原点
        ctx.translate(this.x,this.y);
        ctx.rotate(this.rotation);

        // ctx.drawImage(sprite, bird.sX, bird.sY, this.w, this.h, this.x-this.w/2, this.y-this.h/2, this.w, this.h);
        // 因为canvas的原点被translate到了this.x,this.y。所以这里就仅仅只有- this.w / 2, - this.h / 2
        ctx.drawImage(sprite, bird.sX, bird.sY, this.w, this.h, - this.w / 2, - this.h / 2, this.w, this.h);

        //重新将canvas复位
        ctx.restore();
    },

    flap:function(){
        // 这里如果用this.y= -this.jump会有问题，因为speed会一直增加,注意这里是直接将speed重新赋值为 -this.jump 即 - 4.6
        this.speed = - this.jump;
        //console.log(this.jump);
    },

    update:function(){
        //煽动翅膀的频率，这里只有初始阶段（getReady）比较慢，游戏中（game）比较快
        this.period= state.current===state.getReady?10:5;
        //frames在 loop函数中已经进行了定义，是一秒钟更新60次，，所以frames%this.period可以控制煽动翅膀的频率
        this.frame += frames%this.period ===0?1:0;
        //因为定义里面animation只有四个动作，所以上面的this.frame的结果要来进行对本身animation长度的求模，这样就会轮流得到animation中的元素。这里用this.animation.length是比较完全的考虑。可以直接用4，但是很不完善。
        this.frame = this.frame%this.animation.length;
        
        if(state.current===state.getReady){
            //getReady阶段鸟的位置
            this.y=150;
            this.rotation=0*DEGREE;
        }else{
            //console.log("this.speed  "+this.speed);
            //因为是在不断更新的，所以更新一次，speed就+了一次gravity
            this.speed += this.gravity;
            // console.log(this.gravity)
            this.y += this.speed;
            //console.log(this.y);

            // 这里没有/2的话，就会让鸟最后的位置不对
            if(this.y+this.h/2>=cvs.height-fg.h){
                
                // 用下面的这个条件控制hit和die的声音就播放一遍，因为每次播放都是要重新刷一遍update，所以现在 
                if (onceS === 1) {
                    HIT.play();
                    //                        --14--
                    DIE.play();
                    onceS = 0;
                }
                
                // 这里就让鸟停留在地面上
                this.y = cvs.height-fg.h-this.h/2;
                state.current = state.over;
                // 为什么要加一个 if？ 可以直接state.current = state.over;
                // if(state.current===state.game){
                //     state.current=state.over;
                // }
            }

            //speed大于jump，意味着鸟在往下掉
            if(this.speed>=this.jump){
                //往下掉
                this.rotation=90*DEGREE;
                //设定这个时候的鸟的姿势是数组里面的第二个，其实设置任何一个都可以
                this.frame=1;
                //设定这里掉到地面上之后状态是肚子朝上。
                if (this.y + this.h / 2 >= cvs.height - fg.h) { 
                    this.rotation = 180 * DEGREE;
                 }
            }else{
                //向上飞
                this.rotation=-25*DEGREE;
            }

        }
    },

    speedReset:function(){
        this.speed=0;
    }
}


//get ready message
const getReady={
    sX:0,
    sY:228,
    w:173,
    h:152,
    x:cvs.width/2-173/2,
    y:80,
    
    draw: function () {
        if (state.current === state.getReady) {
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }   
}

//game over message
const gameOver={
    sX: 175,
    sY: 228,
    w: 225,
    h: 202,
    x: cvs.width / 2 - 225 / 2,
    y: 90,

    draw: function () {
        if(state.current===state.over){
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
}

//pipes
const pipes={
    position:[],

    top:{
        sX:553,
        sY:0
    },
    bottom:{
        sX:502,
        sY:0
    },

    w:53,
    h:400,
    gap:150,
    maxYPos:-150,
    dx:2,

    draw:function(){
        for(let i=0; i<this.position.length;i++){
            let p=this.position[i];
            let topYPos=p.y;
            let bottomYPos=p.y+this.h+this.gap;

            //画上下的管道
            ctx.drawImage(sprite, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.w, this.h);
            ctx.drawImage(sprite, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.w, this.h);
        }
    },

    update:function(){
        if(state.current!=state.game) return;

        // 时间间隔是frames跳动100次
        if(frames%100 ===0){
            //在数组里面添加
            this.position.push({
                x:cvs.width,
                y:this.maxYPos*(Math.random()+1)
            });
        }
        
        for(let i=0;i<this.position.length;i++){
            let p = this.position[i];

            //向左移动管道
            p.x -= this.dx;

            //使用在下管道那里，我们这里没有使用
            let bottomPipeYPos = p.y+this.h+this.gap;

            //鸟是否碰到上管道
            if(bird.x+bird.radius > p.x && bird.x-bird.radius < p.x+this.w && bird.y+bird.radius > p.y && bird.y-bird.radius < p.y+this.h ){
                state.current=state.over;
            }
            //是否碰到下管道
            if (bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > p.y+this.h+this.gap && bird.y - bird.radius < p.y + this.h+this.gap+this.h) {
                state.current = state.over;
            }

            // 这里要删除移出画面的管道
            if(p.x+this.w<=0){
                this.position.shift();

                //移出的时候，对score的value进行+1
                score.value+=1;
                //选择出最高的成绩，并且储存在localstorage中，在score中会调用
                score.best = Math.max(score.value,score.best);
                localStorage.setItem("best",score.best);

            }

        }
    },

    reset: function(){
        // 放空position集合
        this.position=[];
    }
}

//分数

const score={
    //best的值是从localstorage里的best中取出来的，如果没有值，那么赋值为0
    best: parseInt(localStorage.getItem("best")) || 0,
    value:0,

    draw:function(){
        ctx.fillStyle="#FFF";
        ctx.strokeStyle="blue";

        if(state.current===state.game){
            ctx.lineWidth=2;
            ctx.font="35px Teko";
            ctx.fillText(this.value,cvs.width/2,50);
            ctx.strokeText(this.value,cvs.width/2,50);

        }else if(state.current===state.over){
            ctx.lineWidth=2;
            ctx.font="25px Teko";
            ctx.fillText(this.value,225,186);
            ctx.strokeText(this.value, 225,186);
            ctx.fillText(this.best, 225, 228);
            ctx.strokeText(this.best, 225, 228);
        }
    },

    reset:function(){
        this.value=0;
    }
}

//draw
function draw(){
    ctx.fillStyle="#70c5ce";
    ctx.fillRect(0,0,cvs.width,cvs.height);

    bg.draw();
    pipes.draw();
    fg.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();

    score.draw();
}

//update
function update(){
    bird.update();
    fg.update();
    bg.update();
    pipes.update();
}

//loop
function loop(){
    update();
    draw();
    frames++;
    //console.log(frames);
    requestAnimationFrame(loop);
}

loop();
