var makePic = function(id) {
	this.canvas = document.getElementById(id);
	this.init();
	
};
makePic.prototype 	= {
	init : function() {
		this.size		= {'w':this.canvas.width,'h':this.canvas.height};
		this.ctx 		= this.canvas.getContext('2d');
		this.wrap 		= $(this.canvas).parent();
		this.tools 		= $('.maketools');
		
		this.uploadbtn	= this.wrap.find('input[type=file]');
		this.upbtn 		= this.tools.find('.upbtn');
		this.downbtn 	= this.tools.find('.downbtn');
		this.delbtn 	= this.tools.find('.delbtn');
		
		this.uploadok	= false;
		
		this.bindbtn();
	},
	//绑定按钮功能
	bindbtn:function(){
		var _self = this;
		Event.addListener(_self.uploadbtn[0],'change',function(e){
			var _t = this;
			_self.uploadok = true;
			_self.upload(_t);
		});
	},
	//upload，上传图片
	upload : function(obj){
		var _self = this;
		if(this.value != ''){
			var file = obj.files[0];
			var name = file.name;
			if(client.os == 'Android' && name.split('.').length == 1) {
				name = file.name+'.jpg';
			}
			var arrext = name.split('.');
			var tmpext = arrext[arrext.length-1];
			var filetype = this.checkext(tmpext);
			if(filetype){
				var fr = new FileReader;
				var orient = 1;
				fr.onloadend = function() {
					var exif = EXIF.readFromBinaryFile(new BinaryFile(this.result)), html = [];
					orient = exif.Orientation;
				};
				fr.readAsBinaryString(file);
				var url = webkitURL?window.webkitURL.createObjectURL(file):window.URL.createObjectURL(file);
				var $img = new Image();
				$img.onload = function() {
					//隐藏原upload
					_self.uploadbtn.hide();
					
					//获取文件源信息，用于比对文件是否相同
					var size = file.size;

					var ow,oh;
					ow = this.width;
					oh = this.height;
				
					var boxp = _self.size.w / _self.size.h;
					var picp = ow/oh , w , h;
					//高 > 宽
					if(boxp > picp){
						w = _self.size.w;
						h = Math.ceil(w*oh/ow);
					}else{
						h = _self.size.h;
						w = Math.ceil(h*ow/oh);	
					}
					
					var fit = {h:h*2,w:w*2};
					var tmpcanvas = document.createElement('canvas');
					tmpcanvas.width = fit.w * 2;
					tmpcanvas.height = fit.h * 2;
					var tmpctx = tmpcanvas.getContext('2d');
					var tmpc = document.createElement('canvas');
					tmpc.width = 1000;
					tmpc.height = 1000 * oh / ow;
					var tmpx = tmpc.getContext('2d');
					
					_self.transformCoordinate(tmpcanvas, fit.w, fit.h, orient);

					var subsampled = _self.detectSubsampling($img);
					if (subsampled) {
					  ow /= 2;
					  oh /= 2;
					}
					
					tmpctx.beginPath();
					tmpctx.fillStyle = '#fff'; 
					tmpctx.fillRect(0,0,fit.w, fit.h);
					tmpctx.save();
					
					var vertSquashRatio =  _self.detectVerticalSquash($img, ow, oh);
					var dw = Math.ceil(tmpc.width * fit.w / ow);
					var dh = Math.ceil(tmpc.height * fit.h / oh / vertSquashRatio);
					var sy = 0;
					var dy = 0;
					while (sy < oh) {
					  var sx = 0;
					  var dx = 0;
					  while (sx < ow) {
						 tmpx.clearRect(0, 0, tmpc.width,  tmpc.height);
						 tmpx.drawImage($img, -sx, -sy);
						 tmpctx.drawImage(tmpc, 0, 0, tmpc.width, tmpc.height, dx, dy, dw, dh);
						 sx += tmpc.width;
						 dx += dw;
					  }
					  sy += tmpc.height;
					  dy += dh;
					}
					tmpctx.restore();
					//$('body').append(tmpcanvas);
					//var base64 = tmpcanvas.toDataURL(filetype);
					
					_self.ctx.drawImage(tmpcanvas,0,0);
					_self.picMove(tmpcanvas);
				}
				$img.src = url;
				
			}else{
				alert('您的格式是'+tmpext+'，请重新上传');
				return false;	
			}

		}else{
			alert('请选择图片');	
		}
	},
	
	picMove:function(img){
		var _self = this;
		var imgX=0,
			imgY=0,
			imgScale=1;
		var begin =false ,pos = {x:0,y:0};
		
		Event.addListener(_self.canvas,Event.touchtype('start'),start);
		Event.addListener(_self.canvas,Event.touchtype('move'),move);
		Event.addListener(_self.canvas,Event.touchtype('end'),end);
		
		function windowToCanvas(x,y){
			var bbox = _self.canvas.getBoundingClientRect();
			return {
				x:x - bbox.left - (bbox.width - _self.size.w) / 2,
				y:y - bbox.top - (bbox.height - _self.size.h) / 2
			};
		}
		
		function drawMove(){
			_self.ctx.clearRect(0,0,_self.size.w,_self.size.h);
			_self.ctx.drawImage(img,0,0,img.width,img.height,imgX,imgY,img.width*imgScale,img.height*imgScale);
		}
		
		function drawChange(){
			_self.ctx.clearRect(0,0,_self.size.w,_self.size.h);
			_self.ctx.drawImage(img,0,0,img.width,img.height,0,0,img.width*imgScale,img.height*imgScale);
		}
		
		function up(){
			var pos=windowToCanvas(_self.size.w/2 , _self.size.h/2);
			imgScale*=1.2;
			imgX=0;
        	imgY=0;
			drawChange();
		}
		function down(){
			var pos=windowToCanvas(_self.size.w/2 , _self.size.h/2);
			imgScale*=0.8;
			imgX=0;
        	imgY=0;
			drawChange();		
		}
		function del(){
			_self.ctx.clearRect(0,0,_self.size.w,_self.size.h);
			_self.uploadok = false;
			_self.uploadbtn.show().val('');
			_self.wrap.removeClass('hot');
			Event.removeEvent(_self.upbtn[0],Event.touchtype('end'),up);
			Event.removeEvent(_self.downbtn[0],Event.touchtype('end'),down);
			Event.removeEvent(_self.delbtn[0],Event.touchtype('end'),del);
		}
		function end(e){
			if(begin){
				Event.removeEvent($('body')[0],Event.touchtype('move'),Event.stopDefault)
				e = client.ifmobile ? e.targetTouches[0]:e;
				pos=windowToCanvas(e.pageX,e.pageY);	
				begin = false;
			}
		}
		
		function move(e){
			if(begin){
				e = client.ifmobile ? e.targetTouches[0]:e;
				_self.canvas.style.cursor="move";
				var pos1=windowToCanvas(e.pageX,e.pageY);
				var x=pos1.x-pos.x;
				var y=pos1.y-pos.y;
				pos=pos1;
				imgX+=x;
				imgY+=y;
				drawMove();
			}
		}

		function start(e){
			begin = true;
			_self.tools.show();
			Event.addListener(_self.upbtn[0],Event.touchtype('end'),up);
			Event.addListener(_self.downbtn[0],Event.touchtype('end'),down);
			Event.addListener(_self.delbtn[0],Event.touchtype('end'),del);
			Event.addListener($('body')[0],Event.touchtype('move'),Event.stopDefault)
			e = client.ifmobile ? e.targetTouches[0]:e;
			_self.wrap.addClass('hot').siblings().removeClass('hot');
			pos=windowToCanvas(e.pageX,e.pageY);
			
		}	
	},
	
	detectSubsampling:function(img){
		var iw = img.naturalWidth, ih = img.naturalHeight;
		if (iw * ih > 1024 * 1024) { // subsampling may happen over megapixel image
		  var canvas = document.createElement('canvas');
		  canvas.width = canvas.height = 1;
		  var ctx = canvas.getContext('2d');
		  ctx.drawImage(img, -iw + 1, 0);
		  return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
		} else {
		  return false;
		}
	},
	detectVerticalSquash:  function (img, iw, ih) {
		var canvas = document.createElement('canvas');
		canvas.width = 1;
		canvas.height = ih;
		var ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0);
		var data = ctx.getImageData(0, 0, 1, ih).data;
		// search image edge pixel position in case it is squashed vertically.
		var sy = 0;
		var ey = ih;
		var py = ih;
		while (py > sy) {
			var alpha = data[(py - 1) * 4 + 3];
			if (alpha === 0) {
			  ey = py;
			} else {
			  sy = py;
			}
			py = (ey + sy) >> 1;
		}
		var ratio = (py / ih);
		return (ratio===0)?1:ratio;
	},
	
	
	transformCoordinate:function(canvas, width, height, orientation) {
		switch (orientation) {
		  case 5:
		  case 6:
		  case 7:
		  case 8:
			canvas.width = height;
			canvas.height = width;
			break;
		  default:
			canvas.width = width;
			canvas.height = height;
		}
		var ctx = canvas.getContext('2d');
		switch (orientation) {
		  case 2:
			// horizontal flip
			ctx.translate(width, 0);
			ctx.scale(-1, 1);
			break;
		  case 3:
			// 180 rotate left
			ctx.translate(width, height);
			ctx.rotate(Math.PI);
			break;
		  case 4:
			// vertical flip
			ctx.translate(0, height);
			ctx.scale(1, -1);
			break;
		  case 5:
			// vertical flip + 90 rotate right
			ctx.rotate(0.5 * Math.PI);
			ctx.scale(1, -1);
			break;
		  case 6:
			// 90 rotate right
			ctx.rotate(0.5 * Math.PI);
			ctx.translate(0, -height);
			break;
		  case 7:
			// horizontal flip + 90 rotate right
			ctx.rotate(0.5 * Math.PI);
			ctx.translate(width, -height);
			ctx.scale(-1, 1);
			break;
		  case 8:
			// 90 rotate left
			ctx.rotate(-0.5 * Math.PI);
			ctx.translate(-width, 0);
			break;
		  default:
			break;
		}
	},
	
	//验证上传文件格式
	checkext:function(ext){
		var AllImgExt = ['jpg','png','bmp','jpeg','gif'];
		var ext = ext.toLowerCase();
		var e;
		for(var i = 0;i<AllImgExt.length;i++){
			if(ext == AllImgExt[i]){
				switch (ext){
					case 'jpg' : e ='image/jpeg';
					break;
					case 'png' : e = 'image/png';
					break;
					case 'bmp' : e = 'image/bmp';
					break;
					case 'jpeg' : e = 'image/jpeg';
					break;
					case 'gif' : e = 'image/gif';
					break;
				}	
			}else{
				continue;	
			}
		}
		return e;
	},
}
