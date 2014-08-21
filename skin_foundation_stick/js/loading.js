//载入器
function wrLoading(objname,imgarray,fn){
	this.callback = fn;
	this.objname = objname;
	this.imgarray = imgarray;
	this.init();
	(imgarray && imgarray.length > 0) ? this.getImgNext() : this.onlyshow();	
}
wrLoading.prototype = {
	loaded: 0,
	retried: 0,
	root: 'images/',
	curCaseId:0,
	init:function(){
		this.obj = $(this.objname);
		if( this.obj.find('.percent').length > 0 )
		this.percent = this.obj.find('.percent');
	},
	show:function(){
		this.obj.fadeIn(300);
	},
	hide:function(fn){
		var This = this;
		this.obj.fadeOut(300,function(){
			fn();	
		});
	},
	onlyshow:function(){console.log(8);
		var This = this;
		this.show();
		setTimeout(function(){This.hide(This.callback);},300);
	},
	getImgNext: function () {//预加载图片   
		var This = this;      
		var MovePoint = function(){
			This.loaded++;
			if( This.obj.find('.percent').length > 0 )
			This.percent.html('- ' + Math.ceil(This.loaded / This.imgarray.length * 100) + " % -");	
			This.retried = 0;
			setTimeout(function(){
				This.getImgNext();
			},1)
		}
		if (This.loaded >= This.imgarray.length) {
			if( This.obj.find('.percent').length > 0 )
			This.percent.html('- 100% -');
			setTimeout(function(){
				This.hide(This.callback);
			},100)
			This.loaded = 0;
			This.retried = 0;
			return;
		}
		var oImg = new Image();
		oImg.onload = function() {
			MovePoint();
		};
		oImg.onerror = function() {
			This.retried++;
			if (This.retried < 3) {
				This.getImgNext()
			} else {
				MovePoint();
			}
		};
		oImg.src = This.root + This.imgarray[This.loaded];
	}
}