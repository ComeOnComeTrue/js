function createStore (initialState) {
    var state = initialState || {};
    var list = [];
    function getState (type) {
        return state[type];
    }
    function dispatch (action) {
        state[action.type] = action.value;
        //调用之前订阅过的函数
        list.forEach(function (ele) {
            ele();
        })
    }
    function subscribe (func) {
        list.push(func)
    }

    return {
        getState: getState,//获取state[type]比如'a'
        dispatch: dispatch,//store.dispatch({type:'text',value:'王'})
        subscribe: subscribe
    }
}

var store = createStore( {text: '',sex: 'a'} );