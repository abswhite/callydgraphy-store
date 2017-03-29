'use strict';

(function(module) {

  let click = function() {
  $('#menu_icon').click(function() {
      $('nav ul').show();
      console.log('#menu_icon');
  })
}

let clickNav = function() {
  $('nav ul li').click(function() {
    $('nav ul').hide();
    console.log('Menu ul hide');

  });
};

clickNav();
click();

})(window);
