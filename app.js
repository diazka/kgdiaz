// NAVIGATION BAR
const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    menu.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
         })
         //Menu animation
         menu.classList.toggle('toggle');
    });
}
navSlide()



//STICKY NAVBAR
window.onscroll = function() {myFunction()}; // When the user scrolls the page, execute myFunction

var navbar = document.getElementById("navbar"); // Get the navbar

var sticky = navbar.offsetTop; // Get the offset position of the navbar

function myFunction() { // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



// SCROLL TO TOP BUTTON
const myButton = document.getElementById('up-button');
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}