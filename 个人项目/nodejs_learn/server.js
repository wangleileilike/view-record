const http = require('http')
const fs = require('fs');
const { program } = require('commander');

program
  .option('--u, --user <string>, wangleilei')
  .option('--p, --port <string>', '6000');

program.parse();

const options = program.opts();

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
  fs.readFile('./index.html', (err, data) => {
    if(err) return hadErrer(err,res);
    formHtml(data.toString(),res);
  })
})

// 替换模板
function formHtml(tmpl,res){
    console.log(res)
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(tmpl);
}

// 错误处理
function hadErrer(err,res){
    console.log(err)
    res.end('server err')
}

console.log('process', process.env.NODE_ENV);
console.log('options', options);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})