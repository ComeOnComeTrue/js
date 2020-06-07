// var score = 89;
// if ( score > 90 ) {
// console.log("奖励100块");
// }    
// else if ( score > 80 ) {
//         console.log("奖励50块");
//     }    
// else {
// console.log("做家务");  
// }


// var day = 2;
// switch(day){
//     case 1:
//         console.log("星期一");
//         break;/* 满足条件后终止语句跳转语句 */ 
//     case 2:
//         console.log("星期二");
//         break;
//     case 3:
//         console.log("星期三");
//         break;
//     default:
//         console.log("不知道星期几");
//         break;
// }

// var a = 1;
// for (; a <= 10;)
// {
//     console.log(a +"我要100块");
//     a = a+1;
// }
// for(var a = 1; a <= 10; a++)
// {
//     console.log(a +"我要100块");
// }
// var a = 1;
// do {
//     console.log(a +"我要100块");
//     a = a+1;
// }while(a <= 10 );
// function 名字(0，1，多个参数){
//     执行语句
// }
// function slogan(num,time) {
//     for( var a=1; a<=num; a++){
//         console.log(time + "点" + a + "好好学习，天天向上")
//     }
// }
// var time = 10;
// slogan(5,time);
// var time = 12;
// slogan();
// var fname = slogan;
// fname();/*换名字*/ 

// 返回值 return;
// function add(x,y){//加法
//     var a = x + y;  //或 var a; return x + y;
//     return a;/* 保存运行方式并跳出大括号 */
// }
// var rs = add(1,2);
// console.log("1+2 = " + rs);

//  rs = add(3,4);
// console.log("1+2 = " + rs);

// function slogan(num,time) {  //默认值解决方式  
//     if( time == undefined)// time ——> undefined 默认值 7  可以把if判断语句换成 time = time || 7;
//         time = 7;
//     for( var a=1; a<=num; a++){
//         console.log(time + "点" + a + "好好学习，天天向上")
//     }
// }
// var time = 7;
// slogan(5); 

// function add(){//加法  函数的定义
//     // var arguments ~= [1,2,4,5];//arguments~=数组
//     // x = arguments[0];
//     // y = arguments[1];
//         var z = 0;
//         for(var i = 0; i<arguments.length;/*数组对应的长度*/i++){
//             z += arguments[i];
//         }
//         return z;/* 保存运行方式并跳出大括号 */
// }
// var rs = add(1,2,4,5);
// console.log("1+2 4,5 = " + rs);

// function add(){
//     var y = 1;  //局部变量
//    // y = 100; //变成全局变量
//     console.log("add():y =" + y)
// }
// var y = 2; //全局变量
// add();
// console.log("全局 y =" +y)

// add();
// console.log(y);
// function add(){
//    y = 100; //变成全局变量
//     console.log("add():y =" + y)
// }

// var counter = 0;//全局变量 ——》谁都可以访问，修改


// function add(){
//     var counter = 0; //局部变量，-》让全局变量有生命力
//     return function (){ //局部变量
//         counter++;//私有化 全局变量得生命周期 局部变量
//         console.log("counter =" + counter)
//     }
// }



// var plus = (function(){
//     var counter = 0; //局部变量，-》让全局变量有生命力
//     return function (){ //局部变量
//         counter++;//私有化 全局变量得生命周期 局部变量
//         console.log("counter = " + counter)
//     }
// })();
// plus();// counter = 1;
// plus();// counter = 2;

// var obj1 = {
//     x:0;  //变量 加单引号双引号都可以
//     "y":1;  //变量 如果变量名有包含了特殊符号—》一定要加引号
//     z:function(){console.log("z fuc");},  //函数
// }

// var person1 = {
//     name:"xiaoming",
//     sex:"male",
//     age:"18",
//     sun:{
//         name: "xiao xiao ming" ,
//     },
//     slogan: function(num){
//         for(var i=0;i<=num;i++){
//             console.log("wo shi xiao ming")
//         }
//     }
// }

// for (var pN in person1){
//     // var pN =相当于 "name"
//     console.log("person1的属性名：" + pN +"值=" + person1[pN]);
// }

// var name = person1.name;  // 变量名没加特殊符号才可以用点
// //name = person1["na-me"]; 加了特殊符号可以用

// 增加：修改属性时，对象没这条属性，自动加上
// person1.height = 170;
// var person1 = {
//     name:"xiaoming",
//     sex:"male",
//     age:"18",
//     slogan: function(num){
//         for(var i=0;i<=num;i++){
//             console.log("wo shi xiao ming")
//         }
//     }
// }
// var person2 = new PersonClass();

// ES5 function -> ES6 class
//为了区分函数和类
// function PersonClass(pName,pSex,pAge){
//     this.name = pName || "xiaoming";//当没个person名字时，他的名字就是小明
//     this.sex = pSex,
//     this.age = pAge,
//     this.slogan = function(){
//         //for(var i=0;i<=num;i++){
//        console.log("wo shi："+ this.name);//查看person1.slogan();
//     }
// }
//构造函数方式
// var person1 = new PersonClass("xiaoming","male","18");
// var person2 = new PersonClass("xiaohong","female","16");

// 命名空间： 多个人使用，为了避免冲突，每个人可以用自己的命名空间
// var cc = {};
// cc.Age = 100;
// var tt = {};
// tt.Male = "";

// 系统提供对象和类
// var obj1 = {};
// var obj2 = new Object();

// 查找 看文档 // Array,Numbe,String,Booleam等对象
// var n1 = 123;
// var str1 = n1.tostring(); number转换string
// 数据转换 比如 var n1 =1.123456;转换成只要前两位n1.toPrecision(2);

// 时间相关：Date（）
//计算机代码耗时：
// var time1 = new Date(); //获取当前时间，本地电脑时间
// var t = 0;
// for (var i=0; i<1000000000; i++){
//     t++;
// }
// var time2 = new Date();
// var n = time2.getTime() - time1.getTime();

// Math -> 数学相关  不是类 
// new Object();
// Math.  可当成命名空间

// 向下取1-10随机整数 套用MAth里面的方法
// for(var i=0; i<10; i++)
//     console.log( Math.floor(Math.random() * 10) +1);

// alert('alert弹窗');
// var bcf = confirm("confirm 弹窗");
// console.log("点击：" + bcf);
// if(bcf){
//     console.log("已提交");
// }else{
//     console.log("未提交");
// }
// var strpt = prompt("prompt 输入:","默认是我");
//     console.log("填了:" + strpt);

// 浏览器导航栏信息
// window.location  对象 里面有 location.href;等信息

// 刷新页面  打开新页面
// location.reload();
// var bcf = confirm("confirm 弹窗");
// if (bcf){
//     location.replace("http://www.baidu.com/");
// }else{
//     location.replace();
// }
// 浏览器历史:前进history.back();后退history.forward();history.go(-1);
// 浏览器信息:版本 厂家  navigator
// 获取浏览器分辨率:screen

// 计时器：
// 循环执行： var sil = setInterval(函数名，时间)；
//     停掉：clearInterval(sil);
// 一次执行：var sil = setTimeout(函数名，时间)；
//     clearInterval(sil);

// var num = 0;
// function add(){
//     console.log("num =" + ++num);
// }
// var sil = setInterval(add,1000)//一千毫秒等于一秒,每一秒输出一次
// function end(){
//     console.log("setTimeout clearInterval");
//     clearInterval(sil);
// }
// setTimeout(end,5000);//五秒停止，并输出setTimeout clearInterval

// DOW ——》 文档对象模型 
// DOW树—》document->html->Head,body->等一直延申
// 数据结构：
// 线性：单链表 循环链表 
// 树形：二叉树  平衡树  红黑树
// 网状：有向图 无向图  ——》 寻路算法  A*算法

// // 三种最常用方法；
// // 1.通过ID来查找
// var p1 = document.getElementById("p1");//只可以用document获取节点
// // // 2.通过标签名字来查找
// var p1 = document.getElementsByTagName("p")[0];//标签p的第一个
// var ps = div1.getElementsByTagName("p");
// // // 3.通过Class来查找

// //获取DIv1
// var div1 = document.getElementById("div1");

// //创建一个P标签
// var p = document.createElement("p");
// //添加节点
// div1.appendChild(p);
// //创建一个文本节点
// var p1tex = document.createTextNode("p1");
// p.appendChild(p1tex);

// //删除div1里面的div2
// var div2 = document.getElementById("div2");//获取div2
// div1.removeChild(div2);
// //自己把自己干掉
// div2.parentNode.removeChild(div2);

// html 定义好的属性 . 对象的点 获取  修改
// var img1 = document.getElementById("img1");
// img1.className = ""; //修改class名
// img1.src = "../test/img/2.png";//修改class名
// img1.style.width = "100px";//修改id名为img1里面宽
// img1.style.height = "100px";

// img1.setAttribute("属性名","数值")；//修改添加id名为img1里面的东西
// img1.removeAttribute("dat"); //删除id名为img1里面的dat
// var p1 = document.getElementById("p1");//获取
// p1.innerHTML = "这是innerHTML <a href='www.baidu.com'>this is a </a>";//出现文本加运用到HTML的标签
// p1.textContent = "这是innerHTML <a href='www.baidu.com'>this is a </a>";//只是出现文本

// 事件  注册
// 两种方式
// 1.html的属性：
// 属性名：on+事件的名字  onclick
// 属性值：方法

//点击事件
// 直接在html设定  onclick="add()"
// var num = 0;
// function add(){
//     console.log("点击:" + ++num);
// }
// // 通过js的元素对象来设定
// var num = 0;
// function add(){
//     console.log("点击:" + ++num);
// }
// var div1 = document.getElementById("div1");
// div1.onclick = add;
// // 删除 div1.onclick = null;


// //2.通过调用  系统提供的方法 主流 可以绑定多个事件
// // div1.addEventListener(事件类型click,函数add,事件的处理方式 默认布尔值false)
// var num = 0; 
// function add(){
//     console.log("addEventListener 点击:" + ++num);
// }
// var num1 = 0;
// function add1(){
//     console.log("addEventListener 点击:" + --num1);
// }
// div1.addEventListener("click",add);
// div1.addEventListener("click",add1);
// // 删除 div1.removeEventListener("click",add);
// 兼容:知道就好//addEventListener 在ie8中不支持 添加用 attachEvent() 删除 detachEvent()

// 事件函数->操作 function
// var div1 = document.getElementById("div1");
// div1.addEventListener("click",add);
// // 事件对象: event :提供了事件的详细信息:具体发生的事件的元素 鼠标的位置  点击的状态  键盘的按键
// function add(event){
//     console.log(event);
// }
// screenX Y :屏幕的左上角
// clientX Y :浏览器的左上角



// var input1 = document.getElementById("input1");
// input1.addEventListener("keydown",add);
// function add(event){
//     // var e = event || window.event; //这样就可解决在IE8中的兼容问题
//     console.log(event);
//     event.preventDefault();//取消a链接默认操作
// }
// var a1 = document.getElementById("a1");
// a1.addEventListener("click",add);

// function add(event){
//     console.log(event);
//     event.preventDefault();//取消a链接默认操作
//     //return false; -》只针对点的形式a1.onclick = add;
//     //IE8 -> event.returnValue = false;
// }
// var a1 = document.getElementById("a1");
// a1.addEventListener("click",add);//或a1.onclick = add;

// var div1 = document.getElementById("div1");//获取
// var div2 = document.getElementById("div2");
// //捕获阶段
// div1.addEventListener("click",div1ClickTrue,true);
// div2.addEventListener("click",div2ClickTrue,true);
// function div1ClickTrue(event){
//     console.log("捕获阶段 div1 click");
// }
// function div2ClickTrue(event){
//     console.log("捕获阶段 div2 click");
// }

// //冒泡阶段
// div1.addEventListener("click",div1Click,false);
// div2.addEventListener("click",div2Click,false);
// function div1Click(){
//     console.log("冒泡阶段 div1 click");
// }
// function div2Click(event){
//     //停止用 event.stopPropagation();
//     console.log("冒泡阶段 div2 click");
// }

// var head1 = document.getElementsByTagName("head")[0];
// var body1 = document.getElementsByTagName("body")[0];
// head1.addEventListener("click",headclick);
// body1.addEventListener("click",bodyclick);
// function headclick(event){
//     console.log("head click");
// }
// function bodyclick(event){
//     console.log("body click");
// }

// 事件流
// 两大阶段：
// 捕获阶段：从起始点 -》 目标位置
// 冒泡阶段：目标位置 -》 起始点

// 通过冒泡原理 ->事件代理：例如：获取ul中每个li的点击信息
// var ul1 = document.getElementsByTagName("ul")[0];
// ul1.addEventListener("click",ulClick);
// function ulClick(event){
//     console.log(event.target);
// }


// function add(){//加法  函数的定义
//     // var arguments ~= [1,2,4,5];//arguments~=数组
//     // x = arguments[0];
//     // y = arguments[1];
//         var z = 0;
//         for(var i = 0; i<arguments.length;/*数组对应的长度*/i++){
//             z += arguments[i];
//         }
//         return z;/* 保存运行方式并跳出大括号 */
// }
// var rs = add(1,2,4,5);
// console.log("1+2 4,5 = " + rs);

// var score = parseInt(window.prompt('input'));
// if(score > 90 && score <= 100){
//     document.write('alibaba');
// }else if(score > 80 && score <= 90){
//     document.write('tencent');
// }else if(score > 70 && score <= 80){
//     document.write('baidu');
// }else if(score > 60 && score <= 70){
//     document.write('mogujie');
// }else if(score < 60 ){
//     document.write('On my god!! you gotta be kidding me!!!');
// }

/*for循环得出3，7，9的整除*/
// for(var i = 0; i < 100; i++){
//     if(i % 3 == 0 || i % 7 == 0 || i % 9 == 0){
//         document.write(i + " ");
//     }
// }