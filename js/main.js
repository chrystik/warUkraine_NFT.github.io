window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$('.burger-menu').on('click', function(e) {
  $(this).toggleClass('opened')
  $('.burger-aside').toggleClass('burger-opened')
})

$('main').on('click', function(e) {
  $('.burger-menu').removeClass('opened')
  $('.burger-aside').removeClass('burger-opened')
})

$('.header-section').on('click', function(e) {
  $('.burger-menu').removeClass('opened')
  $('.burger-aside').removeClass('burger-opened')
})