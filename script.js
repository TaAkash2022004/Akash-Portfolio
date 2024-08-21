<script>
    // Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function () {
        var contactForm = document.getElementById('contact-form');
        var thankYouMessage = document.getElementById('thank-you-message');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the default form submission

            // Create a new FormData object to collect form data
            var formData = new FormData(contactForm);

            // Send the data using Fetch API or XMLHttpRequest
            fetch('submit_form.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Show the thank you message
                thankYouMessage.style.display = 'block';

                // Clear form fields
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    });
</script>
