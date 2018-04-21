	/*
	 *version 1.0.0
	 */
	Date.prototype.Format = function (fmt) { 
	    var o = {
	        "M+": this.getMonth() + 1, //月份 
	        "d+": this.getDate(), //日 
	        "h+": this.getHours(), //小时 
	        "m+": this.getMinutes(), //分 
	        "s+": this.getSeconds(), //秒 
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
	        "S": this.getMilliseconds() //毫秒 
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	};
	/**
	 * 获取n天前的日期 yyyy-mm-dd
	 */
	Date.prototype.getBeforeDate = function(n,date){
		var n = n;
	    var d = date;
	    var year = d.getFullYear();
	    var mon=d.getMonth()+1;
	    var day=d.getDate();
	    if(day <= n){
	        if(mon>1) {
	        	mon=mon-1;
	        }
	        else {
	        	year = year-1;
	        	mon = 12;
	        }
	    }
	    d.setDate(d.getDate()-n);
	    year = d.getFullYear();
	    mon=d.getMonth()+1;
	    day=d.getDate();
	    s = year+"-"+(mon<10?('0'+mon):mon)+"-"+(day<10?('0'+day):day);

	    return s;
	};
	/**
	 * 获取n月前的月份 yyyy-mm
	 */
	Date.prototype.getBeforeMonth = function(n,date){
		var n = n;
	    var d = date;
	    var year = d.getFullYear();
	    var mon=d.getMonth()+1;
	    if(mon <= n){
        	year = year-1;
	    }
	    d.setDate('01');
        d.setMonth(d.getMonth()-n);
        year = d.getFullYear();
        mon=d.getMonth()+1;
	    s = year+"-"+(mon<10?('0'+mon):mon);

	     return s;
	};