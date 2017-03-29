'use strict';

(function(module) {

  let click = function() {
  $('#menu_icon').click(function() {
      $('#nav-mobile ul').show();
  })
}

let clickNav = function() {
  $('#nav-mobile ul li').click(function() {
    $('#nav-mobile ul').hide();
  });

  $('#cart_icon').click(function() {
    $('#nav-mobile ul').hide();
  });
};

clickNav();
click();

})(window);
