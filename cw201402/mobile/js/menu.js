$("#menuKey").bind("click",function(e){
	if($("#menu").hasClass("on")){
		$("#menu").animate({
			"left": $(window).width()*-0.8
		},500,function(){
			$(this).removeClass("on");
			$("#menuKey").css("left","4%");
		})
	}else{
		$("#menu").animate({
			"left": 0
		},500,function(){
			$(this).addClass("on");
			$("#menuKey").css("left","84%");
		})
	}
	return false;
})