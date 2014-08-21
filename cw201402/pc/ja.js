$(document).ready(function(){	
	$('.mob_cca').click(function(){
		$('.bk_bg').show();
	});
	$('.close').click(function(){
		$('.bk_bg').hide();
	});
	$('.ye').click(function(){
		var dest = $(this).attr('sit');
		var m_class = 'fon_n' + dest;
		$(this).parent().attr('class',m_class);
	});
	$('.cp_link1_3_ga').click(function(){
		$('.cp_n1_1').hide();
		$('.cp_n1_2').show();
	});
	$('.backt_n1').click(function(){
		$('.cp_n1_2').hide();
		$('.cp_n1_1').show();
	});
	$('.sbmenu li').each(function(index, item){
		$(item).click(function(){
		$(item).addClass('active').siblings().removeClass('active');
		var tab_item = $('.wa_cp_960').find('.de');
		$(tab_item).hide();
		$(tab_item).eq(index).show();
    	});
	});
	$.ajax({
		url:'services/thinkpage.php',
		type:'POST',
		cache:false,
		contentType: 'application/json',
		dataType: 'json',
		success: function(data){
			var air_ct = data.weather[0];
			alert(air_ct)
			//.now.air_quality.city.aqi
		}
	});
});


