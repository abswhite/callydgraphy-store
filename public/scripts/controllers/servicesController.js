'use strict';

(function(module) {

  const servicesController = {};

  servicesController.init = function() {
    $('#services').show();
    $('nav').show();
    $('#cart').hide();
    $('#store').hide();
    $('#about').hide();
    $('header').show();
    $('#home').hide();
  };

  module.servicesController = servicesController;

})(window);
