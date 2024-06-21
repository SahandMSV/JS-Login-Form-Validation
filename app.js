let isLoggingInMode = true
function formToggle() {
  const container = document.querySelector('.container')
  const formContainer = document.querySelector('.form-container')
  const loginForm = document.querySelector('.form-login')
  const loginFormInfo = document.querySelector('.form-login .login-info')
  const signUpForm = document.querySelector('.form-signup')
  const signUpFormInfo = document.querySelector('.form-signup .signup-info')
  
  if (isLoggingInMode) {
    // returns to default form container transition
    formContainer.style.transform =
      'translateX(calc(-100% + clamp(550px, 50vw, 650px)))'
    formContainer.style.transition = 'transform 0.5s ease'
    setTimeout(() => {
      formContainer.style.transition = 'none'
      formContainer.style.transform = 'none'
      formContainer.style.left = 'auto'
      formContainer.style.right = '0'
    }, 500);
    
    // sign up form appears
    container.style.height = '550px'
    formContainer.classList.add('right-side')
    loginForm.style.transition = 'opacity .35s ease, transform 0.35s ease'
    signUpForm.style.transition = 'opacity .55s .1s ease, transform 0.45s .08s ease'
    loginFormInfo.style.transform = 'translateX(-35%)'
    signUpFormInfo.style.transform = 'translateX(0%)'
    
    isLoggingInMode = false
  } else {
    // removes form container transition
    formContainer.style.transform =
      'translateX(calc(100% - clamp(550px, 50vw, 650px)))'
    formContainer.style.transition = 'transform 0.5s ease'
    setTimeout(() => {
      formContainer.style.transition = 'none'
      formContainer.style.transform = 'none'
      formContainer.style.left = '0'
      formContainer.style.right = 'auto'
    }, 500);
    
    // login form appears
    container.style.height = '500px'
    formContainer.classList.remove('right-side')
    loginForm.style.transition = 'opacity .55s .1s ease, transform 0.45s .08s ease'
    signUpForm.style.transition = 'opacity .35s ease, transform 0.2s ease'
    loginFormInfo.style.transform = 'translateX(0%)'
    signUpFormInfo.style.transform = 'translateX(35%)'
    
    isLoggingInMode = true
  }
}

const passToggleBtns = document.querySelectorAll('.passToggleBtn');

passToggleBtns.forEach((btn) => {
  const passwordInput =
    btn.parentElement.querySelectorAll('input[type="password"]');
  const visibleIcon = btn.querySelector('.visibleIcon');
  const invisibleIcon = btn.querySelector('.invisibleIcon');
  let isPasswordFieldVisible = false;
  
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    passwordInput.forEach((input) => {
      if (isPasswordFieldVisible) {
        input.type = 'password';
        visibleIcon.style.opacity = '1';
        invisibleIcon.style.opacity = '0';
        isPasswordFieldVisible = false;
      } else {
        input.type = 'text';
        visibleIcon.style.opacity = '0';
        invisibleIcon.style.opacity = '1';
        isPasswordFieldVisible = true;
      }
      
      passwordInput.focus();
    });
  });
});


const loginBtn = document.querySelector('.login-submit-btn')
const loginBtnText = document.querySelector('.login-submit-btn .login-submit-text')
const loadingContainer = document.querySelector('.login-submit-btn .submit-loading-container')
let loginAttemptMade = false

loginBtn.addEventListener('click', e => {
  e.preventDefault()
  
  
  if (!loginAttemptMade) {
    const inputFields = document.querySelectorAll('.login-info .input-field');
    
    // handling errors
    let foundMismatch = false
    inputFields.forEach((inputField) => {
      if (inputField.classList.contains('error-visible')) {
        // Error animation on repeated false input
        let errorIcon = inputField.querySelector('.errorIcon')
        errorIcon.classList.add('wobble-animation')
        setTimeout(() => {
          errorIcon.classList.remove('wobble-animation')
        }, 500)
        foundMismatch = true
      } else if (
        inputField.classList.contains('invalidInput') ||
        inputField.firstElementChild.value === ''
      ) {
        // Error animation on first false input
        inputField.classList.add('error-visible')
        foundMismatch = true
      }
    });
    
    // login validation
    if (!foundMismatch && validateLogin()) {
      // Login success button animation
      loginBtnText.style.opacity = 0
      loadingContainer.style.opacity = 1
      loginBtn.classList.add('loading')
      
      setTimeout(() => {
        loginBtnText.innerHTML = 'Login Successful'
        loginBtnText.style.opacity = 1
        loadingContainer.style.opacity = 0
        
        loginBtn.style.width = '170px'
        loginBtn.classList.remove('loading')
        loginBtn.classList.add('success')
      }, 3000)
      
      loginAttemptMade = true
    } else {
      // Login fail button animation
    }
  }
})

function updateInputField(field, state) {
  field = field.parentNode
  if (field.firstElementChild.value === '') {
    field.classList.remove('invalidInput')
    field.classList.remove('validInput')
  } else if (state) {
    field.classList.remove('invalidInput')
    field.classList.add('validInput')
  } else if (!state) {
    field.classList.add('invalidInput')
    field.classList.remove('validInput')
  }
  field.classList.remove('error-visible')
}

const APP = {
  init() {
    APP.addListener()
  },
  addListener() {
    const loginEmailField = document.querySelector('.form-login #loginEmail')
    const loginPasswordField = document.querySelector('.form-login #loginPass')
    const signUpEmailField = document.querySelector('.form-signup #signUpEmail')
    const signUpPassField = document.querySelector('.form-signup #signUpPass')
    const signUpPassConfirmField = document.querySelector('.form-signup #signUpPassConfirm')
    
    loginEmailField.addEventListener('input', () => {
      APP.testEmail(loginEmailField)
    })
    loginPasswordField.addEventListener('input', () => {
      APP.testPassword(loginPasswordField)
    })
  },
  validateLogin() {
    const email = document.getElementById('loginEmail').value
    const password = document.getElementById('loginPass').value
    // check with database
    return true
  },
  validateSignUp() {
    // add to database
  },
  testEmail(emailField) {
    if (emailField.value.length > 22) {
      emailField.style.fontSize = '0.75rem'
    } else if (emailField.value.length > 17) {
      emailField.style.fontSize = '0.88rem'
    } else {
      emailField.style.fontSize = '1.1rem'
    }
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let isMatch = re.test(emailField.value)
    updateInputField(emailField, isMatch)
  },
  testPassword(passField) {
    if (passField.value.length > 3 && passField.value.length < 10) {
      updateInputField(passField, true)
    } else {
      updateInputField(passField, false)
    }
    
    if (passField.value.length > 22) {
      passField.style.fontSize = '0.75rem'
    } else if (passField.value.length > 15) {
      passField.style.fontSize = '0.88rem'
    } else {
      passField.style.fontSize = '1.1rem'
    }
  }
}
document.addEventListener('DOMContentLoaded', APP.init)

// mapping international dialing codes to country names
const sortedCountryCodes = {
  "1": "United States",
  "7": "Ukraine",
  "20": "Egypt",
  "27": "South Africa",
  "30": "Cyprus",
  "33": "Spain",
  "36": "Hungary",
  "39": "Italy",
  "41": "Switzerland",
  "44": "Ireland",
  "44": "United Kingdom",
  "46": "Norway",
  "48": "Poland",
  "49": "Austria", 
  "52": "Colombia",
  "55": "Argentina",
  "58": "Venezuela",
  "60": "Vietnam",
  "61": "New Zealand",
  "62": "Malaysia",
  "63": "Philippines",
  "65": "Singapore",
  "82": "Vietnam",
  "86": "Canada",
  "91": "India",
  "92": "Pakistan",
  "234": "Kenya",
  "255": "Tanzania",
  "351": "Portugal",
  "420": "Czech Republic",
  "501": "Belize",
  "507": "Panama",
  "507": "Panama",
  "213": "Algeria",
  "230": "Mauritius",
  "234": "Ghana",
  "507": "Panama",
  "503": "Portugal",
  "507": "Panama",
  "972": "Israel",
};