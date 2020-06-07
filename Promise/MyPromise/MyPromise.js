
function MyPromise(executor) { // executor 成功 或失败
    var self = this;
    self.status = 'pending'; // 给个状态标记
    self.resolveValue = null; // 接收成功的值
    self.rejectReason = null; // 接收失败的值
    self.ResolveCallBackList = []; // setTimeout异步操作时，then也执行，存储注册成功函数
    self.RejectCallBackList = [];
    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'Fulfilled';// 给个成功状态标记
            self.resolveValue = value;
            self.ResolveCallBackList.forEach(function (ele) {// 存储的注册，成功的函数遍历一遍
                ele();
            });
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.status = 'Rejected';// 给个成功状态标记
            self.rejectReason = reason;
            self.RejectCallBackList.forEach(function (ele) {
                ele();
            });
        }
    }

    try {
        executor(resolve, reject); // 前面没报错，执行
    } catch (e) {
        reject(e);
    }
};
// 用于：如果返回值是Promise 对象 下一个then成功或失败取决于Promise 
function ResolutionRetrunPromise(nextPromise, returnValue, res, rej) {
    if (returnValue instanceof MyPromise) { // 如果你是MyPromise，成功或失败取决于Promise  看a是否是b的构造出来的
        // Promise 对象
        returnValue.then(function (val) { // 回调
            res(val);
        }, function (reason) {
            rej(reason)
        });
    } else { // 不是就成功,,不是它构造出的
        res(returnValue);
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    //空then
    if (!onFulfilled) {  //空then 如果没有注册成功返回的值,就返回之前的值
        onFulfilled = function (val) {
            return val;
        }
    }
    if (!onRejected) {
        onRejected = function (reason) {
            throw new Error(reason);
        }
    }
    var self = this;

    var nextPromise = new MyPromise(function (res, rej) { // 构造一个新的对象用于链式操作
        if (self.status === 'Fulfilled') {
            setTimeout(function () { // 异步执行
                try {
                    // var nextResolveValue = onFulfilled(self.resolveValue);// 存下一个成功的值
                    // res(nextResolveValue);  
                    var nextResolveValue = onFulfilled(self.resolveValue); // 存下一个成功的值

                    ResolutionRetrunPromise(nextPromise, nextResolveValue, res, rej);
                } catch (e) { // 捕获错误信息
                    rej(e);
                }

            }, 0);
        }

        if (self.status === 'Rejected') {
            setTimeout(function () { // 异步执行
                try {
                    var nextRejectValue = onRejected(self.rejectReason);
                    ResolutionRetrunPromise(nextPromise, nextRejectValue, res, rej);
                } catch (e) {
                    rej(e);
                }

            }, 0);
        }

        // setTimeout时异步操作状态是pending，存注册函数，然后等setTimeout异步执行完了，再把参数传入执行
        if (self.status === 'pending') {
            self.ResolveCallBackList.push(function () {
                try {
                    var nextResolveValue = onFulfilled(self.resolveValue);
                    ResolutionRetrunPromise(nextPromise, nextResolveValue, res, rej);
                } catch (e) {
                    rej(e);
                }
            });

            self.RejectCallBackList.push(function () {
                setTimeout(function () { // 异步执行
                    try {
                        var nextRejectValue = onRejected(self.rejectReason);
                        ResolutionRetrunPromise(nextPromise, nextRejectValue, res, rej);
                    } catch (e) {
                        rej(e);
                    }
                }, 0);
            });
        }
    });
    return nextPromise;
};

// 可以将多个Promise实例包装成一个新的Promise实例
// 成功返回一个数组，失败返回最先被reject失败状态的值
MyPromise.all = function (promiseArr) {
    var a;
    var arr = [];
    var t = 0;
    return new MyPromise(function (resolve, reject) {
        timer = setTimeout(function () {
            for (var i = 0; i < promiseArr.length; i++) {
                a = new MyPromise(function (resolve, reject) { // 只执行一次，无论成功失败
                    promiseArr.forEach(function (promise, index) { // 都注册成功和失败的回调
                        promise.then(resolve, reject);//执行成功或失败回调
                    });
                });
                arr.push(a);
                t++;
            }
            if (t == promiseArr.length) {
                clearTimeout(timer);
            }
        }, 0);
        resolve(arr);
    });
};

// 谁先成功使用谁
MyPromise.race = function (promiseArr) {
    return new MyPromise(function (resolve, reject) { // 只执行一次，无论成功失败
        promiseArr.forEach(function (promise, index) { // 都注册成功和失败的回调
            promise.then(resolve, reject);//执行成功或失败回调
        });
    });
};

















