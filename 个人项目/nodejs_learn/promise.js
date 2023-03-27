var a = new Promise(resolve => {
    setTimeout(() => {
        resolve('a')
    }, 3000)
})

var b = new Promise((resolve, reject) => {
    throw new Error('草泥马')
    reject(666)
})

b.then(res => { console.log('res', res) }, err => { console.log('err', err) }).catch(res => { console.log('catch', res) }).finally(res => { console.log('finally', res) });