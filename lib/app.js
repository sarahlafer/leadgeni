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

const modal2 = document.getElementById('myModal2');
const btn2 = document.getElementById("myBtn2");
const span2 = document.getElementById("close2");
btn2.onclick = function() {
    modal2.style.display = "block";
}
span2.onclick = function() {
    modal2.style.display = "none";
}

const modal3 = document.getElementById('myModal3');
const btn3 = document.getElementById("myBtn3");
const span3 = document.getElementById("close3");
btn3.onclick = function() {
    modal3.style.display = "block";
}
span3.onclick = function() {
    modal3.style.display = "none";
}

const modal4 = document.getElementById('myModal4');
const btn4 = document.getElementById("myBtn4");
const span4 = document.getElementById("close4");
btn4.onclick = function() {
    modal4.style.display = "block";
}
span4.onclick = function() {
    modal4.style.display = "none";
}

const modal5 = document.getElementById('myModal5');
const btn5 = document.getElementById("myBtn5");
const span5 = document.getElementById("close5");
btn5.onclick = function() {
    modal5.style.display = "block";
}
span5.onclick = function() {
    modal5.style.display = "none";
}

const modal6 = document.getElementById('myModal6');
const btn6 = document.getElementById("myBtn6");
const span6 = document.getElementById("close6");
btn6.onclick = function() {
    modal6.style.display = "block";
}
span6.onclick = function() {
    modal6.style.display = "none";
}

const modal7 = document.getElementById('myModal7');
const btn7 = document.getElementById("myBtn7");
const span7 = document.getElementById("close7");
btn7.onclick = function() {
    modal7.style.display = "block";
}
span7.onclick = function() {
    modal7.style.display = "none";
}

const modal8 = document.getElementById('myModal8');
const btn8 = document.getElementById("myBtn8");
const span8 = document.getElementById("close8");
btn8.onclick = function() {
    modal8.style.display = "block";
}
span8.onclick = function() {
    modal8.style.display = "none";
}

const modal9 = document.getElementById('myModal9');
const btn9 = document.getElementById("myBtn9");
const span9 = document.getElementById("close9");
btn9.onclick = function() {
    modal9.style.display = "block";
}
span9.onclick = function() {
    modal9.style.display = "none";
}

const modal10 = document.getElementById('myModal10');
const btn10 = document.getElementById("myBtn10");
const span10 = document.getElementById("close10");
btn10.onclick = function() {
    modal10.style.display = "block";
}
span10.onclick = function() {
    modal10.style.display = "none";
}
