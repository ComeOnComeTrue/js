"use strict";

// 写场景
// function sum (...arg) {// 收集成数组,[1,2,3] ->> Arr
//     return arg;
// }
// console.log(sum(2,3,1));
// function test (a, b, ...arg) {//读： 一定要放在最后面,
//     console.log(a,b,arg);
// }
// test(10, 20 , 'a', 'b')// 后面多出的参数都变成Array中值
// // 去掉最大和最小值之后求平均数
// function avearge (...arg) {// 写： 收集成数组,[1,2,3] ->> Arr 
//     arg.sort(function (a, b) {
//         return a - b;
//     });
//     arg.pop(); // 去掉最小值
//     arg.shift(); // 去掉最大值
//     return computedScore (...arg);// 读：展开数组 Arr ->>  [1,2,3] 
// };
// function computedScore (...arg) {// 写： 收集成数组,[1,2,3] ->> Arr 
//     let sum = 0;
//     arg.forEach(function (ele) {
//         sum += ele;
//     });
//     return sum / arg.length;
// }
// console.log( avearge(88, 99, 10, 44, 55) );
// let person = {
//     name: 'xm',
//     age: '18'
// }
// let leader = {
//     name: 'xf',
//     age: '19'
// }
// let person1 = {
//     leader: {
//         ...leader,
//     },
//     personNum: 25
// }
// // 函数 new 正则等一些复制不了
// let obj = { // 加深克隆，对象中一层时可使用
//     ...person, // 复制对象
//     ...person1,
//     leader: {// 覆盖了person1的leader
//         ...leader,
//     }
// }
// let obj = JSON.parse( JSON.stringify(person1) );// 加深克隆，简写
// console.log(obj)
// destructuring 解构
// 解构对象
// let obj = {
//     name: 'aa',
//     age: 18
// };
// let {name, age} = obj;//声明变量并取对象属性值当值
// console.log(name, age)
// // sex = 'male' 默认值，
// let {name: oName, age:oAge, sex = 'male'} = obj;
// console.log(oName, oAge)
// 解构数组
// let arr = [1, 2, 3];
// let [x, y, z] = arr;
// // let { 0: x, 1: y, 2: z } = arr;
// console.log(x, y, z);
// let arr = [1, 2, 3, {name : 'xm'}];
// let [,,,{name}] = arr;
// console.log(name);
// 箭头函数
// let sum = (a, b) => a + b;// ==let sum = (a, b) => {return a + b}
// let sum = (a, b) => ({a:a,b: b});// return 对象
// console.log(sum(10, 20))
// function sum (x) {
//     return function (y) {
//         return function (z) {
//             return x + y + z;
//         }
//     }
// }
// let sum = x => y => z => x + y + z;
// console.log(sum(1)(2)(3)); // 6
// function outer () {
//      let sum = (a, b) => {
//          console.log(arguments, this,a );//不会指向自身的，指向上一个arguments,或this
//      };
//      sum(1, 2)
// }
// outer(9, 10)
// let obj = {
//     a :  () => {
//         console.log(1,this)
//     }
// }
// console.log( obj.a() );
// let obj = {
//     a: 'innerObj',
//     // fn: function () {}
//     fn () {
//         let a = () => {
//             setTimeout( () => {
//                 //this 指向最近的非箭头函数的this
//                 console.log(this.a);
//             }),500;
//         }
//         a();
//     }
// }
// obj.fn();
// // React this 小技巧
// let arr = [10, 20, 30, 40];
// arr.map(ele => ele * ele);  arr.fileter(ele => ele > 20);
// Object.defineProperty()
// var obj = {
// }
// var tempValue = '';
// Object.defineProperty(obj, 'name', {
//     // value:'xx',
//     // writable: false,
//     configurable: true,//可配置
//     enumerable: true,// 可枚举
//     get: function () { // 获取值触发
//         console.log(2)
//         return tempValue;
//     },
//     set: function (newValue){ // 更改时触发
//         tempValue = newValue;
//         console.log(1)
//     }
// })
// obj.name = 10;
// console.log(obj.name);
// var obj = {
//     tempValue : 'dd',
//     get name() {
//         return this.tempValue;
//     },
//     set name (newValue){
//         this.tempValue = newValue;
//     }
// }
// obj.name = 10;
// console.log(obj.name);
// es6 数据劫持  
// let oData = {
//     val: 'xx',
//     _val : 'aa'
// }
// let oProxyData = new Proxy (oData, {
//     set (target, key, value, receiver) {//key和value是设置之后的属性名和值
//         // console.log(target, key, value, receiver); 
//         unData()
//         return Reflect.set(target, key, value);
//     },
//     get (target, key, receiver) { // 源对象this  自身val 对象名和值
//         // console.log(target, key, receiver); 
//         return Reflect.get(target, key); // 获取对象属性值 == target[key]
//     },
//     // has (target, key) { // 用于 in 操作时触发
//     //     // 私有属性和没有的返回false
//     //     return key.indexOf('_') != -1 ?  false : key in oData;
//     // } 
//     // deleteProperty (){} 用于delete时触发
//     // ........
// });
// function unData () {
//     console.log('更新了')
// }
// oProxyData.val = 10
// oProxyData[0] = 2;
// calss
// class Plane { 
//     //不可设置非方法的静态属性比如name =10; static alive = 10;
//     static alive () { // 静态属性
//         // 变成Plane的私有方法和属性
//         return true;
//     }
//     constructor (name) {//私有属性
//         // 构造者的公有属性
//         this.name = name || '普通飞机';
//         this.blood = 100;
//     }
//     fly () { // 设置Plane.prototype属性方法
//         // 不可自身使用，构造着可以使用
//         console.log('fly');
//     }
// };
// var oP = new Plane();
// console.log(Plane.alive())
// class AttackPlane extends Plane{// 继承Plane
//     // AttackPlane 继承了静态属性，可继承私有属性，
//     constructor (name) {
//         super(name); // 用于继承私有属性
//         this.logo = 'xx'
//     }
//     dan () {
//         console.log('biubiubiu')
//     }
// }
// var oAp = new AttackPlane('攻击机');
// 1. 一定要new
// 2. class Plane.prototype 不能枚举
// 3. 静态属性要放到Plane 非原型
// ES7变化calss属性
// class Search {
//     static sum = 10;//静态属性
//     constructor () {//私有属性
//         this.keyValue = 'en';
//     }
//     url = 'src/'//ES7私有属性定义方式
//     getCount () {
//         console.log('发送请求')
//     }
// }
// let oAp = new Search(); 
// console.log(oAp.keyValue)
// ES7变化calss属性 @decorator 装饰器
// let oInput = document.getElementById('inp');
// let oBtn = document.getElementById('btn');
// // 张三
// oInput.oninput = function () {
//     oS.keyValue = this.value;
// };
// oBtn.onclick = function () {
//     oS.getContent(10, 20);
// };
// @Skin // 装饰Search添加属性a
// class Search {
//     constructor () {//私有属性
//         this.keyValue = '';
//     }
//     @myReadOnly //设置了装饰器，es7的私有属性定义方式将不被获取
//     url = 'urlA-'//ES7私有属性定义方式
//     @dealData('张三')
//     getContent (a, b) {
//         console.log('向' + this.url + '发送网络请求，数据：' + this.keyValue, a, b);
//         return 10;
//     }
// }
// let oS = new Search();
// function Skin(target) {// Search.a
//     target.a = 'a';
// }
// // 李四
// // 装饰私有属性  descriptor里的值是initializer:url
// function myReadOnly (proto, key, descriptor) {
//     console.log(proto, key, descriptor);
//     descriptor.writable = false; // 让url变成不可写的
//     descriptor.initializer = function () {// 用于读写url的值
//         return 6;
//     }
// }
// // 修饰原型上的属性  descriptor里的值是value:getContent
// // function dealData (proto, key, descriptor) {
// //     console.log(proto, key, descriptor);
// //     let oldValue = descriptor.value;
// //     // 代理思想
// //     descriptor.value = function () {//调用的是getContent
// //         // 不改变原有属性，还可以增加新属性
// //         var urlB = "urlB-";
// //         console.log('向' + urlB + '发送网络请求，数据：' + this.keyValue) 
// //         return oldValue.apply(this, arguments); // 数据传给getContent
// //     }
// // }
// function dealData (ms) {
//     return function (proto, key, descriptor){
//         console.log(proto, key, descriptor);
//         let oldValue = descriptor.value;
//         // 代理思想
//         descriptor.value = function () {//调用的是getContent
//             // 不改变原有属性，还可以增加新属性
//             var urlB = "urlB-";
//             console.log('向' + urlB + '发送网络请求，数据：' + this.keyValue + ms) 
//             return oldValue.apply(this, arguments); // 数据传给getContent
//         }
//     }
// }
// ES6---Set、Map:存储属性：
// 一般传 [] 和 '' 返回类似于类数组的数组  arguments NodeList
// let oS = new Set([2, true, { name: 'c' }, 2]);
// oS.add(1)//添加，参数:一个或数组或boolean
// // oS.delete(1); oS.clear();// 删除 // 清空
// // 遍历获取数组值 forEach、for of
// oS.forEach(val => {
//     console.log(val);
// });
// for (let prop of oS) {
//     console.log(prop)
// }
// // 数组转成 Set形式的数组
// let arr = [1, 2, 3, 4]; let newArr = new Set(arr);
// // ...  Array.from 把类数组或数据接待转换成 数组
// // Array.from 字符串也可以转换成数组
// console.log( Array.from(newArr),[...newArr]);
// 并集 交集和差集 == 集合 == arr obj set map
// let arr1 = [1, 2, 3, 2, 3];
// let arr2 = [3, 2, 4, 4, 5];
// // 并集
// let oS = new Set([...arr1, ...arr2]);
// // 交集
// let oS1 = new Set(arr1);
// let oS2 = new Set(arr2);
// let newArr = [...oS1].filter(ele => oS2.has(ele));
// // 差集
// let oS1 = new Set(arr1);
// let oS2 = new Set(arr2);
// let newArr1 = [...oS1].filter(ele => !oS2.has(ele)); 
// let newArr2 = [...oS2].filter(ele => !oS1.has(ele));
// console.log([...newArr1, ...newArr2]);
// 初始化 每个数组都是属性 每个数组有一个key和value值
// 方法可原型链找：set() get() has()有没有属性名返回布尔值 clear() 
// let oMap = new Map([['name', 'aa'],['name1','aa']])
// let obj = {};
// oMap.set(obj, '!!!')
// console.log(oMap)
// //循环遍历 拿到每一个key和value
// for (let oArr of oMap) {
//     console.log(oArr)
// }
// let fs = require('fs'); // node 的对象
// // 读取文件 异步操作 正确输出data，错误输出err
// // fs.readFile('./data/number.txt', 'utf-8', (err, data) => {
// //     if (data) {
// //         fs.readFile(data, 'utf-8', (err, data) => {
// //             if (data) {
// //                 fs.readFile(data, 'utf-8',  (err, data) => {
// //                     console.log(data);
// //                 });
// //             }
// //         })
// //     }
// // });
// // process.on('uncaughtException', (err) => {
// //     console.log(err, 'okok')
// // });
// // try {
// //     fs.readFile('./data/number.txt', 'utf-8', (err, data) => {
// //         console.log(data)
// //         // try {
// //             throw new Error('1111')
// //         // }catch(e) {
// //         //     console.log(e, 'okok');
// //         //     console.log(9)
// //         // }
// //     });
// // }catch(e) {
// //     console.log(e, 'ok');
// // }
// // 并发异步操作，最后我们想得到所有的结果
// // 几个并发操作，获得几个结果。
// let oStudent = {
// };
// function show (data) {
//     console.log(data);
// };
// function show2 (data) {
//     console.log(data, 2);
// }
// fs.readFile('./data/number.txt', 'utf-8',  (err, data) => {
//     if (data) oStudent.number = data;
//     Store.fire(oStudent);
// });
// fs.readFile('./data/name.txt', 'utf-8',  (err, data) => {
//     if (data) oStudent.name = data;
//     Store.fire(oStudent);
// });
// fs.readFile('./data/score.txt', 'utf-8',  (err, data) => {
//     if (data) oStudent.score = data;
//     Store.fire(oStudent);
// });
// // function after (times, cb) {
// //     return function () {
// //         --times == 0 && cb.apply(null, arguments);
// //     }
// // }
// // let newShow = after(3, show);
// // Promise 原理
// // 发布订阅
// let Store = {
//     list: [],
//     times: 3,
//     subscribe (func) {
//         this.list.push(func);
//     },
//     fire (...arg) {
//         --this.times == 0 && this.list.forEach((ele) => {
//             ele.apply(null, arg);
//         });
//     }
// }
// Store.subscribe(show);
// Store.subscribe(show2);
// Promise
// 同步执行 跟jQ的Deferred很像
// let oP = new Promise((resolve, reject) => {
//     // 异步操作
//     //大于六十触发成功回调，小于触发失败回调
//     setTimeout(() => {
//         Math.random() * 100 > 60 ? resolve('ok') : reject('no');
//     },1000);
// });
// // 注册 成功和失败回调
// oP.then((val) => {
//     console.log(val);
// }, (reason) => {
//     console.log(reason);
// });
// //  结合前面知识：解决回调地狱
// let fs = require('fs');
// function readFile (path) {
//     return new Promise((res, rej) => {
//         fs.readFile(path, 'utf-8', (err, data) => {
//             if (data) {
//                 res(data);
//             }else {
//                 rej(err);
//             }
//         })
//     });
// };
// // Generator
// function * read () {
//     let val1 = yield readFile('./data/number.txt');
//     let val2 = yield readFile(val1);
//     let val3 = yield readFile(val2);
//     return val3;
// };
// // 自己写的co
// function Co (oIt) {
//    return new Promise((res, rej) => {
//         let next = (data) => {
//             let {value, done} = oIt.next(data);
//             if (done) {
//                 res(value);
//             }else {
//                 value.then((val) => {
//                     next(val);
//                 }, rej);
//             }
//         }
//         next();
//    });
// }
// Co( read() ).then((val) => {
//     console.log(65, val);
// }, () => {
// })
// // co 工具 模块 解决回调地狱
// let co = require('co'); 
// co( read() ).then((val) => {
//     console.log(val);
// });
var fs = require('fs'); // promise化异步操作


var readFile = promisify(fs.readFile);
var writeFile = promisify(fs.writeFile);
var readDir = promisify(fs.readDir);

function promisify(func) {
  return function () {
    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    return new Promise(function (res, rej) {
      func.apply(void 0, arg.concat([function (err, data) {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      }]));
    });
  };
}

readFile('./data/number.txt', 'utf-8').then(function (val) {
  console.log(val);
}); // function promisifyAll (obj) {
//     for (let key in obj) {
//         let fn = obj[key];
//         if (typeof fn === 'function') {
//             obj[key + 'Async'] = promisify(fn);
//         }
//     }
// }
