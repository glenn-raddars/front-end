//getStyle方法,获取当前元素的样式
function getStyle(obj, name){
    if(window.getComputedStyle){
        //有这个方法，就用
        return getComputedStyle(obj,null)[name];//第二个参数查询伪元素和伪类的，不太需要
    }else{
        return obj.currentStyle[name];//IE8没有上述方法，所以只能获取这个属性
    }
}

//move函数
function move(obj, attr/*需要移动的属性*/ , target, speed, callback/**回调函数 */){
    //关闭上一个定时器
    clearInterval(obj.timer);

    //获取当前box值
    var current = parseInt(getStyle(obj,"left"));
    //current<target,向右移动，否则，向左移动
    if(current >= target){
        speed = -speed;
    }

    //开启定时器,给obj一个自己的属性timer，让每个定时器只识别自己的定时器
    obj.timer = setInterval(function(){
        //获取box1原来的left值
        var OldValue = parseInt(getStyle(obj,attr));
        //alert(OldValue);
        var NewValue = OldValue + speed;

        if((speed < 0 && NewValue < target)||(speed > 0 && NewValue > target)){
            NewValue = target;
        }

        obj.style[attr] = NewValue + "px";
        //移动到800停止
        if(NewValue == target){
            clearInterval(obj.timer);
            callback&&callback();//有就执行，没有就不执行
        }
    },30);
}