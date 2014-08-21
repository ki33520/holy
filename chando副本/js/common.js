$(document).ready(function() {
	var slideChange = function(args) {
		$(args.sliderContainerObject).next('.goToBlock').find('.go').removeClass('active');
		$(args.sliderContainerObject).next('.goToBlock').find('.go:eq(' + (args.currentSlideNumber - 1) + ')').addClass('active');
	};
	var sliderLoaded = function (args) {
		$(args.sliderContainerObject).find('.txt').show();
		slideChange(args);
	};
	var slideResize = function(args){
		var layoutArr = [1000,800,640,480,320],
			wrap = $('.full_media_slider'),
			full_img_w = $(wrap).find('.wh_core:eq(0)').width(),
			ratio = 0.5,
			min_width = 480,
			w = $(window).width();
		// if(full_img_w<min_width){
		// 	$(wrap).find('.wh_core').width(min_width);
		// 	$(wrap).find('.default_slider').height(ratio*min_width);
		// }else{
		// 	$(wrap).find('.wh_core').width('100%');
		// 	$(wrap).find('.default_slider').height(ratio*full_img_w);
		// }
		$(wrap).find('.default_slider').height(ratio*full_img_w);
		for(var i=0; i<layoutArr.length; i++){
			if(w<=layoutArr[i]){
				$(wrap).addClass('w'+(i+1));
			}else{
				$(wrap).removeClass('w'+(i+1));
				// if(i==0){
				// 	$(wrap).addClass('w'+i);
				// }
			}
		}
	};
	$('.full_media_slider').each(function(){
		$(this).find('.default_slider').each(function(){
			$(this).iosSlider({
				desktopClickDrag: true,
				snapToChildren: true,
				scrollbar: true,
				responsiveSlideContainer: true,
				scrollbarHeight: '5px',
				scrollbarBorderRadius: 10,
				scrollbarOpacity: '0.2',
				scrollbarBackground: '#000',
				navSlideSelector: $(this).next('.goToBlock').find('.go'),
				onSliderLoaded: sliderLoaded,
				onSlideChange: slideChange,
				onSliderResize : slideResize,
				keyboardControls: true
			});
		});
	});

	slideResize();
	
	
});