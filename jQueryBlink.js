(function($) {
      $.fn.jqueryblink = function(time) {
              return this.each(function() {
                  var that = this;
                  setInterval((function(that){return function(){ $(that).toggle();};})(that), time||500);
                });
      };
})(jQuery);
