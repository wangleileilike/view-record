// 深拷贝
function deepCopy(obj) {
  if (!obj || typeof obj !== 'object') {
    return obj
  }

  let newObj = {};
  if (Object.prototype.toString.call('obj') === '[object Array]') {
    newObj = [];
  }

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        newObj[key] = typeof element === 'object' ? deepCopy(element) : element;
    }
  }

  return newObj
}

// 浅拷贝
function lightCopy(obj) {
    // 如果不是对象类型，则直接返回
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  // 返回浅拷贝后的对象
  return Object.assign({}, obj);
}


// 验证
var a = { info: { name: 'Mark' } };
// var b = lightCopy(a); 
var b = deepCopy(a);
a.info.name = 'JSON';


var str = 'test';
console.log('验证值类型', lightCopy(str) === deepCopy(str), deepCopy(str)) // true 'test'


console.log('验证引用类型', a, b); // 浅拷贝：a { info: { name: 'JSON' } }  b { info: { name: 'JSON' } }   
                          //深拷贝：a { info: { name: 'JSON' } }   b { info: { name: 'Mark' } }

