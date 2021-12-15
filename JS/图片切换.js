window.onload = function(){
    //使其能够在网页加载出来之后在运行js代码
    var prev = document.getElementById("prev");
    var after = document.getElementById("after");
    
    //用来保存图片的数组
    var imgArr = ["img\\face1.jpg","img\\face2.jpg","img\\huofuLine.jpg","img\\image.jpg"];

    var index = 0;

    var img = document.getElementsByTagName("img")[0];//拿到图片标签
    var info = document.getElementById("info");

    prev.onclick = function(){
        /** 切换到上一张图片*/
        index--;
        if(index<=0)
            index=0;
        img.src = imgArr[index]; 
        info.innerHTML = "一共"+ imgArr.length +"张图片，当前在第"+(index+1)+"张";
    }
    after.onclick = function(){
        /** 切换到下一张图片*/
        index++;
        if(index>=imgArr.length-1)
            index=3;
        img.src = imgArr[index];
        info.innerHTML = "一共"+ imgArr.length +"张图片，当前在第"+(index+1)+"张";
    }
    
}