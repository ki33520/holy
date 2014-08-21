var draw = function(type,arr){
	var canvas = document.getElementById('canvas');
	var w = canvas.width;
	var h = canvas.height;
	var ctx = canvas.getContext('2d');
	var image = new Image();
	image.onload = function(){
		ctx.clearRect(0,0,w,h);
		ctx.drawImage(image,0,0,w,h);
	}
	image.src = 'images/' + arr[type];
}


var Accelerometer = function(arr){
	this.init();
	this.firstTry = true;
	this.arr = arr;
} 
Accelerometer.prototype = {
	init:function(){
		this.complete();
	},
    complete:function(){
		var defaultTime = 5000;
        var SHAKE_THRESHOLD = 2500;
		var rate = 100;
        var last_update = 0;
		var totalTime = 0;
        var x, y, z, last_x, last_y, last_z , _self = this ;
		var start = false,type = 0 , animate = false;
		
        function deviceMotionHandler(eventData){
            var acceleration = eventData.accelerationIncludingGravity;
            var curTime = new Date().getTime();
            if ((curTime - last_update) >= 100 && _self.firstTry) {
                var diffTime = curTime - last_update;
                last_update = curTime;
                x = acceleration.x;
                y = acceleration.y;
                z = acceleration.z;
                var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
				speed = 3000;
                if (speed > SHAKE_THRESHOLD){
					start = true;
					SHAKE_THRESHOLD = SHAKE_THRESHOLD / 2 ; 
					animate = true;
                }else if(speed <= SHAKE_THRESHOLD && start){
					clearInterval(window.it);
					animate = false;
					if(totalTime >= defaultTime){
						alert('到达终点');
					}else{
						alert('再接再厉');
					}
					_self.firstTry = false;
					start = false;
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
