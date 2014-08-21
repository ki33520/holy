/**
 * jquery.gallery.js
 * http://www.codrops.com
 *
 * Copyright 2011, Pedro Botelho / Codrops
 * Free to use under the MIT license.
 *
 * Date: Mon Jan 30 2012
 */
;(function($){
	
	/*
	 * Gallery object.
	 */
	$.Gallery 				= function( options, element ) {
	
		this.$el	= $( element );
		this._init( options );
		
	};
	
	$.Gallery.defaults 		= {
		current		: 0,	// index of current item
		autoplay	: false,// slideshow on / off
		interval	: 2000  // time between transitions
    };
	
	$.Gallery.prototype 	= {
		_init 				: function( options ) {
			
			this.options 		= $.extend( true, {}, $.Gallery.defaults, options );
			
			// support for 3d / 2d transforms and transitions
			this.support3d		= true;
			this.support2d		= true;
			this.supportTrans	= true;
			
			this.$wrapper		= this.$el.find('.dg-wrapper');
			
			this.$items			= this.$wrapper.children();
			this.itemsCount		= this.$items.length;
			
			this.$nav			= this.$el.find('nav');
			this.$navPrev		= this.$nav.find('.dg-prev');
			this.$navNext		= this.$nav.find('.dg-next');
			
			this.$trigger		= this.$el.find('.trigger');
			this._maketrigger();
			
			if( this.itemsCount < 3 ) {
				this.$nav.remove();
				return false;
			}	
			
			this.current		= this.options.current;
			this.isAnim			= false;
			this.$items.css({
				'opacity'	: 0,
				'visibility': 'hidden'
			});
			
			
			this._validate();
			this._layout();
			
			// load the events
			this._loadEvents();
			
			// slideshow
			if( this.options.autoplay ) {
				this._startSlideshow();
			}
		},
		
		_maketrigger		: function(){
			var h = '';
			for(var i=0;i<this.itemsCount;i++){
				var hot = '';
				if(this.current == i){
					hot = 'hot';
				}
				h += '<a href="javascript:;" class='+hot+'></a>';
			}
			this.$trigger.html(h);
		},
		
		_validate			: function() {
		
			if( this.options.current < 0 || this.options.current > this.itemsCount - 1 ) {
				this.current = 0;
			}	
		
		},
		_layout				: function() {
			
			// current, left and right items
			this._setItems();
			
			// current item is not changed
			// left and right one are rotated and translated
			var leftCSS, rightCSS, currentCSS;
			
			if( this.support3d && this.supportTrans ) {
			
				leftCSS 	= {
					'-webkit-transform'	: 'translateX(-200px) scale(0.6)',
					'-moz-transform'	: 'translateX(-200px) scale(0.6)',
					'-o-transform'		: 'translateX(-200px) scale(0.6)',
					'-ms-transform'		: 'translateX(-200px) scale(0.6)',
					'transform'			: 'translateX(-200px) scale(0.6)'
				};
				
				rightCSS	= {
					'-webkit-transform'	: 'translateX(200px) scale(0.6)',
					'-moz-transform'	: 'translateX(200px) scale(0.6)',
					'-o-transform'		: 'translateX(200px) scale(0.6)',
					'-ms-transform'		: 'translateX(200px) scale(0.6)',
					'transform'			: 'translateX(200px) scale(0.6)'
				};
				
				currentCSS	= {
					'z-index'			: 999
				};
				
				leftCSS.opacity		= 1;
				leftCSS.visibility	= 'visible';
				rightCSS.opacity	= 1;
				rightCSS.visibility	= 'visible';
			
			}
			else if( this.support2d && this.supportTrans ) {
				
				leftCSS 	= {
					'-webkit-transform'	: 'translateX(-200px) scale(0.6)',
					'-moz-transform'	: 'translateX(-200px) scale(0.6)',
					'-o-transform'		: 'translateX(-200px) scale(0.6)',
					'-ms-transform'		: 'translateX(-200px) scale(0.6)',
					'transform'			: 'translateX(-200px) scale(0.6)'
				};
				
				rightCSS	= {
					'-webkit-transform'	: 'translateX(200px) scale(0.6)',
					'-moz-transform'	: 'translateX(200px) scale(0.6)',
					'-o-transform'		: 'translateX(200px) scale(0.6)',
					'-ms-transform'		: 'translateX(200px) scale(0.6)',
					'transform'			: 'translateX(200px) scale(0.6)'
				};
				
				
				currentCSS	= {
					'z-index'			: 999
				};
				
				leftCSS.opacity		= 1;
				leftCSS.visibility	= 'visible';
				rightCSS.opacity	= 1;
				rightCSS.visibility	= 'visible';
			
			}
			
			this.$leftItm.css( leftCSS || {} );
			this.$rightItm.css( rightCSS || {} );
			
			this.$currentItm.css( currentCSS || {} ).css({
				'opacity'	: 1,
				'visibility': 'visible'
			}).addClass('dg-center');
			
		},
		_setItems			: function() {
			var _self	= this;
			this.$items.removeClass('dg-center');
			this.$currentItm	= this.$items.eq( this.current );
			this.$trigger.find('a').eq(this.current).addClass('hot').siblings('a').removeClass('hot');
			this.$leftItm		= ( this.current === 0 ) ? this.$items.eq( this.itemsCount - 1 ) : this.$items.eq( this.current - 1 );
			this.$rightItm		= ( this.current === this.itemsCount - 1 ) ? this.$items.eq( 0 ) : this.$items.eq( this.current + 1 );
			this.$items.css( 'z-index', 1 );
			this.$currentItm.css( 'z-index', 999 );
			
			// next & previous items
			if( this.itemsCount > 3 ) {
			
				// next item
				this.$nextItm		= ( this.$rightItm.index() === this.itemsCount - 1 ) ? this.$items.eq( 0 ) : this.$rightItm.next();
				this.$nextItm.css( this._getCoordinates('outright') );
				
				// previous item
				this.$prevItm		= ( this.$leftItm.index() === 0 ) ? this.$items.eq( this.itemsCount - 1 ) : this.$leftItm.prev();
				this.$prevItm.css( this._getCoordinates('outleft') );

			}
			
			Event.addListener(this.$rightItm[0],Event.touchtype('end'),function(e){
				e.preventDefault();
				_self._navigate('next');
				return false;	
			})	
			
			Event.addListener(this.$currentItm[0],Event.touchtype('end'),function(e){
				e.preventDefault();
				return false;	
			})
			
			Event.addListener(this.$leftItm[0],Event.touchtype('end'),function(e){
				e.preventDefault();
				_self._navigate('prev');
				return false;	
			})	

			
		},
		_loadEvents			: function() {
			
			var _self	= this;
			/*
			this.$el.swipeLeft(function(){
				if( _self.options.autoplay ) {
					clearTimeout( _self.slideshow );
					_self.options.autoplay	= false;
				
				}
				_self._navigate('next');
				return false;
			})
			
			this.$el.swipeRight(function(){
				if( _self.options.autoplay ) {
				
					clearTimeout( _self.slideshow );
					_self.options.autoplay	= false;
				
				}
				
				_self._navigate('prev');
				return false;
			})
			*/
			this.$navPrev.on( 'click', function( event ) {
				if( _self.options.autoplay ) {
					clearTimeout( _self.slideshow );
					_self.options.autoplay	= false;
				}
				
				_self._navigate('prev');
				return false;
				
			});
			
			this.$navNext.on( 'click', function( event ) {
				if( _self.options.autoplay ) {
					clearTimeout( _self.slideshow );
					_self.options.autoplay	= false;
				}
				
				_self._navigate('next');
				return false;
				
			});
			
			this.$wrapper.on( 'webkitTransitionEnd.gallery transitionend.gallery OTransitionEnd.gallery', function( event ) {
				
				_self.$currentItm.addClass('dg-center');
				_self.$items.removeClass('dg-transition');
				_self.isAnim	= false;
				
			});
			
		},
		_getCoordinates		: function( position ) {
			
			if( this.support3d && this.supportTrans ) {

				switch( position ) {
					case 'outleft':
						return {
							'-webkit-transform'	: 'translateX(-450px) translateZ(-300px) rotateY(45deg)',
							'-moz-transform'	: 'translateX(-450px) translateZ(-300px) rotateY(45deg)',
							'-o-transform'		: 'translateX(-450px) translateZ(-300px) rotateY(45deg)',
							'-ms-transform'		: 'translateX(-450px) translateZ(-300px) rotateY(45deg)',
							'transform'			: 'translateX(-450px) translateZ(-300px) rotateY(45deg)',
							'opacity'			: 0,
							'visibility'		: 'hidden'
						};
						break;
					case 'outright':
						return {
							'-webkit-transform'	: 'translateX(450px) translateZ(-300px) rotateY(-45deg)',
							'-moz-transform'	: 'translateX(450px) translateZ(-300px) rotateY(-45deg)',
							'-o-transform'		: 'translateX(450px) translateZ(-300px) rotateY(-45deg)',
							'-ms-transform'		: 'translateX(450px) translateZ(-300px) rotateY(-45deg)',
							'transform'			: 'translateX(450px) translateZ(-300px) rotateY(-45deg)',
							'opacity'			: 0,
							'visibility'		: 'hidden'
						};
						break;
					case 'left':
						return {
							'-webkit-transform'	: 'translateX(-200px) scale(0.6)',
							'-moz-transform'	: 'translateX(-200px) scale(0.6)',
							'-o-transform'		: 'translateX(-200px) scale(0.6)',
							'-ms-transform'		: 'translateX(-200px) scale(0.6)',
							'transform'			: 'translateX(-200px) scale(0.6)',
							'opacity'			: 1,
							'visibility'		: 'visible'
						};
						break;
					case 'right':
						return {
							'-webkit-transform'	: 'translateX(200px) scale(0.6)',
							'-moz-transform'	: 'translateX(200px) scale(0.6)',
							'-o-transform'		: 'translateX(200px) scale(0.6)',
							'-ms-transform'		: 'translateX(200px) scale(0.6)',
							'transform'			: 'translateX(200px) scale(0.6)',
							'opacity'			: 1,
							'visibility'		: 'visible'
						};
						break;
					case 'center':
						return {
							'-webkit-transform'	: 'translateX(0) scale(1)',
							'-moz-transform'	: 'translateX(0) scale(1)',
							'-o-transform'		: 'translateX(0) scale(1)',
							'-ms-transform'		: 'translateX(0) scale(1)',
							'transform'			: 'translateX(0) scale(1)',
							'opacity'			: 1,
							'visibility'		: 'visible'
						};
						break;
				};
			
			}
			else if( this.support2d && this.supportTrans ) {
			
				switch( position ) {
					case 'outleft':
						return {
							'-webkit-transform'	: 'translate(-450px) scale(0.7)',
							'-moz-transform'	: 'translate(-450px) scale(0.7)',
							'-o-transform'		: 'translate(-450px) scale(0.7)',
							'-ms-transform'		: 'translate(-450px) scale(0.7)',
							'transform'			: 'translate(-450px) scale(0.7)',
							'opacity'			: 0,
							'visibility'		: 'hidden'
						};
						break;
					case 'outright':
						return {
							'-webkit-transform'	: 'translate(450px) scale(0.7)',
							'-moz-transform'	: 'translate(450px) scale(0.7)',
							'-o-transform'		: 'translate(450px) scale(0.7)',
							'-ms-transform'		: 'translate(450px) scale(0.7)',
							'transform'			: 'translate(450px) scale(0.7)',
							'opacity'			: 0,
							'visibility'		: 'hidden'
						};
						break;
					case 'left':
						return {
							'-webkit-transform'	: 'translateX(-200px) scale(0.6)',
							'-moz-transform'	: 'translateX(-200px) scale(0.6)',
							'-o-transform'		: 'translateX(-200px) scale(0.6)',
							'-ms-transform'		: 'translateX(-200px) scale(0.6)',
							'transform'			: 'translateX(-200px) scale(0.6)',
							'opacity'			: 1,
							'visibility'		: 'visible'
						};
						break;
					case 'right':
						return {
							'-webkit-transform'	: 'translateX(200px) scale(0.6)',
							'-moz-transform'	: 'translateX(200px) scale(0.6)',
							'-o-transform'		: 'translateX(200px) scale(0.6)',
							'-ms-transform'		: 'translateX(200px) scale(0.6)',
							'transform'			: 'translateX(200px) scale(0.6)',
							'opacity'			: 1,
							'visibility'		: 'visible'
						};
						break;
					case 'center':
						return {
							'-webkit-transform'	: 'translateX(0) scale(1)',
							'-moz-transform'	: 'translateX(0) scale(1)',
							'-o-transform'		: 'translateX(0) scale(1)',
							'-ms-transform'		: 'translateX(0) scale(1)',
							'transform'			: 'translateX(0) scale(1)',
							'opacity'			: 1,
							'visibility'		: 'visible'
						};
						break;
				};
			
			}
			else {
			
				switch( position ) {
					case 'outleft'	: 
					case 'outright'	: 
					case 'left'		: 
					case 'right'	:
						return {
							'opacity'			: 0,
							'visibility'		: 'hidden'
						};
						break;
					case 'center'	:
						return {
							'opacity'			: 1,
							'visibility'		: 'visible'
						};
						break;
				};
			
			}
		
		},
		_navigate			: function( dir ) {
			
			if( this.supportTrans && this.isAnim )
				return false;
				
			this.isAnim	= true;
			
			switch( dir ) {
			
				case 'next' :
					
					this.current	= this.$rightItm.index();
					
					// current item moves left
					this.$currentItm.addClass('dg-transition').css( this._getCoordinates('left') );
					
					// right item moves to the center
					this.$rightItm.addClass('dg-transition').css( this._getCoordinates('center') );	
					
					// next item moves to the right
					if( this.$nextItm ) {
						
						// left item moves out
						this.$leftItm.addClass('dg-transition').css( this._getCoordinates('outleft') );
						
						this.$nextItm.addClass('dg-transition').css( this._getCoordinates('right') );
						
					}
					else {
					
						// left item moves right
						this.$leftItm.addClass('dg-transition').css( this._getCoordinates('right') );
					
					}
					break;
					
				case 'prev' :
				
					this.current	= this.$leftItm.index();
					
					// current item moves right
					this.$currentItm.addClass('dg-transition').css( this._getCoordinates('right') );
					
					// left item moves to the center
					this.$leftItm.addClass('dg-transition').css( this._getCoordinates('center') );
					
					// prev item moves to the left
					if( this.$prevItm ) {
						
						// right item moves out
						this.$rightItm.addClass('dg-transition').css( this._getCoordinates('outright') );
					
						this.$prevItm.addClass('dg-transition').css( this._getCoordinates('left') );
						
					}
					else {
					
						// right item moves left
						this.$rightItm.addClass('dg-transition').css( this._getCoordinates('left') );
					
					}
					break;	
					
			};
			
			this._setItems();
			
			if( !this.supportTrans )
				this.$currentItm.addClass('dg-center');
			
		},
		_startSlideshow		: function() {
		
			var _self	= this;
			
			this.slideshow	= setTimeout( function() {
				
				_self._navigate( 'next' );
				
				if( _self.options.autoplay ) {
				
					_self._startSlideshow();
				
				}
			
			}, this.options.interval );
		
		},
		destroy				: function() {
			
			this.$navPrev.off('.gallery');
			this.$navNext.off('.gallery');
			this.$wrapper.off('.gallery');
			
		}
	};
	
	var logError 			= function( message ) {
		if ( this.console ) {
			console.error( message );
		}
	};

	$.fn.gallery			= function() {
		
		new $.Gallery({}, this )
		
		return this;
		
	};
	
})(jQuery);