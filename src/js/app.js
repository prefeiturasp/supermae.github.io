;(function ($, window, undefined) {

  'use strict';

  /**
   * Start slider
   */
  $('#fullpage').fullpage({
    controlArrows: false,
    parallax: true,
    parallaxOptions: {
      type: 'reveal',
      percentage: 62,
      property: 'translate'
    }
  });

})(jQuery, window);
