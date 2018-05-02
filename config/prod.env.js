// process.argv属性返回一个数组，这个数组包含了启动NOde.js进程时的命令参数。第一个元素为process.execPath。第二个元素为当前执行的javascript文件路径
console.log(process.argv);
var buildtype = process.argv.slice(2)[0]
console.log('------start build-------' + buildtype)
var obj = {
    NODE_ENV: '"production"'
}
switch (buildtype) {
    case 'pro': //生产
        process.env.srconfig = 'pro'
        obj.srconfig = '"pro"'
        break
    case 'beta': //外网开发
        process.env.srconfig = 'beta'
        obj.srconfig = '"beta"'
        break
    case 'dev': //内网开发
        process.env.srconfig = 'dev'
        obj.srconfig = '"dev"'
        break
    case 'testdev': //测试
        process.env.srconfig = 'testdev'
        obj.srconfig = '"testdev"'
        break
    default:
        //默认开发
        process.env.srconfig = ''
        obj.srconfig = '""'
        break
}
module.exports = obj
