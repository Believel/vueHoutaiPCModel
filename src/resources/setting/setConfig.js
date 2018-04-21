import objectAssign from './objectAssign.js'
export default ({ setting, propertys }) => {
    if (!setting || setting == undefined || setting == null) {
        throw 'setting is not undefined'
    }
    if (!setting[process.env.srconfig]) {
        return objectAssign(setting['localhost'], propertys)
    }
    return objectAssign(setting[process.env.srconfig], propertys)
}
