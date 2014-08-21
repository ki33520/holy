/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.stop()

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // insert code here
         sym.stop()

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // insert code here
         sym.stop()

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13250, function(sym, e) {
         // insert code here
         sym.stop()

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14250, function(sym, e) {
         // insert code here
         sym.stop()

      });
      //Edge binding end

//      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
//         // insert code to be run when the symbol is created here
//         // insert code to be run when the symbol is created here
//         //监听鼠标mousedown事件，记录鼠标起始位置
//         	$(document).bind("mousedown", function(e) {
//         			 e.preventDefault();
//         			 var yStart = e.originalEvent.clientY;
//         			 sym.setVariable('yStart', yStart);
//         	});
//         //监听鼠标mouseup事件，记录鼠标结束位置，并依次计算滑动方向
//         	$(document).bind("mouseup", function(e) {
//         		 e.preventDefault();
//         		 yStart = sym.getVariable('yStart');
//         		 var yEnd = e.originalEvent.clientY;
//         
//         		if (yEnd - 50> yStart & yEnd > yStart & sym.getPosition() > 3248)
//         		{
//                   sym.playReverse();
//                                //向下滑动
//         			// play the timeline from the given position (ms or label)
//         		}
//         		else if (yEnd + 50 < yStart & yEnd < yStart & sym.getPosition() < 13500)
//         		{
//                                //向上滑动
//         			// play the timeline from the given position (ms or label)
//         			sym.play();
//         		}
//         	});
//         
//         //监听手势touchstart事件，记录初始位置
//         	$(document).bind("touchstart", function(e) {
//         			 //e.preventDefault();
//         			 var touch = e.originalEvent.touches[0];
//         			 var yStart = touch.pageY;
//         			 sym.setVariable('yStart', yStart);
//         	});
//         
//         //监听手势touchmove事件，而不是touchend事件。并依此计算滑动方向
//         	$(document).bind("touchmove", function(e) {
//         		if(event.preventDefault) event.preventDefault();
//         		event.returnValue = false;
//         		var touch = e.originalEvent.touches[0];
//         		yStart = sym.getVariable('yStart');
//         		var yEnd = touch.pageY;
//         		if (yEnd - 50> yStart & yEnd > yStart & sym.getPosition() > 3248)
//         		{
//                  sym.playReverse();
//                                //向下滑动
//         }
//         		else if (yEnd + 50 < yStart & yEnd < yStart & sym.getPosition() < 13500)
//         		{
//                                //向上滑动
//         			sym.play();
//         	}
//         	});
//
//      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_1}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zcgb_06}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.play()

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 180000, function(sym, e) {
         // insert code here
         sym.play()

      });
      //Edge binding end

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'form_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("ctx").append('<iframe height=100% allowTransparency="true" frameborder="0" scrolling="yes" style="width:100%;border:none"  src="http://10.88.0.158/holy/creatjs.html"></iframe>')

      });
      //Edge binding end

   })("form_1");
   //Edge symbol end:'form_1'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

})(jQuery, AdobeEdge, "EDGE-15405259");