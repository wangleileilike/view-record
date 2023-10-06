function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
    return [1, 2, 3];
}
function foo(info) {
    return { name: info.x, type: info.y };
}
var flag = greet("Maddison", new Date());
const msg = "hello there!";
const obj = { name: 'wangleilei', age: 88 };
console.log(obj, flag, foo({ x: 8989, y: 'kkkk' }));
// 类型断言？？某些情况下，我们可能比typescript更加清楚的知道某个变量的类型，所以我们可能希望手动指定一个值的类型 
// 例如下面的例子hshStr定义的时候是any类型，但是下面需要确定的用它的length属性的时候要把它断言为string类型
// 类型断言有两种方式
// 尖括号写法
let hshStr = 'to be or not to be';
let hshStrLength = hshStr.length;
// as写法
let hshStr1 = 'to be or not to be';
let hshStrLength1 = hshStr1.length;
//非空断言运算符（后缀 !）
function liveDangerously(x) {
    console.log(x.toFixed());
}
liveDangerously(88.8888);
// 确定赋值断言
let value;
console.log(value);
// 字面类型 下列 18 | 19 |20以及 1 | 2 |3这样的形式就是字面组合成联合 用来表示接受一组已知值
function bar(name, age) {
    console.log(`${name} 今年大概 ${age}岁`);
    return 3;
}
const oneHundred = BigInt(10000);
const weiyi = Symbol(11);
console.log('bigint || weiyi', oneHundred, weiyi);
// 泛型
function identity(arg) {
    return arg;
}
let output = identity("myString");
// 多个泛型参数
function getValue(value) {
    return value;
}
function getLength(value) {
    console.log(value.length); // 当T继承了Lengthwise之后，T类型的值上就有了length属性
    return value;
}
const keyValue1 = {
    key: 'wang',
    value: 909
};
const keyValue2 = {
    key: 90,
    value: '什么鬼'
};
// 泛型类 例如下面就是一个泛型类
class Stack {
    constructor() {
        this.data = [];
    }
    push(item) {
        return this.data.push(item);
    }
    pop() {
        return this.data.pop();
    }
}
const s1 = new Stack(); // 定义实例的时候写类型，比如，入栈和出栈都要是 number 类型
s1.push(787); // 入栈number类型的参数没问题，但是入栈其他类型就会报错
console.log('s1', s1)
let c1 = { list: ["1"] };
let c2 = [1];
// 泛型参数的默认类型
function createArrayT(length = 8, value) {
    let result = [];
    for (let index = 0; index < length; index++) {
        result[index] = value;
    }
    return result;
}
// 枚举
var Animal;
(function (Animal) {
    Animal[Animal["DOG"] = 3] = "DOG";
    Animal[Animal["CAT"] = 4] = "CAT";
    Animal[Animal["FISH"] = 5] = "FISH";
})(Animal || (Animal = {}));
const animal = Animal.DOG;
console.log('Animal', Animal, animal);
const color = [5 /* Color.RED */, 6 /* Color.PINK */, 7 /* Color.BLUE */];
console.log('color', color);
// 元组类型 tuple 表示一个已知数量和类型的数组
const tupleArr = [1, 2, 'leilei'];
// never类型 表示的是那些永不存在的值的类型 例如函数内部报错或者产生了死循环
function error(msg) {
    throw new Error(msg);
}
function deadLoop() {
    while (true) { }
}
// unknown类型 表示所有类型
// unknown与any的最大区别是 任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何类型。unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any
let hsts = 'dasd';
hsts = 8; // 编译正确
function add(x, y) {
    return x + y;
} // 前面的两个函数只是定义函数的传参类型，最后的函数才是定义函数的具体实现方法
const person = {
    name: 'wangleilei',
    age: 44,
    gender: '男'
};
const something = { name: 'wang', age: 78, gender: '男' };
