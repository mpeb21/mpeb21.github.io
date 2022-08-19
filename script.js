/**
Name: Maria Patricia Espinoza Bueno
Student Number: 157472218
Email: mespinoza-bueno@myseneca.ca
Section: ZDD
*/


// Making the navbar responsive using a menu icon
menu.addEventListener('click', function() {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
});

// The navbar should collapse on small screens when scrolled
window.onscroll = () => {
    navbar.classList.remove('open-menu');
    menu.classList.remove('move');
}

// ==================== Form Validation Code ====================
let messages = [];
const form = document.getElementById('contact-form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    messages = [];

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = `
        <h3>Incorrect Inputs Provided:</h3>
        <pre>${messages.join('\r\n')}</pre>
        `;
    }
})

form.addEventListener('reset', (e) => {
    messages = [];
    errorElement.innerHTML = '';
})

function validateName() {
    const inputName = document.getElementById('name');
    if(nullChecker(inputName, 'Name')) {
        areAlphabets(inputName, '- Name should be valid - All characters should be alphabetical');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    if (nullChecker(email, 'Email')) {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!(email.value.match(validRegex))) {
            messages.push("- Email Address is Invalid");
        }
    }    
}

function validateAddress() {
    const address = document.getElementById('address');
    if (nullChecker(address, 'Address')) {
        if (address.value.length < 10) {
            messages.push("- Address should be atleast 10 characters long");
        }
    }
}

function validateCity() {
    const city = document.getElementById('city');
    if(nullChecker(city, 'City')) {
        areAlphabets(city, '- City should be valid - All characters should be alphabetical');
    }
}

function validatePostalCode() {
    let postalCode = document.getElementById('pCode');
    let validRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (!(postalCode.value.match(validRegex))) {
        messages.push("- Invalid Postal Code");
    }
}

function validateMessage() {
    const message = document.getElementById('message');
    if (nullChecker(message, 'Message')) {
        if (address.value.length < 10) {
            messages.push("- Message should be atleast 5 characters long");
        }
    }
}

function payRateValidation() {
    let payRateInput = document.getElementById('hiring-rate-input');
    if (payRateInput.value <= 0) {
        messages.push("- Enter an appropriate expected hourly pay rate")
    }
}

function nullChecker(element, elementName) {
    result = true;
    if (element.value === '' || element.value == null) {
        messages.push(`- ${elementName} is required`);
        result = false;
    }

    return result;
}

function areAlphabets(element, message) {
    let validRegex = /^[A-Za-z\s]+$/;
    if (!(element.value.match(validRegex))) {
        messages.push(message);
    }
}
