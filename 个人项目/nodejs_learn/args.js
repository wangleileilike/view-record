const program = require('commander');
const ora = require('ora');
const printProgramInfo = require('./info');
const datetime = require('./datetime');

program
  .option('-t, --time <number>', '等待时间 (秒)', 3)
  .option('-m, --message <string>', '要输出的信息', 'Hello World')
  .parse(process.argv);

const options = program.opts();

setTimeout(() => {
  spinner.stop();
  console.log('打印', options.message);
  console.log('结束时间', datetime.getCurrentTime());
}, options.time * 1000);

printProgramInfo();
console.log('当前时间', datetime.getCurrentTime());
const spinner = ora('正在加载中，请稍后 ...').start();