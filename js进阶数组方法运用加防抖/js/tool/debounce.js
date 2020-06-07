//防抖
function debounce (handler, delay) {//处理者，延迟
    var timer = null;
    return function (e) {
        var _self = this, _arg = arguments;//_arg类数组
        clearTimeout(timer);
        timer = setTimeout(function () {
            handler.apply(_self,_arg);//
        },delay);
    }
}

