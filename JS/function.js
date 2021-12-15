
function printd(){
    document.write("第一个函数");
}

printd();

var pp = function(){
    document.write("第一个匿名函数");
}
document.write("</br>");//输出换行
pp();
//函数不用表示返回值类型，直接return即可