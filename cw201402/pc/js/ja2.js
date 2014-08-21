$(document).ready(function(){
	var noww = 0;
	var sr_long_s = $('.cp_dr_li').length-1;
	var shs = sr_long_s;
	$('.cpdr_ar_long').css('width',(sr_long_s+1)*252);
	var set_pagers = function(){
		if(noww == 0){
			$(".cpdr_left_ic").hide();
			$(".cpdr_right_ic").show();
		}else if(noww == shs){
			$(".cpdr_left_ic").show();
			$(".cpdr_right_ic").hide();
		}else{
			$(".cpdr_left_ic").show();
			$(".cpdr_right_ic").show();
		}
	}	
	$(".cpdr_right_ic").click(function(){
		$(".cpdr_right_ic").hide();
		$(".cpdr_ar_long").animate({
		left: '-=252'
		},1000,function(){
		noww++;
		set_pagers();
		});
	})
	$(".cpdr_left_ic").click(function(){
		$(".cpdr_left_ic").hide();
		$(".cpdr_ar_long").animate({
		left: '+=252'
		},1000,function(){
		noww--;
		set_pagers();
		});
	});
	set_pagers();


	
});


