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




const modal1 = document.getElementById('myModal1');

// Get the button that opens the modal
const btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
const span1 = document.getElementById("close1");

// When the user clicks on the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}
