
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form data
    const name = document.getElementById('name').value;
    const format = document.getElementById('format').value;

    // Create a response message
    const responseMessage = `Thank you, ${name}! You have successfully registered for the Book in ${format} format.`;
    
    // Display the response message in the modal
    document.getElementById('modalMessage').innerText = responseMessage;
    
    // Show the modal
    document.getElementById('thankYouModal').style.display = 'block';
    
    // Optionally, clear the form fields
    this.reset();
});
// Close the modal when clicking on <span> (x)
document.querySelector('.close').onclick = function() {
    document.getElementById('thankYouModal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('thankYouModal')) {
        document.getElementById('thankYouModal').style.display = 'none';
    }
}
