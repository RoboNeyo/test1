// Initialize EmailJS
(function () {
    emailjs.init("pfwjcGajXd0cYQ5Oa"); // Replace with your public key
})();

document.getElementById("feedback-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs.send("service_7ss5tie", "template_gzj8pse", formData)
        .then(function (response) {
            alert("Feedback sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
        }, function (error) {
            alert("Failed to send feedback. Please try again.");
            console.error("FAILED...", error);
        });
});
