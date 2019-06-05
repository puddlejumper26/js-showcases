const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */



for(let i=1;i<=5;i++){
   const img=document.createElement('img');
   img.setAttribute('src','images/pic'+i+'.jpg');
   thumbBar.appendChild(img);
   img.onclick = e =>{
       const imgSrc = e.target.getAttribute('src');
       displayedImage.setAttribute('src', imgSrc);
   }
    
}


/* 编写 变亮/变暗 按钮 */

btn.onclick=()=>{
    const btnClass=btn.getAttribute('class');
    console.log(btnClass);
    if(btnClass=='dark'){
        btn.setAttribute('class','light');
        btn.textContent='light';
        overlay.style.backgroundColor='black';
    }else{
        btn.setAttribute('class','dark');
        btn.textContent='dark';
        overlay.style.backgroundColor ='rgba(0, 0, 0, 0)';
    }
    
}

