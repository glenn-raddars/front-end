window.onload = function(){
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var btn01 = document.getElementById("btn01");
    var btn02 = document.getElementById("btn02");
    var btn03 = document.getElementById("btn03");
    

    btn01.onclick = function(){
        move(box1,"left",800,10,function(){
            setTimeout(function(){
                alert("执行完毕");//alert函数有问题，他会提前执行，所以要把他用延时函数包裹，把它变成异步函数。
            }, 0);
        });
    }

    btn02.onclick = function(){
        move(box1,"left",0,20);
    }

    btn03.onclick = function(){
        move(box2,"width",800,10,function(){
            move(box2,"height",400,10)
        });
    }

}