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
		$(args.sliderContainerObject).siblings('.goToBlock').find('.go').removeClass('active');
		$(args.sliderContainerObject).siblings('.goToBlock').find('.go:eq(' + (args.currentSlideNumber - 1) + ')').addClass('active');
	};
	var sliderLoaded = function (args) {
		$(args.sliderContainerObject).find('.txt').show();
		slideChange(args);
	};
	var slideResize = function(args){
		var layoutArr = [1000,800,640,480,320],
			wrap = $('.full_media_slider'),
			full_wrap_w = $(wrap).find('.default_slider_container:eq(0)').width(),
			full_img_w = $(wrap).find('.wh_core:eq(0)').width(),
			ratio = 571/1052,
			ratio2 = 680/580,
			min_width = 480;
		if(full_wrap_w<=min_width){
			$(wrap).find('.wh_core').width('100%');
			$(wrap).find('.wh_core').each(function(index,item){
				$(item).attr('src',$(item).attr('simg'));
			});
			var full_img_h = $(wrap).find('.wh_core:eq(0)').height();
			$(wrap).find('.default_slider').height(full_img_h);
		}else{
			$(wrap).find('.wh_core').width('100%');
			$(wrap).find('.wh_core').each(function(index,item){
				$(item).attr('src',$(item).attr('bimg'));
			});
			var full_img_h = $(wrap).find('.wh_core:eq(0)').height();
			$(wrap).find('.default_slider').height(full_img_h);
		}
		$('#data').text($(wrap).find('.default_slider').height())
		for(var i=0; i<layoutArr.length; i++){
			if(full_wrap_w<=layoutArr[i]){
				$(wrap).addClass('w'+(i+1));
			}else{
				$(wrap).removeClass('w'+(i+1));
			}
		}
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
	slideResize();
	
});