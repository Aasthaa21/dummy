// Function to show the pop-up when the "Accept & Continue Loving You ❤️" button is clicked
function showPopUp() {
    document.getElementById("popup").style.display = "block"; // Show the popup
}

// Function to close the pop-up when the "Yes" button is clicked
function closePopUp() {
    document.getElementById("popup").style.display = "none"; // Hide the popup
}

// Function to handle when "Absolutely" is clicked
function acceptValentine() {
    alert("You’ve accepted my Valentine! ❤️"); // Display a confirmation message
    closePopUp(); // Hide the popup after clicking "Absolutely"
}
