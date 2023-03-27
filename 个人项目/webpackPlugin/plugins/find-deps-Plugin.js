const fs = require('fs')
const path = require('path')

class FindDepsPlugin {
  constructor(options = {}) {
    this.jsFilePath = options.jsFilePath || ''
    this.outPath = options.outPath || './test.txt';
    this.addText = options.addText || false;
    this.deps = []
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('FindDepsPlugin', compilation => {
      compilation.hooks.optimizeChunkAssets.tapAsync(
        'FindDepsPlugin',
        (chunks, callback) => {
          chunks.forEach(chunk => {
            const modules = chunk.getModules();
            const isHasPath = modules.find(item => item.resource && item.resource === path.resolve(this.jsFilePath));
            // 如果输入的jsFilePath参数是有效的
            if (isHasPath) {
              // 用来收集依赖模块中含有jsFilePath的module
              const list = [];
              modules.forEach(module => {
                (module.dependencies || []).forEach(dep => {
                  const depResource = compilation.moduleGraph.getModule(dep) && compilation.moduleGraph.getModule(dep).resource;
                  if (depResource === path.resolve(this.jsFilePath)) {
                    // 判断模块所有的依赖列表中是否含有jsFilePath，如果有就把该模块收集起来
                    list.push(module);
                  }
                });
              });
              const depModules = list.map(module => module.resource);
              this.deps.push(...depModules)
            }
          })
          callback()
        }
      )
    })

    compiler.hooks.done.tap('FindDepsPlugin', () => {
      console.log(`"${this.jsFilePath}" 组件被以下文件所引用:`)
      // 为了解决循环引用的问题，需要对this.deps进行去重处理
      this.deps = [...new Set(this.deps)];
      this.deps.forEach(dep => {
        console.log(dep)
      });
      if (this.addText) {
        fs.writeFile(this.outPath, this.deps.join('\n'), 'utf8', err => {
          if (err) {
            console.log('err', err);
            return
          }
          console.log('写入文件成功')
        });
      }
    })
  }
}

module.exports = FindDepsPlugin;
// 1.在插件的 apply 方法中，通过 compilation.hooks.optimizeChunkAssets 钩子获取到所有已优化过的 chunk 对象。

// 2.遍历每个 chunk 的模块依赖关系（可以使用 chunk.getModules() 方法），找到依赖于指定 JS 文件地址的模块对象。

// 3.记录下这些模块的源文件路径（可以使用 module.resource 属性获取）。

// 4.在 compiler.hooks.done 钩子中输出这些记录下来的源文件路径。