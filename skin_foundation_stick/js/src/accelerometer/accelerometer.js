var Accelerometer = function(){
	this.init();
} 
Accelerometer.prototype = {
	init:function(){
		this.totaltime = 0;
		this.imgTab = $('.tip').find('img');
		this.speed = 0;
		this.complete();
	},
    complete:function(){
		var defaultTime = 5000;
        var shake_hold = 700;
        var last_update = 0;
        var x = 0, y = 0, z = 0, last_x = 0, last_y = 0, last_z = 0 , _self = this ;
		var start = false,type = 0 , animate = false;
		var starttime = 0 ,endtime = 0;
		var trycommit = true;
        function deviceMotionHandler(eventData){
            var acceleration = eventData.accelerationIncludingGravity;
            var curTime = new Date().getTime();
			
            if ((curTime - last_update) >= 100) {
				
                var diffTime = curTime - last_update;
                last_update = curTime;
                x = acceleration.x;
                y = acceleration.y;
                z = acceleration.z;
				
                _self.speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
				
                if (_self.speed > shake_hold){
					//显示红色的图标
					_self.imgTab.eq(1).show().siblings().hide();
					if(window.wait){
						clearTimeout(window.wait);
					}
					trycommit = true;
					if(!start) starttime = new Date().getTime();
					start = true;
					
                }else if(_self.speed <= shake_hold){
					//显示灰色的图标
					_self.imgTab.eq(0).show().siblings().hide();
					//启动停止计时，超过1s返回
					if(start && trycommit){
						trycommit = false;
						if(window.wait){
							clearTimeout(window.wait);
						}
						endtime = new Date().getTime();	
						_self.totaltime +=  endtime - starttime;
						starttime = endtime;
						window.wait = setTimeout(function(){
							start = false;
							l.g.getTotaltime(_self.totaltime);
							_self.totaltime = 0;
							window.removeEventListener('devicemotion', deviceMotionHandler, false);
						},1200)
					}
				}
                last_x = x;
                last_y = y;
                last_z = z;
            }
        }
		
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', deviceMotionHandler, false);
        }
    }
};
