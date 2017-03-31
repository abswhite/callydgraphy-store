'use strict';

(function(module) {
  const cartController = {};

  cartController.init = function() {
    $('#cart').show();
    $('nav').show();
    $('#store').hide();
    $('#about').hide();
    $('#home').hide();
    $('header').show();

  };

  module.cartController = cartController;
})(window);
