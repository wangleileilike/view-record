// 防抖
function debounce(fn, delay = 3000) {
    let timer;
    return function() {
        if (timer) {
            clearTimeout(timer);
        }
    
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay)
    }
}


// 节流
function throttle(fn, delay = 3000) {
    let timer;
    return function() {
        if (timer) {
            return;
        }
    
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay)
    }
}

function foo(index) {
    console.log('foo', index)
}

for (let index = 0; index < 10; index++) {
    debounce(foo)(index);  
}