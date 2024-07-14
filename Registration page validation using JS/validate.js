function validateRegistrationForm() {
    // Get input field values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var address = document.getElementById("address").value;

    // Regular expressions for validation
    var nameRegex = /^[a-zA-Z]{5,}$/; // Only alphabets with minimum length 5
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/; // At least one uppercase, one digit, one special symbol, and minimum length 8
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email pattern
    var mobileRegex = /^\d{10}$/; // 10 digits only

    // Validation
    if (!nameRegex.test(firstName)) {
        alert("First Name should only contain alphabets and have a minimum length of 5 characters.");
        return false;
    }

    if (!nameRegex.test(lastName)) {
        alert("Last Name should only contain alphabets and have a minimum length of 5 characters.");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Password should have a minimum length of 8 characters and contain at least one uppercase letter, one digit, and one special symbol.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid Email address. Please enter a valid email.");
        return false;
    }

    if (!mobileRegex.test(mobileNumber)) {
        alert("Mobile Number should contain 10 digits only.");
        return false;
    }

    if (address.trim() === "") {
        alert("Address field cannot be empty.");
        return false;
    }

    // If all validations pass, return true
    return true;
}
