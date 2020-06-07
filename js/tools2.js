// 模仿userAgent 返回由客户机发送服务器的 user-agent 头部  返回信息
var nVer = navigator.appVersion,
    nAgt = navigator.userAgent,
    browser = navigator.appName,
    version = '' + parseFloat(navigator.appVersion),
    majorVersion, nameOffset, verOffset, ix, network = 'unknown';
// Opera
if ((verOffset = nAgt.indexOf('Opera')) != -1) {
    browser = 'Opera';
    version = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf('Version')) != -1) {
        version = nAgt.substring(verOffset + 8);
    }
}
// Opera Next 
if ((verOffset = nAgt.indexOf('OPR')) != -1) {
    browser = 'Opera';
    version = nAgt.substring(verOffset + 4);
}
// MSIE
else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
    browser = 'Microsoft Internet Explorer';
    version = nAgt.substring(verOffset + 5);
}
// Chrome
else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
    browser = 'Chrome';
    version = nAgt.substring(verOffset + 7);
}
// Safari
else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
    browser = 'Safari';
    version = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf('Version')) != -1) {
        version = nAgt.substring(verOffset + 8);
    }
}
// Firefox
else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
    browser = 'Firefox';
    version = nAgt.substring(verOffset + 8);
}
// MSIE 11+
else if (nAgt.indexOf('Trident/') != -1) {
    browser = 'Microsoft Internet Explorer';
    version = nAgt.substring(nAgt.indexOf('rv:') + 3);
}
// WeiXin
else if (nAgt.indexOf('NetType/') != -1) {
    browser = 'WeiXin';
    if (nAgt.indexOf('NetType/WIFI') != -1) {
        network = 'WIFI';
    } else if (nAgt.indexOf('NetType/2G') != -1) {
        network = '2G';
    } else if (nAgt.indexOf('NetType/3G+') != -1) {
        network = '3G+';
    }
    verOffset = nAgt.lastIndexOf('/')
    version = nAgt.substring(verOffset + 1);
    if (browser.toLowerCase() == browser.toUpperCase()) {
        browser = navigator.appName;
    }
}
// Other browsers
else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
    browser = nAgt.substring(nameOffset, verOffset);
    version = nAgt.substring(verOffset + 1);
    if (browser.toLowerCase() == browser.toUpperCase()) {
        browser = navigator.appName;
    }
}
// trim the version string
if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);
majorVersion = parseInt('' + version, 10);
if (isNaN(majorVersion)) {
    version = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
}
// mobile version
var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
// start system detect
var os = '';
var clientStrings = [
    { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
    { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
    { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
    { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
    { s: 'Windows Vista', r: /Windows NT 6.0/ },
    { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
    { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
    { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
    { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
    { s: 'Windows 98', r: /(Windows 98|Win98)/ },
    { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
    { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
    { s: 'Windows CE', r: /Windows CE/ },
    { s: 'Windows 3.11', r: /Win16/ },
    { s: 'Android', r: /Android/ },
    { s: 'Open BSD', r: /OpenBSD/ },
    { s: 'Sun OS', r: /SunOS/ },
    { s: 'Linux', r: /(Linux|X11)/ },
    { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
    { s: 'Mac OS X', r: /Mac OS X/ },
    { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
    { s: 'QNX', r: /QNX/ },
    { s: 'UNIX', r: /UNIX/ },
    { s: 'BeOS', r: /BeOS/ },
    { s: 'OS/2', r: /OS\/2/ },
    { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
];
for (var id in clientStrings) {
    var cs = clientStrings[id];
    if (cs.r.test(nAgt)) {
        os = cs.s;
        break;
    }
}
var osVersion = '';
if (/Windows/.test(os)) {
    osVersion = /Windows (.*)/.exec(os)[1];
    os = 'Windows';
}
switch (os) {
    case 'Mac OS X':
        osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
        break;
    case 'Android':
        osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
        break;
    case 'iOS':
        osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
        osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
        break;
}
//detect data
var params = {};
params.os = os;//操作系统
params.osVersion = osVersion ? osVersion : 'unknown';//操作系统版本
params.mobile = mobile;//是否移动端访问
params.browser = browser;//浏览器
params.browserVersion = version;//浏览器版本
params.browserMajorVersion = majorVersion;//浏览器major版本
//输出对象
console.log(params);



// 模仿class获取方法
Element.prototype.getElementsByClassName = Document.prototype.getElementsByClassName = function (_className) {
    // _className
    // 获取document下面的所有标签
    var allDomArray = this.getElementsByTagName('*');
    var lastDomArray = [];
    function trimSpace(strClass) {
        var reg = /\s+/g;
        var newStrClass = strClass.replace(reg, ' ');
        return newStrClass;
    }
    for (var i = 0; i < allDomArray.length; i++) {
        var lastStrClass = trimSpace(allDomArray[i].className).trim();// trim()去首尾空格
        var classArray = lastStrClass.split(' ');// 按空格分开
        for (var j = 0; j < classArray.length; j++) {
            if (classArray[j] == _className) {
                lastDomArray.push(allDomArray[i])
                break;
            }
        }
    }
    return lastDomArray;
}
console.log(document.getElementsByClassName('demo'));


// 物体左右边匀速运动与停止    
var oDiv = document.getElementsByTagName('div')[0];
var oBtn = document.getElementsByClassName('btn')[0];
oBtn.onclick = function () {
    var iSpeed = 300 - oDiv.offsetLeft > 0 ? 7 : -7;
    clearInterval(timer);
    var timer = setInterval(function () {
        if (Math.abs(300 - oDiv.offsetLeft) < Math.abs(iSpeed)) {
            clearInterval(timer);
            oDiv.style.left = '300px'; //目标点的距离
        } else {
            oDiv.style.left = oDiv.offsetLeft + iSpeed + 'px'
        }
    }, 30);
    startMove(oDiv, 300);
}
// 匀速运动封装
function startMove(dom, target) { //运动物体,运动目标
    var iSpeed = target - dom.offsetLeft > 0 ? 7 : -7;
    clearInterval(timer);
    var timer = setInterval(function () {
        if (Math.abs(target - dom.offsetLeft) < Math.abs(iSpeed)) {
            clearInterval(timer);
            dom.style.left = target + ''; //目标点的距离
        } else {
            dom.style.left = dom.offsetLeft + iSpeed + 'px'
        }
    }, 30);
}
//缓冲运动封装 越距离目标越慢直到0
function startMove(dom, target) {
    var iSpeed = null;
    var timer = null;
    timer = setInterval(function () {
        iSpeed = (target - oDiv.offsetLeft) / 7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (oDiv.offsetLeft == target) {
            clearInterval(timer);
        } else {
            oDiv.style.left = oDiv.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}


// 单物体移入移出
var oDiv = document.getElementsByClassName('wrapper')[0];
oDiv.onmouseenter = function () {
    startMove(this, 0);
}
oDiv.onmouseleave = function () {
    startMove(this, -300);
}
function startMove(dom, target) {
    clearInterval(dom.timer);
    var iSpeed = null, timer = null;
    dom.timer = setInterval(function () {
        iSpeed = (target - dom.offsetLeft) / 7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (dom.offsetLeft == target) {
            clearInterval(dom.timer);
        } else {
            dom.style.left = dom.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}
// 改变不透明度
oDiv.onclick = function () {
    startMove(this, 50);
}
function getStyle(dom, attr) { // 读取属性
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[attr];//IE9以上兼容
    } else {
        return dom.currentStyle[attr]; //IE9以下兼容
    }
}
function startMove(dom, target) {
    clearInterval(timer);
    var iSpeed = null, timer = null, iCur = null;
    timer = setInterval(function () {
        iCur = parseFloat(getStyle(dom, 'opacity')) * 100;

        iSpeed = (target - iCur) / 7;

        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        console.log(iSpeed)
        if (iCur == target) {
            clearInterval(timer);
        } else {
            // 0 - 1 iCur * 100 iSpeed * 100  iCur + iSpeed 0 - 100 / 100
            dom.style.opacity = (iCur + iSpeed) / 100;
            console.log(dom.style.opacity)
        }
    }, 30);
}

// 多物体运动 封装
var oDiv = document.getElementsByTagName('div');
for (var i = 0; i < oDiv.length; i++) {
    oDiv[i].onmouseenter = function () {
        startMove(this, 400);
    }
    oDiv[i].onmouseleave = function () {
        startMove(this, 100);
    }
}
function getStyle(dom, attr) { // 读取属性
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[attr];//IE9以上兼容
    } else {
        return dom.currentStyle[attr]; //IE9以下兼容
    }
}
function startMove(dom, target) {
    clearInterval(dom.timer);
    var timer = null, iSpeed = null, iCur = null;
    dom.timer = setInterval(function () {
        iCur = parseInt(getStyle(dom, 'width'));
        iSpeed = (target - iCur) / 7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (iCur == target) {
            clearInterval(dom.timer);
        } else {
            dom.style.width = iCur + iSpeed + "px";
        }
    }, 30);
}
// 多物体不同值运动  封装 
var oDiv = document.getElementsByTagName('div');
for (var i = 0; i < oDiv.length; i++) {
    oDiv[0].onclick = function () {
        startMove(this, 'width', 400);
    }
    oDiv[1].onclick = function () {
        startMove(this, 'height', 200);
    }
    oDiv[2].onclick = function () {
        startMove(this, 'borderWidth', 20);
    }
    oDiv[3].onclick = function () {
        startMove(this, 'opacity', 50);
    }
}
function getStyle(dom, attr) { // 读取属性
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[attr];//IE9以上兼容
    } else {
        return dom.currentStyle[attr]; //IE9以下兼容
    }
}
function startMove(dom, attr, target) {
    clearInterval(dom.timer);
    var timer = null, iSpeed = null, iCur = null;
    dom.timer = setInterval(function () {
        if (attr == 'opacity') {
            iCur = parseFloat(getStyle(dom, attr)) * 100;
        } else {
            iCur = parseInt(getStyle(dom, attr));
        }
        iSpeed = (target - iCur) / 7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (iCur == target) {
            clearInterval(dom.timer);
        }
        if (attr == 'opacity') {
            dom.style.opacity = (iCur + iSpeed) / 100;
        } else {
            dom.style[attr] = iCur + iSpeed + "px";
        }
    }, 30);
}
// 多物体多值运动+回调机制 封装
var oTopDiv = document.getElementsByClassName('topDiv')[0];
var bottomDiv = document.getElementsByClassName('bottomDiv')[0];
oTopDiv.onclick = function () {
    startMove(this, { width: 400, height: 400, left: 200, top: 300, opacity: 50 }, function () {
        startMove(bottomDiv, { width: 400, height: 400, left: 200, top: 300, opacity: 50 }, function () {
            alert('over');
        })
    });
}
function getStyle(dom, attr) { // 读取属性
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[attr];//IE9以上兼容
    } else {
        return dom.currentStyle[attr]; //IE9以下兼容
    }
}
function startMove(dom, attrObj, callback) {
    clearInterval(dom.timer);
    var timer = null, iSpeed = null, iCur = null;
    dom.timer = setInterval(function () {
        var bStop = true;
        for (attr in attrObj) {
            if (attr == 'opacity') {
                iCur = parseFloat(getStyle(dom, attr)) * 100;
            } else {
                iCur = parseInt(getStyle(dom, attr));
            }
            iSpeed = (attrObj[attr] - iCur) / 7;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (attr == 'opacity') {
                dom.style.opacity = (iCur + iSpeed) / 100;
            } else {
                dom.style[attr] = iCur + iSpeed + "px";
            }
            if (iCur != attrObj[attr]) {
                bStop = false;
            }
        }
        if (bStop) {
            clearInterval(dom.timer);
            typeof callback == 'function' && callback();
        }

    }, 30);
}


// 加速运动
function startMove(dom, target) {
    var iSpeed = 20, timer = null, a = 2;
    timer = setInterval(function () {
        iSpeed = iSpeed + a;
        oDiv.style.left = oDiv.offsetLeft + iSpeed + 'px';
    }, 30);
}
// 弹性运动
var oDiv = document.getElementsByTagName('div')[0];
oDiv.onclick = function () {
    startMove(this, 300);
}
function startMove(dom, target) {
    clearInterval(timer);
    // 正 -> 负 <-
    var timer = null;
    var iSpeed = 0;
    var a = 3;
    var u = 0.8;
    timer = setInterval(function () {
        a = (target - dom.offsetLeft) / 5;
        iSpeed += a;
        iSpeed *= 0.8;
        if (Math.abs(iSpeed) < 1 && (target - dom.offsetLeft) < 1) {
            clearInterval(timer);
            dom.style.left = target + 'px';
        } else {
            dom.style.left = dom.offsetLeft + iSpeed + 'px';
        }
        console.log(iSpeed, target - dom.offsetLeft)
    }, 30);
}
// 弹性运动的小demo
var oLiArray = document.getElementsByClassName('ele');
var oLibg = document.getElementsByClassName('bg')[0];
for (var i = 0; i < oLiArray.length; i++) {
    oLiArray[i].onmouseenter = function () {
        startMove(oLibg, this.offsetLeft);
    }
}
function startMove(dom, target) {
    clearInterval(dom.timer);
    // 正 -> 负 <-
    var timer = null;
    var iSpeed = 0;
    var a = 3;
    var u = 0.8;
    dom.timer = setInterval(function () {
        a = (target - dom.offsetLeft) / 5;
        iSpeed += a;
        iSpeed *= 0.8;
        if (Math.abs(iSpeed) < 1 && (target - dom.offsetLeft) < 1) {
            clearInterval(timer);
            dom.style.left = target + 'px';
        } else {
            dom.style.left = dom.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}

// 模拟重力场  多方向运动 + 碰撞检测 + 重力加速度 + 能量损失
var oDiv = document.getElementsByTagName('div')[0];
var timer = null;
oDiv.onclick = function () {
    startMove(this);
}
function startMove(dom) {
    clearInterval(dom.timer);
    var iSpeedX = 6; // 多方向运动
    var iSpeedY = 8; // 多方向运动
    var g = 3; //重力加速度
    dom.timer = setInterval(function () {
        iSpeedY += g; // 重力加速度 使方块变慢
        var newTop = dom.offsetTop + iSpeedY; // 多方向运动
        var newLeft = dom.offsetLeft + iSpeedX; // 多方向运动
        if (newTop >= document.documentElement.clientHeight - dom.clientHeight) {//碰撞检测
            iSpeedY *= -1;
            iSpeedY *= 0.8;// 能量损失
            iSpeedX *= 0.8;// 能量损失
            newTop = document.documentElement.clientHeight - dom.clientHeight;
        }
        if (newTop <= 0) {
            iSpeedY *= -1;
            iSpeedY *= 0.8;// 能量损失
            iSpeedX *= 0.8;// 能量损失
            newTop = 0;
        }
        if (newLeft >= document.documentElement.clientWidth - dom.clientWidth) {//碰撞检测
            iSpeedX *= -1;
            iSpeedY *= 0.8;// 能量损失
            iSpeedX *= 0.8;// 能量损失
            newLeft = document.documentElement.clientWidth - dom.clientWidth;
        }
        if (newLeft <= 0) {
            iSpeedX *= -1;
            iSpeedY *= 0.8;// 能量损失
            iSpeedX *= 0.8;// 能量损失
            newLeft = 0;
        }
        if (Math.abs(iSpeedX) < 1) {
            iSpeedX = 0;
        }
        if (Math.abs(iSpeedY) < 1) {
            iSpeedX = 0;
        }
        if (iSpeedX == 0 && iSpeedY == 0 && newTop == document.documentElement.clientHeight - dom.clientHeight) {
            // 横向和纵向速度为0时且 方块距离导航栏距离 = 可视窗口 - 自身高度时 清定时
            clearInterval(dom.timer);
        } else {
            dom.style.left = newLeft + 'px'; // 多方向运动
            dom.style.top = newTop + 'px'; // 多方向运动
        }
    }, 30);
}