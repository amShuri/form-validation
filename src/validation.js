import { showError, hideError } from './utility.js';

const email = document.querySelector('#mail');
const emailError = document.querySelector('#mail + span');
email.addEventListener('blur', () => {
  if (email.validity.valid) {
    hideError(emailError);
  } else {
    showError(email, emailError);
  }
});

const country = document.querySelector('#country');
const countryError = document.querySelector('#country + span');
country.addEventListener('blur', () => {
  if (country.validity.valid) {
    hideError(countryError);
  } else {
    showError(country, countryError);
  }
});

const zipCode = document.querySelector('#zip-code');
const zipCodeError = document.querySelector('#zip-code + span');
zipCode.addEventListener('blur', () => {
  if (zipCode.validity.valid) {
    hideError(zipCodeError);
  } else {
    showError(zipCode, zipCodeError);
  }
});

const password = document.querySelector('#password');
const passwordError = document.querySelector('#password + span');
const confirmPassword = document.querySelector('#confirm-password');
const confirmPasswordError = document.querySelector('#confirm-password + span');
password.addEventListener('blur', () => {
  if (password.validity.valid) {
    hideError(passwordError);
  } else {
    showError(password, passwordError);
  }

  if (confirmPassword.value !== password.value) {
    showError(confirmPassword, confirmPasswordError, 'Passwords do not match.');
  } else {
    hideError(confirmPasswordError);
  }
});

confirmPassword.addEventListener('blur', () => {
  if (confirmPassword.value !== password.value) {
    showError(confirmPassword, confirmPasswordError, 'Passwords do not match.');
  } else {
    hideError(confirmPasswordError);
  }
});

const form = document.querySelector('form');
const formError = document.querySelector('form + span');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    formError.textContent =
      'Please fill out every field correctly before submitting the form.';
    formError.classList.add('active');
  } else {
    formError.textContent = 'YAY! You did it!';
    formError.classList.remove('active');
  }
});
