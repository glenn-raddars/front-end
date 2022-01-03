window.onload = function(){
    //用来保存图片的数组
    var imgArr = ["img\\face1.jpg","img\\face2.jpg","img\\huofuLine.jpg","img\\image.jpg"];

    var index = 0;

    var img = document.getElementsByTagName("img")[0];//拿到图片标签
    var btn01 = document.getElementById("btn01");
    var btn02 = document.getElementById("btn02");
    var timer;

    function change(){
        index++;
        index = index % imgArr.length;
        img.src = imgArr[index];
    }

    btn01.onclick = function(){

        clearInterval(timer);//停止对应的计时器，不然会每次点击都开启一个计时器

        timer = setInterval(change,1000);//开启定时器，每1000ms执行一次指定函数
    }

    btn02.onclick = function(){
        clearInterval(timer);
    }
    
}