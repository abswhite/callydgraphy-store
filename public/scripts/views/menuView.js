'use strict';

(function(module) {

  let click = function() {
  $('#menu_icon').click(function() {
      $('#nav-mobile ul').show();
      console.log('#menu_icon');
  })
}

let clickNav = function() {
  $('#nav-mobile ul li').click(function() {
    $('#nav-mobile ul').hide();
    console.log('Menu ul hide');
  });

  $('#cart_icon').click(function() {
    console.log('menu');
    $('#nav-mobile ul').hide();
  });
};

clickNav();
click();

})(window);
