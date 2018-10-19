/*-------------------------- + 
获取最终样式 
+-------------------------- */
function getStyle(obj, attr) 
{
    return parseFloat(obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr])
}