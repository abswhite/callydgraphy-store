'use strict';

(function(module) {

  let click = function() {
  $('.menu_icon').click(function() {
      $('#nav-mobile ul').show();
  });
};

  let clickHome = function() {
    $('.menu_icon').click(function() {
      $('#nav-mobile-home ul').show();
    });
  };

  let clickNav = function() {
    $('#nav-mobile ul li').click(function() {
      $('#nav-mobile ul').hide();
      $('#nav-mobile-home ul').hide();

    });

    $('#cart_icon').click(function() {
      $('#nav-mobile ul').hide();
      $('#nav-mobile-home ul').hide();

    });
  };

  let clickNavHome = function() {
    $('#nav-mobile-home ul li').click(function() {
      $('#nav-mobile-home ul').hide();
      $('#nav-mobile ul').hide();

    });

    $('#cart_icon').click(function() {
      $('#nav-mobile-home ul').hide();
      $('#nav-mobile ul').hide();

    });
  };

clickNav();
clickNavHome();
click();
clickHome();

})(window);
