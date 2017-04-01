'use strict';

(function(module) {

  const storeController = {};

  storeController.init = function() {

    $('#store').show();
    $('nav').show();
    $('#about').hide();
    $('#home').hide();
    $('#cart').hide();
    $('#services').hide();
    $('header').show();
  }

  module.storeController = storeController;
})(window);
