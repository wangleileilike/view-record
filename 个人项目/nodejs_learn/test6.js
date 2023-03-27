/**
 * js函数的toString自动调用
*/
function test() {
    function fn() {
		console.log('我是fn')
	}
    fn.toString = () => {
        console.log('toString()执行了吗???')
        return '大傻逼'
    }
    return fn
}

var a = test();
console.log('a', a)  


// 结论:由于fn函数的toString方法被改写，则在test函数返回时自动调用fn的toString方法，返回大傻逼
