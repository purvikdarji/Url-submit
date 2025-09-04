let navbtn = document.querySelector(".nav-menu-btn");
let navmenu = document.querySelector(".nav-menu");

function openNav() {
  if (navbtn.className === "nav-menu-btn") {
    navbtn.classList.toggle("active");
    navmenu.classList.toggle("responsive");
  }
  else {
    navbtn.classList.remove("active");
    navmenu.classList.remove("responsive");
  }
}
document.onclick = function(e){
  if (!navbtn.contains(e.target) && !navmenu.contains(e.target) ) {
      navbtn.classList.remove("active");
      navmenu.classList.remove("responsive");
  }
}
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");
  const scrollicon = document.getElementById("Scroll-up");
  const theme = document.getElementById("Theme-change");
  const menu =  document.getElementById("myNavMenu");
  
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
    scrollicon.style.display = "block";
    theme.style.marginTop = "13px";
    menu.style.top = "68px";
  }
  else {
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
    scrollicon.style.display = "none";
    theme.style.marginTop = "22px";
    menu.style.top = "80px";
  }
}


/* SCROLL REVEAL */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1500,
  reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 80 })
sr.reveal('.featured-text-info', { delay: 100 })
sr.reveal('.featured-text-btn', { delay: 100 })
sr.reveal('.social-media', { origin: 'left', delay: 100 })


/* -- PROJECT -- */
sr.reveal('.project-box', { interval: 70 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})
sr.reveal('.education-card-left', { delay: 100 })

sr.reveal('.skills-header', {})

/* ----- SCROLL REVEAL LEFT_RIGHT ANIMATION ---- */

/* -- CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 1000,
  reset: true
})


srLeft.reveal('.about-info', { delay: 80 })
srLeft.reveal('.education-card-right', { delay: 50 })
srLeft.reveal('.contact-info', { delay: 80 })

/* -- ABOUT SKILLS & FORM BOX -- */
srLeft.reveal('.skills-box', { delay: 80 })
srLeft.reveal('.form-control', { delay: 80 })



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }
    else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)