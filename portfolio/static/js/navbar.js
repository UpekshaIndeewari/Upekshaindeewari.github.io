document.addEventListener('DOMContentLoaded', function () {
   const navbar = document.getElementById('mainNavbar');
   const navLinks = document.querySelectorAll('.nav-link');
   const navbarToggler = document.querySelector('.navbar-toggler');

   // Handle navbar expand/collapse state
   navbarToggler.addEventListener('click', function () {
      navbar.classList.toggle('navbar-expanded');
   });

   // Close navbar when clicking a link (for mobile)
   navLinks.forEach(link => {
      link.addEventListener('click', function () {
         if (window.innerWidth <= 992) { // Same as Bootstrap's lg breakpoint
            navbarToggler.click(); // Simulate click to close menu
         }
      });
   });

   // Scroll event for navbar background (desktop only)
   if (window.innerWidth > 992) {
      window.addEventListener('scroll', function () {
         if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
         } else {
            navbar.classList.remove('scrolled');
         }
      });
   }

   // Section highlighting logic
   window.addEventListener('scroll', function () {
      const fromTop = window.scrollY + 100; // Offset for navbar height

      navLinks.forEach(link => {
         const section = document.querySelector(link.hash);
         if (section &&
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop) {
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
         const target = document.querySelector(this.hash);
         if (target) {
            target.scrollIntoView({
               behavior: 'smooth'
            });
         }
      });
   });

   // Track mobile menu state
   let isMenuOpen = false;

   // Handle scroll events
   window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
         navbar.classList.add('scrolled');
      } else if (!isMenuOpen) { // Only remove if menu isn't open
         navbar.classList.remove('scrolled');
      }
   });

   // Handle menu toggle
   navbarToggler.addEventListener('click', function () {
      isMenuOpen = !isMenuOpen;
      navbar.classList.toggle('menu-open', isMenuOpen);

      // Force black background when menu is open
      if (isMenuOpen) {
         navbar.classList.add('scrolled');
      } else if (window.scrollY <= 10) {
         navbar.classList.remove('scrolled');
      }
   });

   // Close menu when clicking links (mobile)
   document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function () {
         if (window.innerWidth <= 992) {
            navbarToggler.click();
         }
      });
   });

   // Initialize state
   if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
   }

   // Sections to observe (add all your sections here)
   const sections = [
      { id: 'home', name: 'home' },
      { id: 'about', name: 'about' },
      { id: 'resume', name: 'resume' },
      { id: 'skills', name: 'skills' },
      { id: 'certificates', name: 'certificates' },
      { id: 'projects', name: 'projects' },
      { id: 'contact', name: 'contact' }
   ];

   // Create Intersection Observer
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            // Only update URL if the section is in our list
            if (sections.some(section => section.id === sectionId)) {
               updateUrlHash(sectionId);
            }
         }
      });
   }, {
      threshold: 0.5,
      rootMargin: '0px 0px -50% 0px' // Adjust this to trigger at the right scroll position
   });

   // Observe all sections
   sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
         observer.observe(element);
      }
   });

   // Handle initial hash
   if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const targetSection = document.getElementById(hash);
      if (targetSection) {
         setTimeout(() => {
            targetSection.scrollIntoView();
         }, 100);
      }
   }

   // Function to update URL hash
   function updateUrlHash(hash) {
      if (history.pushState) {
         const newUrl = window.location.pathname + '#' + hash;
         window.history.pushState(null, null, newUrl);
      } else {
         window.location.hash = '#' + hash;
      }
   }

   // Optional: Add click handler for nav links to prevent double hash
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
         if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            updateUrlHash(targetId.substring(1));
         }
      });
   });


});
