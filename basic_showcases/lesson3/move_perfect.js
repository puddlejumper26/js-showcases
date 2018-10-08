function getStyle(obj, name) 
{
    if (obj.currentStyle) 
    {
        return obj.currentStyle[name];
    }
    else 
    {
        return getComputedStyle(obj, false)[name];
    }
}

function startMove(obj, json, fnEnd) 
{
    //关定时器                                                
    clearInterval(obj.timer);

    //打开定时器
    obj.timer = setInterval(function () 
    {
        // 3 //设定一个变量为真，这里的前提是假设所有的值到已经到达目标点
        var bStop = true;

        for (var attr in json) 
        {
            var cur = 0;

            // 如果属性是opacity 怎么取数字
            if (attr === 'opacity') 
            {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            }
            else 
            {
                cur = parseInt(getStyle(obj, attr)); //这个时候传入的都是其他的样式如width等
            }

            // 设定变化的速度，渐变，所以还要取整
            var speed = (json[attr] - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // 是否到达
            /*	if (cur == json[attr])  // 1 //json[attr]相当于当前循环的目标点
                {	
                        clearInterval(obj.timer); // 2 // 如果用这种方式停止的话，可能会出现我们同时需要变化两个值 width 100->101, height 100 -> 1000，
                        //那么根据if， 当101到达的时候，就会停止定时器，这时候height的值肯定还没有到达1000。
                        // 所以这里是有一个小的bug，所以这里需要重写 
                        if(fnEnd)fnEnd();
                }
                else
                {
                    if(attr == 'opacity')
                    {
                        obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                        obj.style.opacity=(cur+speed)/100;
                        //document.getElementById('txt1').value = obj.style.opacity;
                    }
                    else
                    {
                        obj.style[attr] = cur+speed+'px';  
                    }
                }*/

            // 4 //如果有一个值没有到达目标点
            if (cur != json[attr]) 
            {
                bStop = false;
            }

            // 5 // 重写 是否到达这一步
            if (attr === 'opacity') 
            {
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                obj.style.opacity = (cur + speed) / 100;
            }
            else 
            {
                obj.style[attr] = cur + speed + 'px';
            }

        }

        // 6 // 根据上面的bStop的真假来进行定时器的关闭
        if (bStop) 
        {
            clearInterval(obj.timer);
            if (fnEnd) fnEnd();
        }

    }, 30);
} 
