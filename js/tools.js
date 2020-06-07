
//用于查看原始值和引用值 引用值的包装类
function type(target) {
    var ret = typeof (target); //简化 为了不用调用两次 
    var template = {
        "[object Array]": "array",
        "[object Object]": "object",
        "[object Number]": "number - object",
        "[object Boolean]": "boolean - object",
        "[object String]": "string - object",
    }
    if (target === null) {
        return null;
    } else if (ret == "object") {
        //数组//对象//包装类 Object.prototype.toString
        var str = Object.prototype.toString.call(target);
        return template[str];
    } else {
        return ret;
    }
}


// 数组去重
var arr = [1, 1, 1, 2, 2, 2, 3, 2, 1,];
// var obj = {
//     1 : "abc",
//     2 : "abc" 
// }
// obj[1] --> undefined;
// obj[1] --> 'abc'
// obj[2] --> undefined;
Array.prototype.unique = function () {
    var temp = {},
        arr = [],
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!temp[this[i]]) {
            temp[this[i]] = "abc";
            arr.push(this[i]);
        }
    }
    return arr;
}
console.log(arr.unique());


//字符串去重
var a = "adsfasdfasdf";
String.prototype.quchong4 = function () {
    var obj = {};
    var newStr = "";
    var len = this.length;
    for (var i = 0; i < len; i++) {
        if (!obj[this[i]]) {
            newStr += this[i];
            obj[this[i]] = 1;
        }
    }
    return newStr;
}
console.log(a.quchong4());
// 方法一：for遍历
function quchong1(str) {
    var newStr = "";
    var flag;
    for (var i = 0; i < str.length; i++) {
        flag = 1;
        for (var j = 0; j < newStr.length; j++) {
            if (str[i] == newStr[j]) {
                flag = 0;
                break;
            }
        }
        if (flag) newStr += str[i];
    }
    return newStr;
}
// 方法二：indexOf(无兼容问题)
function quchong2(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (newStr.indexOf(str[i]) == -1) {//newStr中没有出现str[i]返回-1
            newStr += str[i];
        }
    }
    return newStr;
}
// 方法三：search()方法
function quchong3(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (newStr.search(str[i]) == -1) //没匹配到返回-1
            newStr += str[i];
    }
    return newStr;
}
// 方法四：对象属性
function quchong4(str) {
    var obj = {};
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            newStr += str[i];
            obj[str[i]] = 1;
        }
    }
    return newStr;
}


//JS：一个字符串由[a-z]组成，找出第一个只出现一次的字母 Unicode编码
var mystr = 'asdasdasdwdascxc';
function fis(str) {//97
    var len = str.length;
    var arr = [];
    for (var i = 0; i < 26; i++) {
        arr[i] = 0;
    }
    for (var i = 0; i < len; i++) {
        var s = str[i].charCodeAt() - 97;
        arr[s]++;
    }
    for (var i = 0; i < len; i++) {
        // console.log(str[i]);
        if (arr[str[i].charCodeAt() - 97] == 1) {
            // var letter = String.fromCharCode(97 + i);
            console.log(str[i]);
            return;
        }
    }
    console.log("No that letter!")
    return;
}
fis(mystr);


// 封装方法兼容浏览器获取滚动条信息
function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}


// 封装方法兼容浏览器查看可视口窗口     
function getViewportOffset() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        if (document.compatMode === "BackCompat") {
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}


// 兼容各浏览器 获取元素属性    
var div = document.getElementsByTagName('div')[0];
function getStyle(elem, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];//IE9以上兼容
    } else {
        return elem.currentStyle[prop]; //IE9以下兼容
    }
}
// console.log(getStyle(div,'height'));


//封装事件处理函数 兼容 ****
function addEvent(elem, type, handle) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, function () {
            handle.call(elem);
        })
    } else {
        elem['on' + type] = handle;
    }
}


// 封装函数 取消冒泡
function stopBubble(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}


// 封装取消默认事件 右键出菜单 兼容浏览器
function cancelHandler(event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}

// 异步加载   封装
// function loadScript(url, callback) {
//     var script = document.createElement('script');
//     script.type = "text/javascript";
//     if(script.readyState){
//         script.onreadystatechange = function () { // ie
//             if(script.readyState == "complete" || script.readyState == "loaded"){
//                 callback();
//             }
//         }
//     }else{
//         script.onload = function () {//Safari chrome firefox opera
//             callback();
//         }
//     }
//     script.src = url; // 在解析地址之前绑定
//     document.head.appendChild(script);
// }
//  loadScript('../test/js/demo.js',function(){
//      test();
//  });
// 换 执行tools对象里面的test方法
function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function () { // ie  readyState改变时触发
            if (script.readyState == "complete" || script.readyState == "loaded") {
                //两个都是加载完 loading是加载中
                tools[callback]();
            }
        }
    } else {
        script.onload = function () {//Safari chrome firefox opera
            tools[callback]();
        }
    }
    script.src = url; // 在解析地址之前绑定
    document.head.appendChild(script);
}
loadScript('../test/js/demo.js', 'test');

//深度克隆
function deepClone(origin, target) {
    var target = target || {},
        toStr = Object.prototype.toString,
        arrStr = "[object Array]";
    for (var prop in origin) {
        if (origin.hasOwnProperty(prop)) {
            if (origin[prop] !== "null" && typeof (origin[prop]) == 'object') {
                if (toStr.call(origin[prop]) == arrStr) {
                    target[prop] = [];
                } else {
                    target[prop] = {};
                }
                deepClone(origin[prop], target[prop]); //递归出口
            } else {
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}





