 // Mobile menu toggle
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');

 hamburger.addEventListener('click', () => {
     navLinks.classList.toggle('active');
 });

 // Close mobile menu when clicking a link
 document.querySelectorAll('.nav-links a').forEach(link => {
     link.addEventListener('click', () => {
         navLinks.classList.remove('active');
     });
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Animation on scroll
 const fadeElements = document.querySelectorAll('.fade-in');
 
 const fadeObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.style.opacity = 1;
             entry.target.style.transform = 'translateY(0)';
         }
     });
 }, { threshold: 0.1 });

 fadeElements.forEach(element => {
     fadeObserver.observe(element);
     element.style.opacity = 0;
     element.style.transform = 'translateY(20px)';
     element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 });

 // Responsive adjustments for touch devices
 function handleTouch() {
     if ('ontouchstart' in window) {
         document.body.classList.add('touch-device');
     }
 }
 
 window.addEventListener('DOMContentLoaded', handleTouch);