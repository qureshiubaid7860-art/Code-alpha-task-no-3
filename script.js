// Select elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul.nav-links');
const links = document.querySelectorAll('nav ul.nav-links li a');
const contactForm = document.getElementById('contactForm');

// Hamburger toggle for mobile
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth scroll + close menu on link click
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu after click
    navLinks.classList.remove('show');
  });
});

// Contact form dummy submit
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent! Thank you for contacting.');
  contactForm.reset();
});