var oPrev = document.getElementById("prev"),
    oNext = document.getElementById("next"),
    oMain = document.getElementsByClassName("main")[0],
    oList = document.getElementsByClassName("list")[0],
    oLi = oList.getElementsByTagName("li"),
    oContaiter = document.getElementsByClassName("contaiter")[0];
    
var timer;
oLilength = oLi.length;
index = 0;
flag = true;
function moveImg(dis){
    flang = false;//运动着不能动
    var time = 400; //每次轮播需要的时间
    var eachTime = 20;//每一小次移动的时间
    var eachDis = dis/(time/eachTime);
    var newLeft = oMain.offsetLeft + dis;
    function eachMove(){
        if(dis > 0 && oMain.offsetLeft < newLeft ||  dis < 0 && oMain.offsetLeft > newLeft){
            oMain.style.left = oMain.offsetLeft/*左边距离位置*/ + eachDis +'px';
       }else{
           clearInterval(timer);
           oMain.style.left = newLeft + "px";

           if(newLeft == -3120){
               oMain.style.left = -520 + "px"
           }

           if(newLeft == 0){
            oMain.style.left = -2600 + "px"
            }
        flang = true;//运动完了继续
       }
    }
    timer = setInterval(eachMove, eachTime);
}
//点击之后向上翻
oPrev.onclick = function (){
    if(flang == false) return;
    moveImg(520);
    if(index == 0){
        index = 4;
    }else{
        index--;
    }
    oLiStyle();//
}
//点击之后向下翻
oNext.onclick = function (){
    if(flang == false) return;
    moveImg(-520);
    if(index == 4){
        index = 0;
    }else{
        index++;
    }
    oLiStyle();//
}


//小圆点
function oLiStyle(){
    oList.getElementsByClassName("active")[0].className = "";
    oLi[index].className = "active";
}
    
for(var i = 0; i < oLilength; i++ ){
    (function(j){   //立即执行函数(function(){}();)
        oLi[j].onclick = function (){
            var offset = ( j - index) * -520;
            moveImg(offset);
            index = j;
            oLiStyle();
            // console.log(j);
        }
    })(i); 
}
timer2 = setInterval (oNext.onclick,2000);//每过两秒自动轮播
oContaiter.onmouseover/*鼠标移动到oContaiter*/= function(){
    clearInterval(timer2);//清除
}
oContaiter.onmouseout/*鼠标离开oContaiter*/= function(){
    timer2 = setInterval (oNext.onclick,2000);
}