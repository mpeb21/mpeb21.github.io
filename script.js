/**
Name: Maria Patricia Espinoza Bueno
Student Number: 157472218
Email: mespinoza-bueno@myseneca.ca
Section: ZDD
*/

// ==================== Code for responsive navbar ====================
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar-nav mr-auto");

// Making the navbar responsive using a menu icon
menu.addEventListener("click", function () {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
});

// The navbar should collapse on small screens when scrolled
window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

// ==================== Form Validation Code ====================
let messages = [];
let address = [];

const form = document.getElementById("contact-form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  messages = [];

  // Calling all the validation functions
  validateName();
  validateEmail();
  validateAddress();
  validateCity();
  validatePostalCode();
  validateMessage();

  // Displaying the errors
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = `
        <h3>Incorrect Inputs Provided:</h3>
        <pre>${messages.join("\r\n")}</pre>
        `;
  }
});

// eslint-disable-next-line no-unused-vars
form.addEventListener("reset", (e) => {
  messages = [];
  errorElement.innerHTML = "";
});

// Validation for the name input
function validateName() {
  const inputName = document.getElementById("name");
  if (nullChecker(inputName, "Name")) {
    areAlphabets(inputName, "- Name should be valid - All characters should be alphabetical");
  }
}

// Validation for email input
function validateEmail() {
  const email = document.getElementById("email");
  if (nullChecker(email, "Email")) {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.value.match(validRegex)) {
      messages.push("- Email Address is Invalid");
    }
  }
}

// Validation for address
function validateAddress() {
  const address = document.getElementById("address");
  if (nullChecker(address, "Address")) {
    if (address.value.length < 10) {
      messages.push("- Address should be atleast 10 characters long");
    }
  }
}

// Validation for city
function validateCity() {
  const city = document.getElementById("city");
  if (nullChecker(city, "City")) {
    areAlphabets(city, "- City should be valid - All characters should be alphabetical");
  }
}

// Validation for postal code
function validatePostalCode() {
  let postalCode = document.getElementById("pCode");
  let validRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  if (!postalCode.value.match(validRegex)) {
    messages.push("- Invalid Postal Code");
  }
}

// Validation for message
function validateMessage() {
  const message = document.getElementById("message");
  if (nullChecker(message, "Message")) {
    if (address.value.length < 10) {
      messages.push("- Message should be atleast 5 characters long");
    }
  }
}

// Ensures that the element is not empty
function nullChecker(element, elementName) {
  let result = true;
  if (element.value === "" || element.value === null) {
    messages.push(`- ${elementName} is required`);
    result = false;
  }

  return result;
}

// Ensures that all the characters in the input field are alphabets
function areAlphabets(element, message) {
  let validRegex = /^[A-Za-z\s]+$/;
  if (!element.value.match(validRegex)) {
    messages.push(message);
  }
}
