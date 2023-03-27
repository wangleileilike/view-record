// @import './style/index.css';
import { age } from './tapable';
import foo from './test';

foo(); // foo如果执行了将会在test.txt中打印两个index的路径，即被引用了两次
console.log(age)