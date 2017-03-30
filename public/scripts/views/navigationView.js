'use strict';

$(document).ready(function() {

  $('.headerRow').remove();

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 80) {
      $('.top-bar').addClass('navbar-fixed');
      $('.top-bar h1').addClass('h1-scroll');
      $('.butterfly').addClass('butterfly-scroll');
      $('.subtitle').addClass('subtitle-margin');

      $('#cart_icon').removeClass('cart_icon');
      $('#cart_icon').addClass('cart_icon1');

      $('.itemAdded').addClass('confirmation');
      $('.itemAdded1').removeClass('confirmation');

      $('.headerRow').remove();
    }

    if ($(window).scrollTop() < 80) {
      $('.top-bar').removeClass('navbar-fixed');
      $('.top-bar h1').removeClass('h1-scroll');
      $('.butterfly').removeClass('butterfly-scroll');
      $('.subtitle').removeClass('subtitle-margin');

      $('#cart_icon').addClass('cart_icon');
      $('#cart_icon').removeClass('cart_icon1');

      $('.itemAdded').removeClass('confirmation');
      $('.itemAdded1').addClass('confirmation');
      $('.headerRow').remove();

    }
  });
});
