var source = [
	{'src':'/gif/1/','totalnum':12},
	{'src':'/gif/2/','totalnum':12},
	{'src':'/gif/3/','totalnum':12},
	{'src':'/gif/4/','totalnum':12},
	{'src':'/gif/bg/','totalnum':12}
]
var lastTotaltime = 0;
var movieObj = function(arr,rate,canvas){
	this.arr = arr;
	this.rate = rate;
	this.canvas = canvas;
	this.control = 0; //控制提交次数
	this.init();
}
movieObj.prototype = {
	init:function(){
		this.image = new Image();
		this.currFrame = 0;
		this.frames = this.arr.length;
		this.startTime = this.endTime  = new Date().getTime();
		this.ctx = this.canvas.getContext('2d');
		this.w = this.canvas.width;
		this.h = this.canvas.height;
		this.ctx.clearRect(0,0,this.w,this.h);
		this._render();
	},
	
	_draw:function(){
		//if(this.endTime - this.startTime <= lastTotaltime){
		if(this.endTime - this.startTime <= 4000){
			var _self = this;
			this.currFrame %= this.arr.length;
			this.image.src = 'images' + this.arr[this.currFrame];
			this.image.onload = function(){
				_self.ctx.clearRect(0,0,_self.w,_self.h);
				_self.ctx.drawImage(_self.image,0,0,_self.w,_self.h);
				setTimeout(function(){
					_self.endTime = new Date().getTime();
					_self._draw();
				},_self.rate)
			}
			this.currFrame ++;
		}else{
			l.g.showEnd(this.control);
			this.ctx.clearRect(0,0,this.w,this.h);
			this.control++;
		}
	},
	_render:function(){
		this._draw();
	}
}

var movie = function(){
	lastTotaltime = l.g.totaltime - lastTotaltime;
	this.chosed = l.g.chosed;
	this.menarr = [];
	this.bgarr = [];
	this.init();
}
movie.prototype = {
	init:function(){
		this.canvas = document.getElementById('movie');
		this.ctx = this.canvas.getContext('2d');
		this.canvasbg = document.getElementById('moviebg');
		this.ctx = this.canvasbg.getContext('2d');
		this.w = this.canvas.width;
		this.h = this.canvas.height;
		this.loadsource();
	},
	loadsource:function(){
		$('.wait').fadeIn(300);
		var arr = [],_self = this;
		for(var i = 0;i < source[this.chosed].totalnum;i++){
			this.menarr.push(source[this.chosed].src + i + '.png');
		}
		for(var i = 0;i < source[4].totalnum;i++){
			this.bgarr.push(source[4].src + i + '.png');
		}
		arr = this.menarr.concat(this.bgarr);
		new wrLoading('#wait',arr,function(){
			var o = new movieObj(_self.menarr,60,_self.canvas);
			var b = new movieObj(_self.bgarr,100,_self.canvasbg);
		});
	}
}