const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;

emailInput.addEventListener("input", function() {
  // Check if the email input matches the regex
  if (emailRegex.test(emailInput.value)) {
    // Clear the error message if the input is valid
    //color the input green
    emailError.textContent = "Correct email address.";
    emailInput.style.borderColor = "green";

  } else {
    // Show an error message if the input is invalid
    emailError.textContent = "Please enter a valid email address.";
  }
});
