'use strict';

(function(module) {

  const homeController = {};

  homeController.init = function() {
    $('#home').show();
    $('nav').show();
    $('#cart').hide();
    $('#store').hide();
    $('#about').hide();
    $('header').hide();
  };

  module.homeController = homeController;

})(window);
