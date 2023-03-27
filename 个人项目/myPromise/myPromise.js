Promise.myAll = function(promises) {
    return new Promise((res, rej) => {
        // 如果参数为空数组
        if (!promises.length) {
            res([]);
        }
        // 还需要判断promises是否是可迭代对象（Array,String,Map等）
        if (!typeof promises[Symbol.iterator] === 'function') {
            throw new Error('params is not a iterator')
        }
        
        let result = []; // 用来收集异步操作的返回值
        let count = 0; // 每次异步操作完成之后计数一次，直到promises队列中的promise执行完
        promises.forEach((item, index) => {
            Promise.resolve(item).then(itemRes => {
                count++;
                result[index] = itemRes;
                if (count === promises.length) {
                    res(result);
                }
            }).catch(error => {
                rej(error)
            })
        })
    })
}

Promise.myRace = function(promises) {
    return new Promise((resolve, reject) => {
        // 如果参数为空数组
        if (Object.prototype.toString.call(promises) === '[object Array]' && !promises.length) {
            resolve([]);
        }
        // 还需要判断promises是否是可迭代对象（Array,String,Map等）
        if (!typeof promises[Symbol.iterator] === 'function') {
            throw new Error('params is not a iterator')
        }
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                resolve(res);
            }).catch(reject)
        })
    })
}

class AggregateError extends Error {
    constructor(errors, message) {
        super(errors, message);
        this.errors = errors;
        this.message = message;
    }
}


Promise.myAny = function(promises) {
    // 如果参数为空数组
    if (!promises.length) {
        res([]);
    }
    // 还需要判断promises是否是可迭代对象（Array,String,Map等）
    if (!typeof promises[Symbol.iterator] === 'function') {
        throw new Error('params is not a iterator')
    }
    let count = 0; // 每次异步操作完成之后计数一次，直到promises队列中的promise执行完
    let result = []; // 用来收集异步操作的返回值
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                resolve(res);
            }).catch(error => {
                result[index] = error;
                count++;
                if (count === promises.length) {
                    reject(new AggregateError(result, 'All promise is rejected'))
                }
            })
        })
    })
}

Promise.myAllSettled = function(promises) {
    // 如果参数为空数组
    if (!promises.length) {
        res([]);
    }
    // 还需要判断promises是否是可迭代对象（Array,String,Map等）
    if (!typeof promises[Symbol.iterator] === 'function') {
        throw new Error('params is not a iterator')
    }
    let count = 0; // 每次异步操作完成之后计数一次，直到promises队列中的promise执行完
    let result = []; // 用来收集异步操作的返回值
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                result[index] = { status: 'fulfilled', value: res };
                count++;
                if (count === promises.length) {
                    resolve(result)
                }
            }).catch(error => {
                result[index] = { status: 'rejected', reason: error };
                count++;
                if (count === promises.length) {
                    resolve(result)
                }
            })
        })
    })
}

module.exports = Promise;
