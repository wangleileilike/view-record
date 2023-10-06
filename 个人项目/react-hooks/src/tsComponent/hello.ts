function greet(person: string, date: Date): number[] {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
    return [1,2,3]
}


// 类型别名
type info = {
    x: number | string, // 联合类型
    y: string | number[],
    z?: string
}

// 接口声明
interface info1 {
    x: number | string, // 联合类型
    y: string | number[],
    z?: string,
    readonly d: number // readonly用来表示d这个属性只能被读，不能被修改
}

function foo(info: info): any {
    return { name: info.x, type: info.y }
}

var flag = greet("Maddison", new Date());

const msg: string = "hello there!";
const obj: any = { name: 'wangleilei', age: 88 };
declare const someCondition: boolean; // declare用来做类型声明,此处做的是普通声明
declare function shsn(name: string): void; // 声明一个函数
declare class Person { // 声明一个类
    name: string;
    age: number;
    sayHello(): void
}
declare namespace hello {  // 声明一个类
    function log(log: string): any;
    const version: string
}

console.log(obj, flag, foo({ x: 8989, y: 'kkkk' }));


// 类型断言？？某些情况下，我们可能比typescript更加清楚的知道某个变量的类型，所以我们可能希望手动指定一个值的类型 
// 例如下面的例子hshStr定义的时候是any类型，但是下面需要确定的用它的length属性的时候要把它断言为string类型
// 类型断言有两种方式

// 尖括号写法
let hshStr: any = 'to be or not to be';
let hshStrLength: number = (<string>hshStr).length;

// as写法
let hshStr1: any = 'to be or not to be';
let hshStrLength1: number = (hshStr1 as string).length;

//非空断言运算符（后缀 !）
function liveDangerously(x?: number | null) {
  console.log(x!.toFixed())
}

liveDangerously(88.8888);

// 确定赋值断言
let value!:number;
console.log(value)


// 字面类型 下列 18 | 19 |20以及 1 | 2 |3这样的形式就是字面组合成联合 用来表示接受一组已知值
function bar(name: string, age: 18 | 19 | 20) : 1 | 2 | 3 { 
    console.log(`${name} 今年大概 ${age}岁`);
    return 3 
}


const oneHundred: bigint = BigInt(10000);
const weiyi: symbol = Symbol(11);

console.log('bigint || weiyi', oneHundred, weiyi)

// 泛型
function identity<Type>(arg: Type): Type {
    return arg;
  }
  let output = identity("myString");

// 多个泛型参数
function getValue<T, U>(value: [T, U]): [T, U] {
  return value
}

// 泛型约束 使用extends关键字进行参数的约束
interface Lengthwise {
  length: number;
}
  
function getLength<T extends Lengthwise>(value: T): T {
  console.log(value.length); // 当T继承了Lengthwise之后，T类型的值上就有了length属性
  return value
}

// 泛型接口
interface KeyValue<T, U> {
  key: T,
  value: U
}

const keyValue1: KeyValue<string, number> = {
  key: 'wang',
  value: 909
}

const keyValue2: KeyValue<number, string> = {
  key: 90,
  value: '什么鬼'
}

// 泛型类 例如下面就是一个泛型类
class Stack<T> {
  private data: T[] = []
  push(item:T) {
      return this.data.push(item)
  }
  pop():T | undefined {
      return this.data.pop()
  }
}

const s1 = new Stack<number>() // 定义实例的时候写类型，比如，入栈和出栈都要是 number 类型
s1.push(787); // 入栈number类型的参数没问题，但是入栈其他类型就会报错

// 泛型类型别名
type Cart<T> = { list: T[] } | T[];
let c1: Cart<string> = { list: ["1"] };
let c2: Cart<number> = [1];

// 泛型参数的默认类型
function createArrayT<T = string>(length: number = 8, value: T): T[] {
  let result: T[] = [];
  for (let index = 0; index < length; index++) {
    result[index] = value;
  }
  return result
}

// 泛型工具类型
// 先定义变量 再定义类型 typeof 
let p1 = {
  name: 'wangleilei',
  age: 67,
  sex: 'male'
}

type People = typeof p1;
function getName(value: People): string {
  return value.name
}

// 泛型内置工具类
// 1.required 将类型的属性变成必选
interface Fruits {
  name?: string,
  price?: number,
  volume?: number
}

const fruits: Required<Fruits> = {
  name: '香蕉',
  price: 88,
  volume: 7
}


  


  // 枚举
  enum Animal {
    DOG = 3,
    CAT,
    FISH
  }
  const animal: Animal = Animal.DOG;
  console.log('Animal', Animal, animal)

  // 使用 const 关键字修饰的枚举，常量枚举与普通枚举的区别是，整个枚举会在编译阶段被删除 我们可以看下编译之后的效果
  const enum Color {
    RED = 5,
    PINK,
    BLUE
  } 
  const color: Color[] = [Color.RED, Color.PINK, Color.BLUE];
  console.log('color', color)

  // 元组类型 tuple 表示一个已知数量和类型的数组
  const tupleArr: [number, number, string] = [1, 2, 'leilei'];

  // never类型 表示的是那些永不存在的值的类型 例如函数内部报错或者产生了死循环
  function error(msg: string): never {
    throw new Error(msg)
  }

  function deadLoop() : never {
    while(true) {}
  }

  // unknown类型 表示所有类型
  // unknown与any的最大区别是 任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何类型。unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any
  let hsts: unknown = 'dasd';
  hsts = 8; // 编译正确

  // 函数重载
  function add(x: number, y: number): number;
  function add(x: string, y: string): string;
  function add(x: any, y: any): any {
    return x + y;
  } // 前面的两个函数只是定义函数的传参类型，最后的函数才是定义函数的具体实现方法

  //交叉类型 交叉类型就是跟联合类型相反，用&操作符表示，交叉类型就是两个类型必须存在
  interface Person1 {
    name: string,
    age: number
  }

  interface Person2 {
    name: string,
    gender: string
  }

  const person: Person1 & Person2 = {
    name: 'wangleilei',
    age: 44,
    gender: '男'
  }

  // 索引签名 用来定义一个接口中的可选的任意类型
  // 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
  interface SomeThing {
    name: string;
    age?: number;
    [prop: string]: any; //  prop字段必须是 string类型 or number类型。 值是any类型，也就是任意的
  }

  const something: SomeThing = { name: 'wang', age: 78, gender: '男' }

  // 一个重要的问题 type和interface有什么区别
  // 1.interface 用 extends 来实现扩展 type 使用 & 实现扩展

  // interface Handsom1 {
  //   name: string,
  //   age: number
  // }

  // interface Handsom2 extends Handsom1 {
  //   say(): void
  // }

  // const handsom2: Handsom2 = {
  //   name: 'sda',
  //   age: 12,
  //   say() {
  //     console.log('hhahah')
  //   }
  // }

  type Handsom1 = {
    name: string,
    age: number
  }

  type Handsom2 = Handsom1 & {
    say(): void
  }


  // 2.type可以声明基本数据类型别名/联合类型/元组等，而interface不行
  // 基本类型别名
type UserName = string;
type UserName1 = string | number;
// 联合类型
type List = [string, boolean, number];


  // 3.interface能够合并声明，而type不行
  interface Person4 {
    name: string
  }
  interface Person4 {
    age: number  // 此时Person4同时具有name和age属性
  }
  
  
  


  
  






