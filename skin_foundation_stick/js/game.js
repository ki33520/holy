var game = function(){
	this.init();
}

game.prototype = {
	init:function(){
		this.chosed = 0;
		this.totaltime = 0;
		this.metre = 0;
		this.touch();
	},
	//选择球员
    choseMen:function(num){
		this.chosed = num;	
	},
	//开始摇动，倒计时
	shakeTip:function(){
		var tip = $('.shakeTip') , chose = $('.choseMen') , count =  tip.find('.countdown') , _self = this;
		//倒计时方法
		(function countdown(){
			chose.hide();
			tip.show().siblings('.sec').hide();
			if(count.hasClass('countdown_on')) count.removeClass('countdown_on')
			count.addClass('countdown_on');
			setTimeout(function(){
				_self.accelerate();
			},3500)
		})()
	},
	
	//显示摇动标记，并且在摇动的时候换图片
	accelerate :function(){
		this.recodeControl = 1;
		var tip = $('.shakeTip') , chose = $('.choseMen') , count =  tip.find('.countdown'), num = count.find('span') , img = tip.find('.tip');
		tip.show().siblings('.sec').hide();
		count.hide();
		img.show();
		new Accelerometer();	
	},
	
	getTotaltime:function(t){
		if(t > 0)
		this.totaltime += t;
		this.timeToMetre();
		this.playMovie();
	},
	
	timeToMetre:function(){
		switch(true){
			case this.totaltime <= 3000:
				this.metre = 1;
				break;
			case this.totaltime <= 6000:
				this.metre = 2;
				break;
			case this.totaltime <= 12000:
				this.metre = 3;
				break;
			case this.totaltime <= 15000:
				this.metre = 4;
				break;
			case this.totaltime > 15000:
				this.metre = 5;
				break;
		}
	},
	
	playMovie:function(){
		$('.canvaslist').show().siblings('.sec').hide();
		new movie();
	},
	
	showEnd:function(control){
		var _self = this;
		if(control != 0) return false;
		$('.canvaslist').hide();
		var n = _self.chosed + 1;
		if(this.metre != 5){
			//没到终点
			$('.notArrive').find('.notApic').attr('src','images/notarrive'+n+'.jpg')
			$('.notArrive').show().siblings('.sec').hide();
			$('.notArrive').find('.metre').html(this.metre+'公里');
			$.ajax({
				type: "POST",
				url: "/index.php/index/recode",
				data: "score="+_self.totaltime,
				dataType: "json",
				success: function(result){
				},
			});	
			
		}else{
			//到终点
			$('.Arrive').find('.apic').attr('src','images/arrive'+n+'.jpg')
			$('.Arrive').show().siblings('.sec').hide();
			$.ajax({
				type: "POST",
				url: "/index.php/index/recode",
				data: "score="+_self.totaltime,
				dataType: "json",
				success: function(result){
				},
			});	
		}
	},
	
	//各种绑定触发
	touch:function(){
		var box = $('.chosebox'),_self = this;
		var men = box.find('.choselist').find('li');
		Event.addListener($('.choseOver')[0],Event.touchtype('end'),function(){
			$.each(men,function(i,val){
				if($(this).hasClass('on')){
					_self.choseMen(i);	
				}
			})
			//触发摇动提示
			if(_self.chosed >= 0 && _self.chosed < men.length)
			_self.shakeTip();
		})
		Event.addListener($('.continue')[0],Event.touchtype('end'),function(){
			_self.accelerate();
		})
		Event.addListener($('.check')[0],Event.touchtype('end'),function(){
			//提交ajax，获取中奖信息
			$.ajax({
				type: "POST",
				url: "/index.php/Index/rand",
				data: "score="+_self.totaltime,
				dataType: "json",
				beforeSend: function(){
					$('.wait').fadeIn(300);
				},
				success: function(result){
					if(result.status == 1){
						window.location.href = "win.html?prize="+result.prize+"&jpid="+result.jpid;	
					}else if(result.status == 0){
						window.location.href = "notwin.html";
					}
				},
				error:function(){
					alert('网络故障');
				},
				complete:function(){
					$('.wait').fadeOut(300);
				}
			});	
		})
	}
	
	
};
