// Initialize EmailJS
emailjs.init("pfwjcGajXd0cYQ5Oa"); // Your Public Key

// Form Submission
const form = document.getElementById("feedback-form");
const statusDiv = document.getElementById("status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Collect form data
  const formData = {
    user_name: form.name.value,
    user_email: form.email.value,
    user_message: form.message.value,
  };

  // Send email using EmailJS
  emailjs
    .send("service_7ss5tie", "template_gzj8pse", formData)
    .then(
      (response) => {
        statusDiv.textContent = "Feedback sent successfully!";
        statusDiv.style.color = "green";
        form.reset(); // Reset the form
      },
      (error) => {
        statusDiv.textContent = "Failed to send feedback. Please try again.";
        statusDiv.style.color = "red";
        console.error("EmailJS Error:", error);
      }
    );
});
