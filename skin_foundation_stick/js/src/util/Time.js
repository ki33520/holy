
/**
*	时间类
*/

var Times = {

    /**
     * 获取当前时间
     * */
 	getTime:function(){
		var intHours,intMinutes,intSeconds;
		var today = new Date();

		intHours = today.getHours();
		intMinutes = today.getMinutes();
		intSeconds = today.getSeconds();
		
		if(intHours == 0){
			hours = intHours + ":";
			ap = "凌晨";
		}else if(intHours < 12){
			hours = intHours + ":";
			ap = "上午";
		}else if(intHours == 12){
			hours = intHours + ":";
			ap = "中午";
		}else{
			intHours = intHours - 12;
			hours = intHours + ":";
			ap = "下午";
		}
		//获取系统时间的分数
		if(intMinutes < 10){
			minutes ="0" + intMinutes + "";
		}else{
			minutes = intMinutes + "";
		}
		//获取系统时间的秒数
		if(intSeconds < 10){
			seconds = "0" + intSeconds + " ";
		}else{
			seconds = intSeconds + " ";
		}

		return hours + minutes + ap;
	},

    /**
     * 获取当前年月日
     * */
	getDay:function(){

		var day = "";
		var month = "";
		var ampm = "";
		var ampmhour = "";
		
		var year = "";

		var mydate = new Date();
		
		//获取月份
		mymonth = mydate.getMonth()+1;
		//获取几号
		myday = mydate.getDate();
		//获取年份
		myyear = mydate.getYear();
		year = (myyear > 200) ? myyear : 1900 + myyear;
		
		return year + '.' + mymonth + '.' + myday;
	},

    /**
     * 获取当天星期
     * */
	getWeek:function(){

		var myweekday;
		var mydate = new Date();

		//获取星期
		myweekday = mydate.getDay();

		if(myweekday == 0)
		weekday = " Sunday ";//星期日
		else if(myweekday == 1)
		weekday = " Monday ";//星期一
		else if(myweekday == 2)
		weekday = " Tuesday ";//星期二
		else if(myweekday == 3)
		weekday = " Wednesday ";//星期三
		else if(myweekday == 4)
		weekday = " Thursday ";//星期四
		else if(myweekday == 5)
		weekday = " Friday ";//星期五
		else if(myweekday == 6)
		weekday = " Saturday ";//星期六
		return weekday;
	},
    /**
     * 设置分
     *
     * @param	second:秒
     * return	00:00
     *
     * */
    getSecondToMinute:function(second){

    //			计算分
        var pingMinute = parseInt(second/60);

        parseInt(pingMinute) < 10 ? pingMinute = "0" + pingMinute : pingMinute ;
    //			计算秒
        var pingSecond = parseInt(second%60);

        parseInt(pingSecond) < 10 ? pingSecond = "0" + pingSecond : pingSecond ;

        return pingMinute + ":" + pingSecond ;
    },
    /**
     * 设置小时
     *
     * @param	second:秒
     * return	00:00:00
     *
     * */
    getSecondToHour:function(second){
        //计算正在播放的分时间

        var pingHour = parseInt(second/3600);

        parseInt(pingHour) < 10 ? pingHour = "0" + pingHour : pingHour ;

        var pingMinute = parseInt(parseInt(second%3600)/60);

        parseInt(pingMinute) < 10 ? pingMinute = "0" + pingMinute : pingMinute ;

        var pingSecond = parseInt(second%60);

        parseInt(pingSecond) < 10 ? pingSecond = "0" + pingSecond : pingSecond ;


        return pingHour + ":" +pingMinute + ":" + pingSecond ;
    },
    /**
     * 设置秒
     *
     * @param   Millisecond:毫秒
     * return 00:00:00
     *
     * */
    getMillisecond:function(millisecond){
        //			计算分
        var pingHour = parseInt(millisecond / 10 / 60);

        parseInt(pingHour) < 10 ? pingHour = "0" + pingHour : pingHour ;

        var pingMinute = parseInt(parseInt(millisecond / 10 ) % 60 );

        parseInt(pingMinute) < 10 ? pingMinute = "0" + pingMinute : pingMinute ;

        var pingSecond = parseInt(millisecond%10)*10;

        parseInt(pingSecond) < 10 ? pingSecond = "0" + pingSecond : pingSecond ;

        return pingHour + ":" +pingMinute + ":" + pingSecond ;
    }


};





