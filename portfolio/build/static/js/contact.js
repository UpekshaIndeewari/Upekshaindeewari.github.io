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
               'Accept': 'application/json',
               // Add CSRF token if needed (e.g., Laravel)
               // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
            }
         })
            .then(async (response) => {
               const contentType = response.headers.get('content-type');

               // If response is not JSON, throw an error
               if (!contentType || !contentType.includes('application/json')) {
                  const text = await response.text();
                  throw new Error(`Server returned ${response.status}: ${text}`);
               }

               return response.json();
            })
            .then((data) => {
               if (data.success) {
                  document.getElementById("successMessage").textContent = data.message;
                  successAlert.classList.remove("d-none");
                  this.reset();
               } else {
                  throw new Error(data.message || "Form submission failed");
               }
            })
            .catch((error) => {
               console.error("Fetch error:", error);
               document.getElementById("errorMessage").textContent =
                  error.message || "An error occurred while submitting the form";
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