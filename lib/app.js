// var page = document.getElementsByTagName("scroll-container");

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar-leadgeni').addClass('transparent');
  } else {
    $('.navbar-leadgeni').removeClass('transparent');
  }
});



// let demojs = document.getElementById("demo-popup");
// console.log(demojs);
// const popup = document.getElementsByTagName("iframe");
// console.log(popup);

// demojs.addEventListener("click", (event) => {
//   event.preventDefault();
//   popup.classList.remove("demo-hidden");
// })


// <script>window.addEventListener && window.addEventListener("message", function(event){if (event.origin === "https://schmidbauer-mediciinternetag.youcanbook.me"){document.getElementById("ycbmiframeschmidbauer-mediciinternetag").style.height = event.data + "px";}}, false);</script>

// $("#demo-popup").click(function() {
//   event.preventDefault();
//   $ (".demo-hidden").toggleClass("demo-show");
// });



