$(document).ready(function(){
  var $banner = $('#banner');
  var $header = $('header');
  $(window).on('scroll', function(){
    if ($(window).scrollTop() > $banner.height()) {
      $header.addClass('active').fadeIn();
      $(window).off('scroll');
    }
  });
});
