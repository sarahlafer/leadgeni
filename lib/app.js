// var page = document.getElementsByTagName("scroll-container");

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar-leadgeni').addClass('transparent');
  } else {
    $('.navbar-leadgeni').removeClass('transparent');
  }
});



