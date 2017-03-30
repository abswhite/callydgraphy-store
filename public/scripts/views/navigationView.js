'use strict';

$(document).ready(function() {

  $('.headerRow').remove();

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      console.log($(window).scrollTop())
    if ($(window).scrollTop() >= 80) {
      $('.top-bar').addClass('navbar-fixed');
      $('.top-bar h1').addClass('h1-scroll');
      $('.butterfly').addClass('butterfly-scroll');
      $('.subtitle').addClass('subtitle-margin');
      $('.cart_icon').addClass('cart_icon1');
      $('.cart_icon').removeClass('cart_icon2');
      $('.headerRow').remove();

    }

    if ($(window).scrollTop() < 80) {
      $('.top-bar').removeClass('navbar-fixed');
      $('.top-bar h1').removeClass('h1-scroll');
      $('.butterfly').removeClass('butterfly-scroll');
      $('.subtitle').removeClass('subtitle-margin');
      $('.cart_icon').removeClass('cart_icon1');
      $('.cart_icon').addClass('cart_icon2');
      $('.headerRow').remove();

    }
  });
});