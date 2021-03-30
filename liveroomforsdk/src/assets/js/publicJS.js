//全局函数

let Binding = require("weex-bindingx");

exports.install = function(Vue, options) {
    //计算人数
    Vue.prototype.$calculationNum = function(num) { 
        let numStr = num+''
        if(numStr>999 && numStr<99000){
            if(numStr<10000){
                let str = (numStr/1000+'').slice(0,3)
                return str[str.length-1] == 0?str[0]+'k':str+'k'
            }else{
                return numStr/1000+'k'
            }
        }else{
            return numStr>99000?'99k+':numStr
        }
    };
};