$(window).scroll(function() {

  var scroll = $(window).scrollTop();

  var dh = $(document).height();

  var wh = $(window).height();

  value = (scroll /(dh-wh)) * 100;

  $('#container').css('left', - value * 3 + '%');

})