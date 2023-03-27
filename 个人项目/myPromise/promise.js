const Promise = require('./myPromise');

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('异步执行')
        resolve('promise1 fullfilled')
    }, 1000)
})

const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
        reject('promise2 rejected')
    }, 2000)
})

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise3 fullfilled')
    }, 500)
})

const promise4 = new Promise((_, reject) => {
    setTimeout(() => {
        reject('promise4 rejected')
    }, 400)
})

// Promise.all([promise1, promise3]).then(res => {
//     console.log('then', res)
// }).catch(error => {
//     console.log('catch', error)
// })

// Promise.myAll([promise1, promise3]).then(res => {
//     console.log('then', res)
// }).catch(error => {
//     console.log('catch', error)
// })

// Promise.race([promise1, promise2, promise3, promise4]).then(res => {
//     console.log('then', res)
// }).catch(error => {
//     console.log('catch', error)
// })

// Promise.myRace([promise1, promise2, promise3, promise4]).then(res => {
//     console.log('then', res)
// }).catch(error => {
//     console.log('catch', error)
// })

// Promise.myAny([promise2, promise4]).then(res => {
//     console.log('then', res)
// }).catch(error => {
//     console.log('catch', error)
// })

Promise.myAllSettled([promise1, promise2, promise3, promise4]).then(res => {
    console.log('then', res)
}).catch(error => {
    console.log('catch', error)
})


