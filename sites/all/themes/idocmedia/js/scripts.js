(function ($, Drupal) {

  Drupal.behaviors.STARTER = {
    attach: function(context, settings) {

      // Smooth scroll
      // FIX: offset returns null
      /*$('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
      });*/

    }
  };

})(jQuery, Drupal);
