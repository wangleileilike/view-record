// Function.prototype.mybind = function(){
// 	var fn = this;
// 	var args = [...arguments].slice(0);
// 	var context = args.shift();

// 	return function(){
// 		return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
// 	};
// };

// function foo(name) { 
//     console.log('this', this, name)
//  }

// var obj = { name: 'SB' }

// var bar = foo.mybind(obj, 'haha');

// bar();






const object = {
    name: 'Jake'
}
Function.prototype.myCall = function (context, ...args) {
  /* 
        错误做法：直接 context = context || window 
        context值为null和undefined的，this会自动指向全局对象
        值为数字0、空字符串、布尔值false的this也会指向该原始值的实例对象
    */
 context = [null, undefined].includes(context) ? window : Object(context)

 // 给context对象新增一个独一无二的属性以免覆盖原有同名属性，并赋值为：调用者fun函数
 console.log('新增属性前：', context);
const key = Symbol('call中独一无二的属性')
 context[key] = this
 console.log('新增属性后：', context);
 
 // 执行context对象里面的fun函数，此时fun函数里面的this指向调用者context
 const res = context[key](...args)
 
 delete context[key]
return res
}


console.log('-------------------------myCall------------------------------');

function fnA(a, b) {
    console.log('this', this, a, b)
}
// fnA() // 直接指向window
fnA.myCall(object, 1, 2)