// Enhanced animations and interactions
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let cross = document.querySelector('#cross');

menuIcon.onclick = () => {
    navbar.style.display = 'block';
    menuIcon.style.display = 'none';
    // Add animation
    document.querySelectorAll('.navbar a').forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
};

cross.onclick = () => {
    navbar.style.display = 'none';
    menuIcon.style.display = 'block';
};

// Improved ScrollReveal animations
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true
});

ScrollReveal().reveal('.home-contant h1, .heading', { origin: 'top', delay: 300 });
ScrollReveal().reveal('.home-img', { origin: 'right', delay: 400 });
ScrollReveal().reveal('.home-contant h3, .home-contant p', { origin: 'left', delay: 500 });
ScrollReveal().reveal('.social-media, .cta-buttons', { origin: 'bottom', delay: 600 });
ScrollReveal().reveal('.services-box', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.portfolio-box', { origin: 'bottom', interval: 300 });
ScrollReveal().reveal('.contact form', { origin: 'bottom' });

// Enhanced typing animation
var typed = new Typed(".skills", {
    strings: ["Frontend Developer", "UI/UX Designer", "Web Enthusiast", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    backDelay: 1500,
    startDelay: 500
});

// Smooth scrolling with offset for header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navbar.style.display = 'none';
            menuIcon.style.display = 'block';
        }
    });
});

// Enhanced header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        header.classList.add('sticky');
        header.style.padding = '1.5rem 9%';
    } else {
        header.classList.remove('sticky');
        header.style.padding = '2rem 9%';
    }
    
    // Active menu highlighting based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a:not(:first-child)');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add this to create a parallax effect on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Parallax effect for home section
    document.querySelector('.home-img').style.transform = `translateY(${scrollPosition * 0.05}px)`;
    document.querySelector('.home-contant').style.transform = `translateY(${scrollPosition * 0.03}px)`;
});

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  setTimeout(() => {
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
  }, 100);
});

document.addEventListener('mousedown', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
  cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
});

document.addEventListener('mouseup', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Links and buttons hover effect
const links = document.querySelectorAll('a, button, .btn');
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(2)';
    cursorFollower.style.borderColor = 'transparent';
  });
  
  link.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.borderColor = 'var(--primary-color)';
  });
});

// Typing animation - fixed implementation
document.addEventListener('DOMContentLoaded', function() {
  const typedTextSpan = document.querySelector('.typed-text');
  const cursorSpan = document.querySelector('.cursor');
  
  if (typedTextSpan && cursorSpan) {
    const textArray = ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Problem Solver"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
      }
    }
    
    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }
    
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  }
  
  // Initialize skill bars
  const skillBars = document.querySelectorAll('.skill-bar');
  if (skillBars.length > 0) {
    skillBars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      setTimeout(() => {
        bar.style.width = level;
      }, 500);
    });
  }
  
  // Active menu highlighting based on scroll position
  function highlightMenu() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const scrollPosition = window.scrollY;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightMenu);
  
  // Make sure the menu button works correctly
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
          menuBtn.classList.remove('active');
          navLinks.classList.remove('active');
        }
      }
    });
  });
}
