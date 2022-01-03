window.onload = function(){
    var box1 = document.getElementById("box1");
    var velocity = 10;
    var dir = 0;
    
    function move(){
        switch(dir){
            case("ArrowUp"):
                box1.style.top = box1.offsetTop - velocity + "px";
                break;
            case("ArrowDown"):
                box1.style.top = box1.offsetTop + velocity + "px";
                break;
            case("ArrowLeft"):
                box1.style.left = box1.offsetLeft - velocity +"px";
                break;
            case("ArrowRight"):
                box1.style.left = box1.offsetLeft + velocity +"px";
                break;
        }
    }

    setInterval(move,30);
    
    

    //绑定键盘按下事件
    document.onkeydown = function(event){
        event = event || window.event;
        //alert(event.key);
        //var velocity = parseInt(input.value);
        //alert(velocity);

        if(event.ctrlKey){
            velocity = velocity*2;
        }
        else{
            velocity = 10;
        }

        dir = event.key;
        //alert(dir);

        document.onkeyup = function(){
            dir = 0;//松开键盘，停止移动
        }
        //return false;
    }
}