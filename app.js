const formContainer = document.querySelector('.form-container')
const formToggleText = document.querySelector('.toggle-form-anchor')
formToggleText.addEventListener('click', () => {
  formContainer.classList.toggle('right-side')
})

const loginBtn = document.querySelector('.submit-btn')
const loginBtnText = document.querySelector('.submit-btn .login-submit-text')
const loadingContainer = document.querySelector('.submit-btn .submit-loading-container')
let loginAttemptSucceeded = false

loginBtn.addEventListener('click', e => {
  e.preventDefault()
  APP.validate()
  
  if (!loginAttemptSucceeded) {
    const inputFields = document.querySelectorAll('.input-field');
    
    let foundMismatch = false
    inputFields.forEach((inputField) => {
      if (inputField.classList.contains('error-visible')) {
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
        inputField.classList.add('error-visible')
        foundMismatch = true
      }
    });
    
    if (!foundMismatch) {
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
      
      loginAttemptSucceeded = true
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
    // let form = document.querySelector('.form-login form')
    const emailField = document.querySelector('.form-login #email')
    const passwordField = document.querySelector('.form-login #pass')
    emailField.addEventListener('input', () => {
      APP.testEmail(emailField)
    })
    passwordField.addEventListener('change', () => {
      updateInputField(emailField, true)
    })
  },
  validate() {
    const emailField = document.getElementById('email')
    const passwordField = document.getElementById('email')
    
  },
  testEmail(emailField) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let isMatch = re.test(emailField.value)
    updateInputField(emailField, isMatch)
  }
}
document.addEventListener('DOMContentLoaded', APP.init)