(function ($, Drupal) {

  Drupal.behaviors.STARTER = {
    attach: function(context, settings) {

      $('.hamburger').on('click', function() {
        $('.main-nav').toggleClass('nav-hidden');
      });

    }
  };

})(jQuery, Drupal);
