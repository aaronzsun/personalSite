window.onscroll = function() {scroll()};

var mybutton = document.getElementById("topButton");
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

function scroll() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}