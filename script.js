// JavaScript for Panic Button functionality
document.getElementById("panic-btn").addEventListener("click", function() {
    alert("Panic Button Pressed! Sending emergency alert...");
    
    // Example of location simulation
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        alert("Your current location: Latitude " + latitude + ", Longitude " + longitude);

        // You could send this data to campus security via API (placeholder for now)
        console.log("Sending live location to security...");
    }, function(error) {
        alert("Error getting location. Please try again later.");
    });
});

// Form Validation for Contact Form
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}