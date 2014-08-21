/*
**自定义微信分享朋友圈的内容和缩略图
**分享成功监测
*/
var dataForWeixin = {
	appId: "",//微信公众号ID
	MsgImg: "", //分享给朋友和收藏时显示的缩略图       
	TLImg: "", //分享到朋友圈时显示的缩略图
	url: "",//分享地址
	title: "", //分享至微博、朋友圈、朋友都会用到
	desc: "", //分享给 朋友时会用到
	fakeid: "",
	callback: function () {
		//分享成功回调方法，其中分享给朋友、分享到微博、收藏都是成功后回调，而分享到朋友圈是点分享按钮就会调用
	}
};            
(function(){            
   var onBridgeReady=function(){           
   //分享给朋友 
   WeixinJSBridge.on('menu:share:appmessage', function(argv){            
	  WeixinJSBridge.invoke('sendAppMessage',{            
		 "appid":dataForWeixin.appId,            
		 "img_url":dataForWeixin.MsgImg,            
		 "img_width":"120",            
		 "img_height":"120",            
		 "link":dataForWeixin.url,
		 "desc":dataForWeixin.desc,
		 "title":dataForWeixin.title
	  }, function(res){(dataForWeixin.callback)();});            
   });    
   //分享至朋友圈        
   WeixinJSBridge.on('menu:share:timeline', function(argv){            
	  (dataForWeixin.callback)();            
	  WeixinJSBridge.invoke('shareTimeline',{            
		 "img_url":dataForWeixin.TLImg,            
		 "img_width":"120",            
		 "img_height":"120",            
		 "link":dataForWeixin.url,
		 "desc":dataForWeixin.desc,
		 "title":dataForWeixin.title
	  }, function(res){});            
   });                 
};            
	if(document.addEventListener){            
	   document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);            
	}else if(document.attachEvent){            
	   document.attachEvent('WeixinJSBridgeReady'   , onBridgeReady);            
	   document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);            
	}
})();