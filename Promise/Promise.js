// 回顾异步操作以及并发异步问题与解决：
// let fs = require('fs'); // node 的对象
// // 读取文件 异步操作 正确输出data，错误输出err
// fs.readFile('./data/number.txt', 'utf-8', (err, data) => {
//     if (data) {
//         fs.readFile(data, 'utf-8', (err, data) => {
//             if (data) {
//                 fs.readFile(data, 'utf-8',  (err, data) => {
//                     console.log(data);
//                 });
//             }
//         })
//     }
// });
// // process.on('uncaughtException', (err) => { // 捕获错误信息
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
// // }catch(e) { // 出错时执行我
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




// 利用Promise简单解决回调等问题

let fs = require('fs');// node 的对象

let oStudent = {};

function readFile (path) {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8',  (err, data) => {
            if (data) { 
                res(data);//成功方法传值
            }else{ rej(err) }
        });
    });
}
// Promise.all 并发异步操作 几个操作，几个结果
// 可以将多个Promise实例包装成一个新的Promise实例
// 成功返回一个数组，失败返回最先被reject失败状态的值
Promise.all([readFile('./data/number.txt'), readFile('./data/name.txt'), readFile('./data/score.txt')]).then((val) => {
    console.log(val);  // 返回数组[val1,val2,val3]
},(reason) => { console.log(reason) });

// race 赛跑 谁先成功就用谁的,不管成功或失败
Promise.race([readFile('./data/number.txt'), readFile('./data/name.txt'), readFile('./data/score.txt')]).then((val) => {
    console.log(val);
},(reason) => { console.log(reason) });



// Promise解决回调地狱 但免不了回调  
// ES7
readFile('./data/number.txt').then((data) => {
    return readFile(data);
}).then((data) => {
    return readFile(data);
}).then((data) => {
    console.log(data);
});