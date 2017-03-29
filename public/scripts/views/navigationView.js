'use strict';

$(document).ready(function() {

  // $('#cart_icon1').hide();

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 60) {
      $('.top-bar').addClass('navbar-fixed');
      $('.top-bar h1').addClass('h1-scroll');
      $('.butterfly').addClass('butterfly-scroll');
      $('#cart_icon1').show();
      $('#cart_icon').hide();

    }

    if ($(window).scrollTop() < 60) {
      $('.top-bar').removeClass('navbar-fixed');
      $('.top-bar h1').removeClass('h1-scroll');
      $('.butterfly').removeClass('butterfly-scroll');
      $('#cart_icon1').hide();
      $('#cart_icon').hide();

    }
  });
});
