document.getElementById('openForm').addEventListener('click', function() {
    document.getElementById('feedbackForm').classList.toggle('hidden');
});

document.getElementById('newAdmin').addEventListener('change', function() {
    const newAdminDiv = document.getElementById('newAdminNameDiv');
    newAdminDiv.classList.toggle('hidden', this.value !== 'yes');
});

document.getElementById('submitFeedback').addEventListener('click', function() {
    const whatsappUsername = document.getElementById('whatsappUsername').value;
    const favoriteAdmin = document.getElementById('favoriteAdmin').value;
    const suggestions = document.getElementById('suggestions').value;
    const newAdmin = document.getElementById('newAdmin').value;
    const newAdminName = document.getElementById('newAdminName').value;

    const feedback = {
        whatsappUsername,
        favoriteAdmin,
        suggestions,
        newAdmin: newAdmin === 'yes' ? newAdminName : null
    };

    // Sending feedback to email (this part typically requires a backend service)
    fetch('https://example.com/send-feedback', { // Replace with your backend endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
    })
    .then(response => {
        if (response.ok) {
            alert('Feedback submitted successfully!');
        } else {
            alert('Error submitting feedback.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting feedback.');
    });
});
