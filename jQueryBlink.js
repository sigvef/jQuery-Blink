(function($) {
 $.fn.blink = function(time) {
 return this.each(function() {
     var $that = $(this);
     setInterval((function(el){return function(){ el.css('visibility',el.css('visibility')=='hidden'?'visible':'hidden');};})($that), time||$that.attr('data-speed')||500);
     });
 };
 })(jQuery);
