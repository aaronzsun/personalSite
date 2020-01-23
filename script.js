window.onscroll = function() {navbarLock()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function showAbout() {
    document.querySelector('#about').scrollIntoView({ 
        behavior: 'smooth' 
      });
}

function showResume() {
    document.querySelector('#resume').scrollIntoView({ 
        behavior: 'smooth' 
      });
}

function showProjects() {
    document.querySelector('#projects').scrollIntoView({ 
        behavior: 'smooth' 
      });
}

function showContact() {
    document.querySelector('#contact').scrollIntoView({ 
        behavior: 'smooth' 
      });
}

function navbarLock() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}