//点击切换
var tabs = document.getElementById("tabs").getElementsByTagName("li");//获取数组li
console.log(tabs); //获取信息
var lists = document.getElementById("lists").getElementsByTagName("ul");//获取id名为lists底下的ul
console.log(lists);
for (var i=0; i< tabs.length; i++){
    tabs[i].onclick = showlist;
}

function showlist(){
    for( var i=0; i<tabs.length; i++){
        if( tabs[i]=== this){//this是点击的对象
            tabs[i].className = "active";
            lists[i].className = "active";//如果有浮动就加上带有清浮动class名
        }
        else{
            tabs[i].className = "";
            lists[i].className = "";
        }
    }
}
//导航栏跟着滚动条走
var seckillNav = document.getElementById("seckillNav");
window.onscroll/*监听页面滚动事件*/ = function(){   
    var srollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;//获取滚动条移动位置信息
    //老版本 ie->document.body.scrollTop;苹果用 window.pageYOffset;
    if(srollTop >= 260){
        seckillNav.className = "seckill-nav seckill-navfixed";
    }else{
        seckillNav.className = "seckill-nav";
    }
    console.log(srollTop);
}


