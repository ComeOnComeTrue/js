//根据性别过滤 sex

function filterArrBySex(data, sex) {
    if (sex == 'a') {
        return data;
    } else {
        return data.filter(function (ele, index, self) {
            return ele.sex == sex;
            // if(ele.sex == sex){
            //     return true;
            // }else{return false}
        });
    }
}
