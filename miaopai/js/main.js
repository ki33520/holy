$(function() {

    // ['1240067740','1362895517','1236937620','1401712533','1412773094']
	//$.get('api.php?action=miaopai',{uid:'1401712533'},function(data){
	$.get('api.php?action=miaopai', {
		uid: '1362895517'
	},
	function(data) {
		if (data.result && data.result.length > 0) {
			for (i = 0; i < data.result.length; i++) {
				//console.log(data.result[i].channel.stream.base);
				console.log(data.result[i].type);
				console.log(data.result[i].channel.ext.finishTimeNice);
				console.log(data.result[i].channel.ext.t);
			}
			
			console.log('-------------------------------------------------------------');
			console.log(data);
			console.log("result[0] mp4地址: " + data.result[0].channel.stream.base);
			console.log("result[0] 图片地址: " + data.result[0].channel.pic.base + data.result[0].channel.pic.m);
			console.log("result[0] 文字: " + data.result[0].channel.ext.t);
			console.log("result[0] 的频道: " + data.result[0].type + " ----channel为视频，forward为转发");
			console.log("result[0] 的发布时间: " + data.result[0].channel.ext.finishTimeNice);
            console.log('-------------------------------------------------------------');

            showMiaopaiVideo(data, 'user1');
		}

	},
	'json');

	function showMiaopaiVideo(data, user) {
		var data2 = [];
		for (var i = 0; i < data.result.length; i++) {
			if (data.result[i].type == 'channel') {
                var o = data.result[i].channel.ext.t;
				if (o.indexOf('#感悟新途#') > - 1) {
					data2.push(data.result[i]);
				}
			}
		}
		data2 = data2.reverse(); //反转数组，早先发布的在第一天
        console.log(data2);
        var dataObj = {};//一个新的对象，用来处理data2里的对象，data2里的对象要判断日期，每天只取最新的一条
        var data3 = []; //最终数组, 最后要把dataObj里的object全都push进去
        $.each(data2, function(i,n){
            var newDataArr = n.channel.ext.finishTimeNice.split(" ")[0];// finishTimeNice的原始格式为: 07-25 22:06:44
            //console.log(newDataArr);
            dataObj[newDataArr]=n;
        });
        console.log(dataObj);
        
        for (var k in dataObj){
            data3.push(dataObj[k]);
        }
        console.log(data3);
		for (var j = 0; j < data3.length; j++) {
            //console.log(dataObj);
			var picStr = data3[j].channel.pic.base + data3[j].channel.pic.m;
			var txt = data3[j].channel.ext.t + '<span style="color:red">'+data3[j].channel.ext.finishTimeNice+'</span>';
			var url = data3[j].channel.stream.base;
			var miaop_img = $('#' + user + ' .miaopai_img');
			var miaop_txt = $('#' + user + ' .miaopai_txt');
			$('<img/>').attr({
				src: picStr,
				'data-url': url
			}).appendTo(miaop_img[j]);
			$('<p>').html(txt).appendTo(miaop_txt[j]);
			//console.log(data2[j].channel.stream.base);
		}
		$("#" + user + " .miaopai_img img").each(function() {
			$(this).on('click', function() {
				var src = $(this).data('url');
				workPop.popOn();
				video_play2(src);
				swipeOff();
			})
		})
	}

	function dateFormat(date, fmt) {
		var o = {
			"M+": date.getMonth() + 1,
			//月份 
			"d+": date.getDate() //日 
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}



});

