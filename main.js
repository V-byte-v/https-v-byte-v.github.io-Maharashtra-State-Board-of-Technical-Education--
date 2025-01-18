// Captcha generation
function generateCaptcha() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
}

// Initialize captcha
let currentCaptcha = generateCaptcha();
document.getElementById('captcha-text').innerText = currentCaptcha;

// Refresh captcha
document.getElementById('refresh-captcha').addEventListener('click', () => {
  currentCaptcha = generateCaptcha();
  document.getElementById('captcha-text').innerText = currentCaptcha;
});

// Update input placeholder based on dropdown selection
const optionSelect = document.getElementById('optionSelect');
const inputLabel = document.getElementById('inputLabel');
const inputField = document.getElementById('inputField');

optionSelect.addEventListener('change', () => {
  if (optionSelect.value === 'enrollment') {
    inputLabel.innerText = 'Enrollment Number:';
    inputField.placeholder = 'Enter your enrollment number';
  } else {
    inputLabel.innerText = 'Seat Number:';
    inputField.placeholder = 'Enter your seat number';
  }
});

// Form validation
document.getElementById('resultForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const enteredCaptcha = document.getElementById('captcha-input').value;

  if (enteredCaptcha === currentCaptcha) {
    alert('Form submitted successfully!');
    // Redirect or process result here
  } else {
    alert('Incorrect captcha. Please try again.');
  }
});