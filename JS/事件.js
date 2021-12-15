// document指整个html文档，所有的元素都包含在里面
var btn = document.getElementById("btn");//拿到按钮对象

btn.innerHTML = "你点不点嘛!";

btn.onclick = function() {
    alert("点的好");
}