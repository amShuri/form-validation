export function showError(element, errorElement, customError = null) {
  if (customError) {
    errorElement.textContent = customError;
  } else {
    errorElement.textContent = element.validationMessage;
  }

  errorElement.classList.add('active');
}

export function hideError(errorElement) {
  errorElement.textContent = '';
  errorElement.classList.remove('active');
}
