'use strict';

(function(module) {

  let addToCart = function() {
    console.log('add to cart');
    $('shelfItem .item_add').click(function() {
      console.log('click');
    });
  };

  addToCart();
})(window);
