// bind功能 改变this指向即绑定this 接收参数传递到函数中 返回一个新函数
Function.prototype.myBind = function(context, ...args) {
    const _this = this || window || global;
    function func(...params) {
        return _this.myCall(context, ...args, ...params)
    }
    if (_this.prototype) {
        func.prototype = Object.create(_this.prototype);
    }
    return func
}

// call功能 改变this指向 被call绑定之后函数立即执行 返回值为函数的返回值
Function.prototype.myCall = function(thisArg,...args) {
    let _this = thisArg;
    // 判断传入参数thisArg的类型 如果是null和undefined的话 返回window或者global(node环境中是global)
    if (thisArg == undefined) {
        _this = typeof window === 'object' ? window : global;
    } else {
        _this = Object(thisArg);
    }
    
    const key = Symbol('fn');
    _this[key] = this;
    // 通过obj.fn()的方式执行这个函数 函数内部的this就会指向调用它的obj
    const result = _this[key](...args);
    delete _this[key];
    // 将函数的返回值返回出去
    return result
}


// call功能 改变this指向 被call绑定之后函数立即执行 返回值为函数的返回值
Function.prototype.myApply = function(thisArg, args) {
    let _this = thisArg;
    // 判断传入参数thisArg的类型 如果是null和undefined的话 返回window或者global(node环境中是global)
    if (thisArg == undefined) {
        _this = typeof window === 'object' ? window : global;
    } else {
        _this = Object(thisArg);
    }
    
    const key = Symbol('fn');
    _this[key] = this;
    // 通过obj.fn()的方式执行这个函数 函数内部的this就会指向调用它的obj
    const result = _this[key](...args);
    delete _this[key];
    // 将函数的返回值返回出去
    return result
} 
 
 


function foo(height, weight, fruits) {
    console.log('this', this, this.age, height, weight, fruits);
    return '函数的返回值'
}

const obj = {
    age: 666
}

// 验证
const bar1 = foo.myBind(obj, 180, 69);
bar1('banana');

// 对比
const bar2 = foo.bind(obj, 180, 69);
bar2('banana');

// 验证
const bar3 = foo.myCall(obj, 180, 69);
console.log('bar', bar3)

// 对比
const bar4 = foo.call(obj, 180, 69);
console.log('bar', bar4)


// 验证
const bar5 = foo.myApply(obj, [55, 66, 77, 88]);
console.log('bar', bar5)

// 对比
const bar6 = foo.apply(obj, [55, 66, 77, 88]);
console.log('bar', bar6)