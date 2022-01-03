window.onload = function(){

    var box1 = document.getElementById("box1");
    var input = document.getElementsByTagName('input')[0];
    //绑定键盘按下事件
    document.onkeydown = function(event){
        event = event || window.event;
        //alert(event.key);
        var velocity = parseInt(input.value);
        //alert(velocity);

        if(event.ctrlKey){
            velocity = velocity*2;
        }

        switch(event.key){
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


}