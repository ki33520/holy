var air_city;
$(document).ready(function(){
	var dest;
	$('.mob_cca').click(function(){
		$('.bk_bg').show();
	});
	$('.close').click(function(){
		$('.bk_bg').hide();
	});
	$('.ye').click(function(){
		dest = $(this).attr('sit');
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
	// $('.sbmenu_jpsu li').each(function(index, item){
	// 	$(item).click(function(){
	// 	$(item).addClass('active').siblings().removeClass('active');
	// 	var tab_item = $('.wa_jpsu_960').find('.jpsu_pic_ar');
	// 	$(tab_item).hide();
	// 	$(tab_item).eq(index).show();
 //    	});
	// });

	var now = 0;
	var sr_long_l = $('.dr_ar_long ul').length-1;
	var sh = sr_long_l;
	$('.dr_ar_long').css('width',(sr_long_l+1)*785);
	var set_pager = function(){
		if(now == 0){
			$(".dr_left_ic").hide();
			$(".dr_right_ic").show();
		}else if(now == sh){
			$(".dr_left_ic").show();
			$(".dr_right_ic").hide();
		}else{
			$(".dr_left_ic").show();
			$(".dr_right_ic").show();
		}
	}	
	$(".dr_right_ic").click(function(){
		$(".dr_right_ic").hide();
		$(".dr_ar_long").animate({
		left: '-=785'
		},1000,function(){
		now++;
		set_pager();
		});
	})
	$(".dr_left_ic").click(function(){
		$(".dr_left_ic").hide();
		$(".dr_ar_long").animate({
		left: '+=785'
		},1000,function(){
		now--;
		set_pager();
		});
	});
	set_pager();

	var test_ga = {"gae":[
			{"te":"aaa","td":"1"},
			{"te":"aab","td":"2"},{"te":"aba","td":"2"},{"te":"aac","td":"2"},{"te":"aca","td":"2"},{"te":"abb","td":"2"},
			{"te":"baa","td":"3"},{"te":"caa","td":"3"},{"te":"bab","td":"3"},{"te":"bba","td":"3"},
			{"te":"abc","td":"4"},{"te":"acb","td":"4"},{"te":"bac","td":"4"},{"te":"bca","td":"4"},{"te":"bbc","td":"4"},{"te":"bcb","td":"4"},{"te":"acc","td":"4"},
			{"te":"cab","td":"5"},{"te":"cba","td":"5"},{"te":"bbb","td":"5"},{"te":"cac","td":"5"},{"te":"cca","td":"5"},{"te":"cbb","td":"5"},
			{"te":"bcc","td":"6"},{"te":"cbc","td":"6"},{"te":"ccb","td":"6"},{"te":"ccc","td":"6"},
		]
	};
	$('.st1_but').click(function(){
		if(dest == undefined){
			$('.error_at').show();
			return false;
		}else{
			$('.error_at').hide();
		};
		var ga2_ss = $('.foe_pot').text();
		var ga_m1 = dest;
		var ga_m2;
		var ga_m3 = dcaau;
		if(ga2_ss <= 100){
			ga_m2 = 'a';
		}else if(ga2_ss > 100 && ga2_ss <= 200){
			ga_m2 = 'b';
		}else if(ga2_ss > 200){
			ga_m2 = 'c';
		};
		var ga_mn = ga_m1 + ga_m2 + ga_m3;
		var ga_num = 0;
		for(ga_num=0;ga_num<=27;ga_num++){
			var ga_kot = test_ga.gae[ga_num]['te'];
			if(ga_mn==ga_kot){
				var air_city_tt = escape(air_city);
				$('.st1_but a').attr('href','step2_' + test_ga.gae[ga_num]['td'] +'.html?sit=' + air_city_tt)
			};
		};
		
	});

	
});


