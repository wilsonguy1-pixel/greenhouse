document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (event) => {
            // Prevent the browser from automatically refreshing the static page
            event.preventDefault();

            // Grab the user's name
            const userName = document.getElementById('name').value.trim();

            // Display a localized friendly message
            formFeedback.textContent = `Thank you, ${userName}! Your message was successfully received. We'll be in touch soon.`;
            formFeedback.style.display = 'block';
            formFeedback.style.backgroundColor = 'rgba(46, 125, 50, 0.1)';
            formFeedback.style.color = '#2e7d32';
            formFeedback.style.border = '1px solid rgba(46, 125, 50, 0.2)';

            // Clear fields out cleanly
            contactForm.reset();
        });
    }
});
