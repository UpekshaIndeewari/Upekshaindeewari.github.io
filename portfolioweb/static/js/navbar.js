
document.addEventListener('DOMContentLoaded', function () {
   const navbar = document.getElementById('mainNavbar');
   const navLinks = document.querySelectorAll('.nav-link');

   // Scroll event for navbar background
   window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
         navbar.classList.add('scrolled');
      } else {
         navbar.classList.remove('scrolled');
      }

      // Section highlighting logic
      const fromTop = window.scrollY + 100; // Offset for navbar height

      navLinks.forEach(link => {
         const section = document.querySelector(link.hash);

         if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
         ) {
            link.classList.add('active');
         } else {
            link.classList.remove('active');
         }
      });
   });

   // Smooth scrolling for anchor links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.hash).scrollIntoView({
            behavior: 'smooth'
         });
      });
   });
});
