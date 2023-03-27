//css-loader.js
module.exports = async function (content) {
    const callback = this.async()
    let newContent = content
    try {
        newContent = await getImport(this, this.resourcePath, content)
        //这里注意需要这样导出，后续webpack的打包处理会默认当成一个JS文件来处理
        callback(null, `module.exports = ${JSON.stringify(newContent)}`)
    } catch (error) {
        callback(error, '')
    }
}
// 匹配图片
const urlReg = /url\(['|"](.*)['|"]\)/g
// 匹配@import关键字
const importReg = /(@import ['"](.*)['"];?)/
const fs = require('fs')
const path = require('path')
async function getImport(context, originPath, content) {
    let newContent = content
    let regRes, imgRes

    // 获取当前处理文件的父目录
    let absolutePath = path.resolve(originPath, '..')
    // 如果当前文件中存在@import关键字，不断匹配处理
    while (regRes = importReg.exec(newContent)) {
        const importExp = regRes[1]
        const url = regRes[2]
        // 获取@import导入的css文件的绝对路径
        const fileAbsoluteUrl = url.startsWith('.') ? path.resolve(absolutePath, url) : url
        // 读取目标文件的内容
        const transformResult = fs.readFileSync(fileAbsoluteUrl, { encoding: 'utf8' })
        // 将@import关键字替换成读取的文件内容
        newContent = newContent.replaceAll(importExp, transformResult)
        // 继续递归处理
        newContent = await getImport(context, fileAbsoluteUrl, newContent)
        
        // 处理图片
        while (imgRes = urlReg.exec(newContent)) {
            const url = imgRes[1]
            // 获取url方式引入图片的父目录
            let absolutePath = fileAbsoluteUrl.slice(0, fileAbsoluteUrl.lastIndexOf('/'))
            // 获取引入图片的绝对路径
            const imgAbsoluteUrl = url.startsWith('.') ? path.resolve(absolutePath, url) : url
            if (fs.existsSync(imgAbsoluteUrl)) {
                // 调用图片相关loader处理（下一小节实现）
                const transformResult = await context.importModule(imgAbsoluteUrl, {})
                // 将图片loader处理完成的内容替换url
                newContent = newContent.replaceAll(url, transformResult)
            }
        }
    }
    return newContent
}