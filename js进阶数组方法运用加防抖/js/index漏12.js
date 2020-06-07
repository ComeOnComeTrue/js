var personArr = [
    { name: '王港', src: './images/1.png', des: '颈椎不好', sex: 'm', age: 18 },//male
    { name: '刘莹', src: './images/2.png', des: '我是谁', sex: 'f', age: 25 },//femalemale
    { name: '王秀莹', src: './images/3.png', des: '我很好看', sex: 'f', age: 30 },
    { name: '刘金雷', src: './images/1.png', des: '一颗雷', sex: 'm', age: 21 },
    { name: '刘飞翔', src: './images/2.png', des: '瓜皮刘', sex: 'm', age: 26 }
];

// dom 感受事件发生 =》更改状态 =》影响试图
// 需求的增加 事件的越来越多 状态的越来越多 管理状态 合并行为


// initial variable
var oUl = document.getElementsByClassName('flWrapper')[0].getElementsByTagName('ul')[0];
var oInput = document.getElementsByClassName('sText')[0];
// 全局过滤条件 状态
// var filterText = '';//漏1
// var fliterSex = 'a';//漏1
var state = {
    text: '',
    sex: 'a'
}

//数据渲染页面
function rengerPage(data) {
    oUl.innerHTML = '';
    //遍历
    var htmlStr = '';//字符串拼接
    data.forEach(function (ele, index, self) {
        htmlStr = htmlStr + '<li><img src="' + ele.src + '"></img><p class="name">' + ele.name + '</p><p class="des">' + ele.des + '</p></li>'
        // console.log(htmlStr)
    });
    oUl.innerHTML = htmlStr;
}

rengerPage(personArr);

//添加行为
oInput.oninput = function () {
    // filterText = this.value;//漏1
    state.text = this.value;
    // var newArr = filterArrByText(personArr,filterText);//漏1
    // var newArr2 = filterArrBySex(newArr,filterSex);//漏1
    // var newArr = filterArrByText(personArr,state.text);//漏2
    // var newArr2 = filterArrBySex(newArr,state.sex);//漏2
    // rengerPage(newArr2);//漏1漏2
    rengerPage( lastFilterArr(personArr) );
}

//根据文本来过滤的函数 希望是纯函数
// function filterArrByText(data, text) {
//     if (!text) {
//         return data;
//     } else {
//         return data.filter(function (ele, index, self) {
//             // if(ele.name.indexOf(text) != -1){
//             //     return true;
//             // }
//             return ele.name.indexOf(text) != -1;//名字是否存在 存在 != -1
//         })
//     }
// }

//btn style

//类数组变数组 空数组原型上从0开始截取 this指向类数组 
var oBtnArr = [].slice.call(document.getElementsByClassName('btn'), 0);
var lastActiveBtn = oBtnArr[2];

// console.log(oBtnArr)
oBtnArr.forEach(function (ele, index, self) {
    // console.log(ele);
    ele.onclick = function () {
        changeActive(this);
        // filterSex = this.getAttribute('sex');//漏1
        state.sex = this.getAttribute('sex');
        // var newSex = rengerPage( filterArrBySex(personArr,this.getAttribute('sex')) );//渲染过滤
        // console.log(this.getAttribute('sex')); 
        // var newArr = filterArrBySex(personArr,filterSex);//漏1
        // var newArr2 = filterArrByText(newArr,filterText);//漏1
        // var newArr = filterArrBySex(personArr,state.sex);//漏2
        // var newArr2 = filterArrByText(newArr,state.text);//漏2
        // rengerPage(newArr2);//漏1漏2
        rengerPage( lastFilterArr(personArr) );
    }
});

function changeActive(curActiveBtn) {
    curActiveBtn.className = 'btn active';
    lastActiveBtn.className = 'btn';
    lastActiveBtn = curActiveBtn;//接受上一次的 
}

//根据性别过滤 sex
// function filterArrBySex(data, sex) {
//     if (sex == 'a') {
//         return data;
//     } else {
//         return data.filter(function (ele, index, self) {
//             return ele.sex == sex;
//             // if(ele.sex == sex){
//             //     return true;
//             // }else{return false}
//         });
//     }
// }