export default (s,e) => {
    var e = e || {};
    for(var i in s){
        e[i] = s[i];
    }
    return e;
}
