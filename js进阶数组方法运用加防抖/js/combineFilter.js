//高级功能 结合过滤

function combineFilter (config) {
     return function (data) {
        for (var prop in config) {
            // console.log(prop, config[prop],state[prop]);prop = text sex/filterArrByText和Sex的函数/‘’和a
            
            // data = config[prop](data,state[prop]);//漏12//filterArrByText(personArr,text)和filterArrBySex(personArr,Sex)
            data = config[prop](data,store.getState(prop));
        }
        return data;
     }
}

var lastFilterArr = combineFilter({
    text: filterArrByText,
    sex: filterArrBySex
});

