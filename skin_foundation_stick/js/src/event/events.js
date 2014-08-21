(function(win){
	var Event = {
		touchtype : function(type){
			switch(type){
				case 'start':return client.ifmobile ? "touchstart" : "mousedown";
				break;
				case 'move':return client.ifmobile ? "touchmove" : "mousemove";
				break;
				case 'end':return client.ifmobile ? "touchend" : "mouseup";
				break;
			}
		},
		addListener : function (element, type, handler) {
			this.guid = 1;
			
			//为每一个事件处理函数分派一个唯一的ID
			if (!handler.$$guid) handler.$$guid = this.guid++;
			//为元素的事件类型创建一个哈希表
			if (!element.events) element.events = {};
			//为每一个"元素/事件"对创建一个事件处理程序的哈希表
			var handlers = element.events[type];
			if (!handlers) {
				handlers = element.events[type] = {};
				//存储存在的事件处理函数(如果有)
				if (element["on" + type]) {
					handlers[0] = element["on" + type];
				}
			}
			//将事件处理函数存入哈希表
			handlers[handler.$$guid] = handler;
			//指派一个全局的事件处理函数来做所有的工作
			element["on" + type] = function(event){
				var returnValue = true;
				event = event || fixEvent(window.event);
				//取得事件处理函数的哈希表的引用
				var handlers = this.events[event.type];
				//执行每一个处理函数
				for (var i in handlers) {
					this.$$handleEvent = handlers[i];
					if (this.$$handleEvent(event) === false) {
						returnValue = false;
					}
				}
				return returnValue;	
			};
			
			//为IE的事件对象添加一些“缺失的”函数
			function fixEvent(event) {
				event.preventDefault = function() {
					this.returnValue = false;
				};
				event.stopPropagation = function() {
					this.cancelBubble = true;
				};
				return event;
			};
		},
		
		removeEvent : function(element, type, handler) {
			//从哈希表中删除事件处理函数
			if (element.events && element.events[type]) {
				delete element.events[type][handler.$$guid];
			}
		},
		
		stopDefault : function ( e ) {
    		if ( e && e.preventDefault )
        		e.preventDefault();
			else
				window.event.returnValue = false;
			return false;
		}
	};
	
	win.Event = Event;
})(window);