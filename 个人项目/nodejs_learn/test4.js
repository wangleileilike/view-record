var a = new Promise((resolve, reject) => {
    console.log(111)
    setTimeout(() => {
        resolve('孙子');
    }, 3000);
});
console.log(222)
a.then(res => { return res }).then(res => { console.log(res, '草泥马') })
console.log(333)