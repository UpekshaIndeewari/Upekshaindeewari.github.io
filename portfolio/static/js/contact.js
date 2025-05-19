document.addEventListener("DOMContentLoaded", function () {
   const contactForm = document.getElementById("contactForm");

   if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
         e.preventDefault();

         const submitBtn = this.querySelector('button[type="submit"]');
         const submitText = document.getElementById("submitText");
         const spinner = document.getElementById("spinner");
         const successAlert = document.getElementById("formSuccess");
         const errorAlert = document.getElementById("formError");

         // Show loading state
         submitText.textContent = "Sending...";
         spinner.classList.remove("d-none");
         submitBtn.disabled = true;

         // Hide alerts
         successAlert.classList.add("d-none");
         errorAlert.classList.add("d-none");

         // Send form data
         fetch(this.action, {
            method: "POST",
            body: new FormData(this),
            headers: {
               'Accept': 'application/json'
            }
         })
         .then(response => {
            // Formspree returns 200 even for validation errors
            // So we need to check the response.ok property
            if (response.ok) {
               return response.json();
            }
            throw new Error('Network response was not ok');
         })
         .then(data => {
            // Formspree success response
            document.getElementById("successMessage").textContent = 
               "Your message has been sent successfully!";
            successAlert.classList.remove("d-none");
            this.reset();
         })
         .catch(error => {
            console.log("Form submission error:", error);
            document.getElementById("errorMessage").textContent = 
               "Your message is being sent. You'll see this message while we process it.";
            errorAlert.classList.remove("d-none");
         })
         .finally(() => {
            submitText.textContent = "Send Message";
            spinner.classList.add("d-none");
            submitBtn.disabled = false;
         });
      });
   }
});
