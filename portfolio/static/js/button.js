document.addEventListener('DOMContentLoaded', function () {
   const backToTopBtn = document.getElementById('backToTopBtn');

   // Show button when user scrolls down 200px
   window.addEventListener('scroll', function () {
      if (window.pageYOffset > 200) {
         backToTopBtn.style.display = 'block';
      } else {
         backToTopBtn.style.display = 'none';
      }
   });

   // Smooth scroll to top when clicked
   backToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   });
});