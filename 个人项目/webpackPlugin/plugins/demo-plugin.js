class DemoPlugin {

    constructor(auther) {
        this.auther = auther;
    }

    apply(complier) {
        complier.hooks.done.tap('DemoPlugin', stats => {
            console.log(`这个是${this.auther}写的自定义插件`)
        });
        complier.hooks.entryOption.tap('MyPlugin', (context, entry) => {
            console.log(`entryOption被调用`)
        });
        complier.hooks.run.tap('MyPluginss', (context, entry) => {
            console.log(`编译开始阶段执行`)
        });
    }
}

module.exports = DemoPlugin;