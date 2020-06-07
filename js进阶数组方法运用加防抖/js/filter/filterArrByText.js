//根据文本来过滤的函数 希望是纯函数

function filterArrByText(data, text) {
    if (!text) {
        return data;
    } else {
        return data.filter(function (ele, index, self) {
            // if(ele.name.indexOf(text) != -1){
            //     return true;
            // }
            return ele.name.indexOf(text) != -1;//名字是否存在 存在 != -1
        })
    }
}

