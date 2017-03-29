'use strict';

(function(module) {
  const cartController = {};

  cartController.init = function() {
    $('#cart').show();
    $('nav').show();
    $('#store').hide();
    $('#about').hide();
    $('#home').hide();
  };

  module.cartController = cartController;
})(window);
