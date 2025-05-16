document.addEventListener('DOMContentLoaded', function () {
   const text = "Upeksha Indeewari";
   const typedTextElement = document.getElementById('typed-text');
   let i = 0;
   let isDeleting = false;
   let typingSpeed = 100; // Normal typing speed
   const pauseAtEnd = 2000; // Pause at end before deleting (in ms)

   function typeWriter() {
      // If we're typing (not deleting)
      if (!isDeleting && i < text.length) {
         typedTextElement.innerHTML = text.substring(0, i + 1);
         i++;
         typingSpeed = 100; // Normal typing speed
      }
      // If we've finished typing, pause then start deleting
      else if (!isDeleting && i === text.length) {
         isDeleting = true;
         typingSpeed = pauseAtEnd;
      }
      // If we're deleting
      else if (isDeleting && i > 0) {
         typedTextElement.innerHTML = text.substring(0, i - 1);
         i--;
         typingSpeed = 50; // Faster delete speed
      }
      // If we've finished deleting, start typing again
      else {
         isDeleting = false;
         typingSpeed = 100;
      }

      setTimeout(typeWriter, typingSpeed);
   }

   // Start the typing effect
   typeWriter();
});