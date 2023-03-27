const { program } = require('commander');

program
  .option('--first')
  .option('--s, --separator <char>', '这是一个提示信息');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit), program.args, options);