'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    $('#about').show();
    $('nav').show();
    $('#home').hide();
    $('#cart').hide();
    $('#store').hide();
    $('#services').hide();
    $('header').show();

  };

  module.aboutController = aboutController;
})(window);
