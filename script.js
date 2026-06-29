document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent standard form submittal page refresh
            event.preventDefault();

            // Collect values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple client-side validation check
            if (!name || !email || !message) {
                showFeedback('Please fill out all fields before submitting.', 'error');
                return;
            }

            // Simulate API request processing
            showFeedback('Sending your message...', 'success');
            
            setTimeout(() => {
                // Success Scenario
                showFeedback(`Thank you, ${name}! Your message has been sent successfully. We will get back to you soon.`, 'success');
                contactForm.reset();
            }, 1500);
        });
    }

    /**
     * Helper function to manage form visual state response
     * @param {string} message - The response text to show
     * @param {string} type - 'success' or 'error'
     */
    function showFeedback(message, type) {
        formFeedback.textContent = message;
        formFeedback.className = `form-feedback ${type}`; // Removes 'hidden' and applies status class
    }
});
