const path = require('path');
const fs = require('fs');
const URL = require('url');
const os = require('os');
const express = require('express');

const defaults = {
    flags: 'r+',
    encoding: 'utf8',
    fd: null,
    mode: 0o666,
    autoClose: true
  };

// var stream = fs.createWriteStream(path.join(__dirname, './geek.json'), defaults);

// fs.writeFile(path.join(__dirname, './geek.json'), '{ "name": "wangleilei", "age": 222 }', err => {
//     if(err) throw err;
//     console.log('The file has been saved!');
//     fs.readFile(path.join(__dirname, './geek.json'), 'utf8', (err, data) => {
//         console.log('data',  data.toString())
//     })
// })

// const url = path.normalize(`${process.cwd()}/info.js`);
// // const url = path.join(__dirname, './info.js');
// const info = require(url);

// const url2 = path.resolve(__dirname, 'dist')
// const url3 = path.join(__dirname, './dist')

// console.log('info', url2, url3)

// console.log('URL', URL.parse('http://10.0.32.205:8015'))


// const mockFilePath = path.resolve(__dirname, 'geek.json');

// fs.promises.access(mockFilePath, fs.constants.R_OK).then(() => {
//     fs.promises.readFile(mockFilePath, { encoding: 'utf-8' }).then(mockFieContent => {
//         console.log('mockFieContent', mockFieContent)       
//     });
// });

// console.log('os模块', os.networkInterfaces())


const express_url = express.static(path.join(__dirname, './src'));

console.log(express_url)





