window.onload = function(){
    //获取表单
    var items = document.getElementsByName("items");

    var checkallbox = document.getElementById("checkallbox");
    
    //全选按钮
    var checkedAllButton = document.getElementById("checkedAllButton");
    checkedAllButton.onclick = function(){
        for(var i=0;i<items.length;i++){
            items[i].checked = true;
        }
        checkallbox.checked = true;
    }
    //全不选
    var checkedNoButton = document.getElementById("checkedNoButton");
    checkedNoButton.onclick = function(){
        for(var i=0;i<items.length;i++){
            items[i].checked = false;
        }
        checkallbox.checked = false;
    }
    //反选
    var chechedRevButton = document.getElementById("chechedRevButton");
    chechedRevButton.onclick = function(){
        checkallbox.checked = true;
        for(var i=0;i<items.length;i++){
            items[i].checked = !items[i].checked;

            //每个判断是否选中
            //checkallbox.checked = true;
                
            if(!items[i].checked){
                checkallbox.checked = false;
            }
            
        } 
    }
    //提交
    var sendBtn = document.getElementById("sendBtn");
    sendBtn.onclick = function(){
        var message = "";
        for(var i =0;i<items.length;i++){
            if(items[i].checked){
                message = message + " " + items[i].value;
            }
        }
        alert(message);
    }
    //全选框
    
    checkallbox.onclick = function(){
        for(var i=0;i<items.length;i++){
            items[i].checked = this.checked;
        }
    }
    //确定全选框与每个选项状态的一致性
    for(var i=0;i<items.length;i++){
        items[i].onclick = function(){
            //每个判断是否选中
            checkallbox.checked = true;
            for(var j=0;j<items.length;j++){
                if(!items[j].checked){
                    checkallbox.checked = false;
                    break;
                }
            }
        }
    }
}