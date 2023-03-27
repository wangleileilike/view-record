
console.log('执行了吗')
const fetch = require("fetch");

fetch("/getInfo", { name: 'wangleilei' }, function(error, meta, body){
    console.log(body);
});