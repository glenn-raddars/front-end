window.onload = function(){
    var box = document.getElementById("box1");
    //绑定鼠标移动事件
    document.onmousemove = function(event){
        event = event || window.event;//解决兼容性问题，如果次浏览器有event，直接赋值给event，如果没有，就把window.event赋值给event

        /*这个东西是为了同步body太大导致当前页面装不下的问题
        clientX是可见页面的鼠标横坐标
        clientY是可见页面的鼠标纵坐标*/

        var left = event.pageX;//当前鼠标在页面的横坐标
        var top = event.pageY;//当前鼠标在页面的纵坐标
        

        box.style.left = left + "px";
        box.style.top = top + "px";
    }
}