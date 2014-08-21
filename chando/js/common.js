$(document).ready(function() {
	var slideChange = function(args) {
		// if(args.currentSlideNumber===1){
		// 	$(args.sliderContainerObject).siblings('.arrBlock').find('.prev').addClass('disable');
		// }else{
		// 	$(args.sliderContainerObject).siblings('.arrBlock').find('.prev').removeClass('disable');
		// }
		// if(args.currentSlideNumber===args.data.numberOfSlides){
		// 	$(args.sliderContainerObject).siblings('.arrBlock').find('.next').addClass('disable');
		// }else{
		// 	$(args.sliderContainerObject).siblings('.arrBlock').find('.next').removeClass('disable');
		// }
		var slide_height = 0;
		$(args.sliderContainerObject).find('.item').each(function(index,item){
			slide_height = Number($(item).outerHeight()) > slide_height ? Number($(item).outerHeight()) : slide_height;
		})
       	$(args.sliderContainerObject).css('min-height',slide_height);
		$(args.sliderContainerObject).siblings('.goToBlock').find('.go').removeClass('active');
		$(args.sliderContainerObject).siblings('.goToBlock').find('.go:eq(' + (args.currentSlideNumber - 1) + ')').addClass('active');
	};
	var sliderLoaded = function (args) {
		$(args.sliderContainerObject).find('.txt').show();
		slideResize(args);
		slideChange(args);
	};
	var slideResize = function(args){
		var layoutArr = [1000,800,640,480,320],
			wrap = $(args.sliderContainerObject),
			full_wrap_w = $(wrap).parent('.default_slider_container').width(),
			full_img_w = $(wrap).find('.wh_core:eq(0)').width(),
			full_img_h = $(wrap).find('.wh_core:eq(0)').height(),
			ratio = 571/1052,
			ratio2 = 680/580,
			min_width = 480;
		$(wrap).find('.wh_core').width('100%');
		for(var i=0; i<layoutArr.length; i++){
			if(full_wrap_w<=layoutArr[i]){
				$(wrap).parents('.full_media_slider').addClass('w'+(i+1));
			}else{
				$(wrap).parents('.full_media_slider').removeClass('w'+(i+1));
			}
		}
		if(full_wrap_w<=min_width){
			$(wrap).find('.wh_core').each(function(index,item){
				$(item).attr('src',$(item).attr('simg'));
			});
			if($(wrap).find('.txt').length){
				full_img_h = full_wrap_w*ratio2+$(wrap).find('.txt').outerHeight();
				$(wrap).siblings('.goToBlock').css('marginBottom',$(wrap).find('.txt').outerHeight());
			}else{
				full_img_h = full_wrap_w*ratio2;
			}
		}else{
			$(wrap).find('.wh_core').each(function(index,item){
				$(item).attr('src',$(item).attr('bimg'));
			});
			$(wrap).siblings('.goToBlock').css('marginBottom',0);
			full_img_h = full_wrap_w*ratio;
		}
		$(wrap).css('min-height',full_img_h);
	};
	$('.full_media_slider').each(function(){
		$(this).find('.default_slider_container').each(function(){
			$(this).hover(function(){
				$(this).find('.arrBlock').addClass('active');
			},function(){
				$(this).find('.arrBlock').removeClass('active');
			});
		});
		$(this).find('.default_slider').each(function(){
			$(this).iosSlider({
				desktopClickDrag: true,
				snapToChildren: true,
				responsiveSlideContainer: true,
				scrollbarHeight: '5px',
				scrollbarBorderRadius: 10,
				scrollbarOpacity: '0.2',
				scrollbarBackground: '#000',
				navSlideSelector: $(this).siblings('.goToBlock').find('.go'),
				navPrevSelector: $(this).siblings('.arrBlock').find('.prev'),
				navNextSelector: $(this).siblings('.arrBlock').find('.next'),
				onSliderLoaded: sliderLoaded,
				onSlideChange: slideChange,
				onSliderResize : slideResize,
				infiniteSlider: true
			});
		});
	});
});