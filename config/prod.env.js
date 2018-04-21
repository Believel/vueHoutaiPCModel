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
