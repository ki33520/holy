(function(win){
	var util = {
		fitbg : function(objname){
			var w = $(window).width();
			var h = $(window).height();
			var bgimg = $(objname);
			var s;
			var wscale = w/h;
			bgimg.each(function(){
				var e = $(this);
				var rscale = e.attr('width')/e.attr('height');
				var usew = (function(){
					var rw = w;
					var rh = e.attr('height')/e.attr('width')*w;
					return {
						'rw':rw,
						'rh':rh	
					}
				})();
			
				var useh = (function(){
					var rw = e.attr('width')/e.attr('height')*h;
					var rh = h;
					return {
						'rw':rw,
						'rh':rh	
					}
				})();
				
				if(wscale >rscale){
					s = usew;	
				}else if(wscale <rscale){
					s = useh;
				}else{
					console.log(3);
				}
				
				$(this).width(s.rw).height(s.rh);
			});
		},
		
		getScroll: function() {
			var scrollx, scrolly;
			if (typeof(win.pageXOffset) == 'number') {
				scrollx = win.pageXOffset;
				scrolly = win.pageYOffset;
			} else {
				scrollx = document.documentElement.scrollLeft;
				scrolly = document.documentElement.scrollTop;
			}
			return {
				left: scrollx,
				top: scrolly
			};
		},
		
		getPosInDoc: function(target) {
			if (!target) {
				return null;
			}
			var left = 0,
				top = 0;
				
			do {
				left += target.offsetLeft || 0;
				top += target.offsetTop || 0;
				target = target.offsetParent;
			} while (target);
			
			return {
				left: left,
				top: top
			};
		},
		randoms : function(max,min){
			var r = Math.random() * (max - min) + min
			return Math.ceil(r);
		},
		
		openblock:function(id,n){
			if($('#'+id).length > 0){
				var obj = $('#'+id);
				if(n > 0){
					var b;
					if($('.bg').length <= 0){
						$('<div class="bg opacity"></div>').appendTo($('body'));
					}
					b = $('.bg');
					if(!b.is(':visible')){
						b.addClass('opacity').show();
						setTimeout(function(){
							b.removeClass('opacity');	
						},100)
					}
				}
				if(obj.siblings('.box').is(':visible')){
					obj.siblings('.box').addClass('opacity');	
					setTimeout(function(){
						obj.siblings('.box').hide();
					},160)
				}
				
				if(!obj.is(':visible')){
					obj.addClass('opacity').show();
					this.now_blockid = id;
					setTimeout(function(){
						obj.removeClass('opacity');
					},160)
				}else{
					return false;	
				}
			}
		},
		closeblock:function(id){
			console.log(id);
			if($('.bg').length > 0){
				var b = $('.bg');	
			}
			if(typeof(id) == 'string'){
				if($('#'+id).length <= 0){
					return false;	
				}
				var o = $('#'+id);
			}else if(typeof(id) == 'object'){
				var o = id;	
			}else{
				console.log(id);
			}
			
			if(o.is(':visible')){
				o.addClass('opacity');
				if(b.length > 0 && b.is(':visible')){
					$('.bg').addClass('opacity');	
				}
				setTimeout(function(){
					o.hide();
					b.hide();
				},300)
			}else{
				return false;	
			}
		},
		checkLength:function(obj){
			var returnValue = '';
            var len = 0;
			var val = obj.value;
            for (var i = 0; i < val.length; i++) {
                if (val[i].match(/[^\x00-\xff]/ig) != null)
                    len += 2;
                else
                    len += 1;

                if (len/2 > 140)
                    break;

                returnValue += val[i];
            }
            obj.value = returnValue;
		}
	};
	
	win.util = util;
})(window);