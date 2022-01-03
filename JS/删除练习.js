//专门绑定超链接的函数
function delA(){
     //删除对应表格中的行记录
            //获取当前的tr,往前走两个父亲
            var tr = this.parentNode.parentNode;//只能用this，不能用allA[i]，因为for循环先执行，响应函数后执行，此时i=3，超出边界

            var name = tr.children[0].innerHTML;

            var flag = confirm("确定要删除"+name+"吗？");//使用confirm，有确定与取消两个选项,并返回真假

            if(flag){
                //用tr的父亲删除他
            tr.parentNode.removeChild(tr);
            }
}

window.onload = function(){
    var allA = document.getElementsByTagName("a");

    for(var i =0; i<allA.length ;i++){
        allA[i].onclick = delA;
    }
    //添加员工功能
    var addButton = document.getElementById("addEmpButton");
    addButton.onclick = function(){
    //拿到文本框中的信息
    var EmpName = document.getElementById("empName").value;
    var Email = document.getElementById("email").value;
    var Salary = document.getElementById("salary").value;

    var tr = document.createElement("tr");//创建一个tr标签来添加行
    // 下面来填写行的内容
    tr.innerHTML = "<td>" + EmpName + "</td>"+
                   "<td>" + Email + "</td>"+
                   "<td>" + Salary + "</td>"+
                   "<td><a href='javascript:;'>Delete</a></td>";
    
    var newA = tr.getElementsByTagName("a")[0];
    newA.onclick = delA;//绑定新加入的超链接的单击响应函数

    var employeetable = document.getElementById("employeeTable");//将新加入的行添加到原来的表格中
    var tbody = employeetable.getElementsByTagName("tbody")[0];
    tbody.appendChild(tr);
    }
}