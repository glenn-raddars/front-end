window.onload = function(){
    var box1 = document.getElementById("box1");

    box1.onmousedown = function(event){
        event = event || window.event;
        //计算box1相对于网页顶部的偏移量
        var tp = box1.offsetTop;
        //计算box1相对于网页左边的偏移量
        var tl = box1.offsetLeft;
        //计算鼠标所在坐标与box1所在位置的偏移量
        var ot = event.pageY - tp
        var ol = event.pageX - tl;
        //alert(tp);
        //alert(tl);

        document.onmousemove = function(event){
            event = event || window.event;
            var left = event.pageX - ol;
            var top = event.pageY - ot;
            //让box1跟着鼠标动，而且不会突然瞬移到box1的左上角
            box1.style.left = left + "px";
            box1.style.top = top + "px";
        }

        document.onmouseup = function(){

        document.onmousemove = null;
        document.onmouseup = null;
        //alert("up还在执行");
        }
    }

    
}