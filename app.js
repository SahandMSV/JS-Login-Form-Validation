// Form switch transitions
let isLoggingInMode = true
let animationInProgress = false
function formToggle() {
  const container = document.querySelector('.container')
  const formContainer = document.querySelector('.form-container')
  const loginForm = document.querySelector('.form-login')
  const loginFormInfo = document.querySelector('.form-login .login-info')
  const loginOtherInfo = document.querySelector('.login-other-info')
  const signUpForm = document.querySelector('.form-signup')
  const signUpFormInfo = document.querySelector('.form-signup .signup-info')
  const signUpOtherInfo = document.querySelector('.signup-other-info')
  
  if (isLoggingInMode && !animationInProgress) {
    // container transitions right
    formContainer.style.transform =
    'translateX(calc(-100% + clamp(550px, 50vw, 650px)))'
    formContainer.style.transition = 'transform 0.5s ease'
    animationInProgress = true
    setTimeout(() => {
      formContainer.style.transition = 'none'
      formContainer.style.transform = 'none'
      formContainer.style.left = 'auto'
      formContainer.style.right = '0'
      animationInProgress = false
    }, 500)
    
    // sign up form appears
    container.style.height = '550px'
    formContainer.classList.add('right-side')
    loginForm.style.transition = 'opacity .35s ease, transform 0.35s ease'
    loginFormInfo.style.transform = 'translateX(-35%)'
    loginOtherInfo.style.opacity = '0'
    signUpForm.style.transition = 'opacity .55s .1s ease, transform 0.45s .08s ease'
    signUpFormInfo.style.transform = 'translateX(0%)'
    signUpOtherInfo.style.opacity = '1'
    
    isLoggingInMode = false
  } else if (!isLoggingInMode && !animationInProgress) {
    // container transitions left
    formContainer.style.transform =
    'translateX(calc(100% - clamp(550px, 50vw, 650px)))'
    formContainer.style.transition = 'transform 0.5s ease'
    animationInProgress = true
    setTimeout(() => {
      formContainer.style.transition = 'none'
      formContainer.style.transform = 'none'
      formContainer.style.left = '0'
      formContainer.style.right = 'auto'
      animationInProgress = false
    }, 500)
    
    // login form appears
    container.style.height = '500px'
    formContainer.classList.remove('right-side')
    loginForm.style.transition = 'opacity .55s .1s ease, transform 0.45s .08s ease'
    loginFormInfo.style.transform = 'translateX(0%)'
    loginOtherInfo.style.opacity = '1'
    signUpForm.style.transition = 'opacity .35s ease, transform 0.2s ease'
    signUpFormInfo.style.transform = 'translateX(35%)'
    signUpOtherInfo.style.opacity = '0'
    
    sidePanelToggle(1)
    isLoggingInMode = true
  }
}

// Password visibility btns
const passToggleBtns = document.querySelectorAll('.passToggleBtn')
passToggleBtns.forEach((btn) => {
  const visibleIcon = btn.parentNode.querySelector('.visibleIcon')
  const invisibleIcon = btn.parentNode.querySelector('.invisibleIcon')
  let isPasswordFieldVisible = false
  
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    const passwordInput =
      btn.parentNode.querySelectorAll('input')
    
    passwordInput.forEach((input) => {
      if (isPasswordFieldVisible) {
        input.type = 'password'
        visibleIcon.style.opacity = '1'
        invisibleIcon.style.opacity = '0'
        isPasswordFieldVisible = false
      } else {
        input.type = 'text'
        visibleIcon.style.opacity = '0'
        invisibleIcon.style.opacity = '1'
        isPasswordFieldVisible = true
      }
      
      if (input.value.length !== 0) {
        input.focus()
        input.setSelectionRange(input.value.length, input.value.length)
      } else {
        btn.blur()
      }
    })
  })
})


const receiveNewsText = document.querySelector('.receive-news-text')
receiveNewsText.addEventListener('click', () => {
  checkbox.click()
})

const checkbox = document.querySelector('.customCheckbox')
checkbox.addEventListener('click', () => {
  checkbox.classList.toggle('checked')
})

// Sign-up form side panel action
function sidePanelToggle(key) {
  const sidePanelContainer =
    document.querySelector('.signup-other-info-side-panel')
  const sidePanelSlides =
    document.querySelectorAll('.signup-other-info-side-panel > div')
  
  sidePanelSlides.forEach((panel, index) => {
    if (index + 1 == key) {
      panel.style.opacity = 1
    } else {
      panel.style.opacity = 0
    }
  })
  
  switch (key) {
    case 1:
      sidePanelContainer.style.transform = 'translateX(-0%)'
      break
    
    case 2:
      sidePanelContainer.style.transform = 'translateX(-25%)'
      break
    
    case 3:
      sidePanelContainer.style.transform = 'translateX(-50%)'
      break
    
    case 4:
      sidePanelContainer.style.transform = 'translateX(-75%)'
      break
  }
}

// Login btn action
const loginBtn = document.querySelector('.login-submit-btn')
const loginBtnText = document.querySelector('.login-submit-btn .login-submit-text')
const loginLoadingContainer = document.querySelector('.login-submit-btn .submit-loading-container')
let loginAttemptSuccess = false
loginBtn.addEventListener('click', e => {
  e.preventDefault()
  
  if (!loginAttemptSuccess) {
    const inputFields = document.querySelectorAll('.login-info .input-field')
    
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
    })
    
    // login validation
    if (!foundMismatch && APP.validateLogin()) {
      // Login success button animation
      loginBtnText.style.opacity = 0
      loginLoadingContainer.style.opacity = 1
      loginBtn.classList.add('loading')
      
      setTimeout(() => {
        loginBtnText.innerHTML = 'Login Successful'
        loginBtnText.style.opacity = 1
        loginLoadingContainer.style.opacity = 0
        
        loginBtn.style.width = '170px'
        loginBtn.classList.remove('loading')
        loginBtn.classList.add('success')
      }, 3000)
      
      loginAttemptSuccess = true
    } else {
      // Login fail button animation
    }
  }
})

// Sign-up btn action
const signupBtn = document.querySelector('.signup-submit-btn')
const signupBtnText = document.querySelector('.signup-submit-btn .signup-submit-text')
const signupLoadingContainer = document.querySelector('.signup-submit-btn .submit-loading-container')
let signupAttemptSuccess = false
signupBtn.addEventListener('click', e => {
  e.preventDefault()
  
  if (!signupAttemptSuccess) {
    const inputFields = document.querySelectorAll('.signup-info .input-field')
    
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
    })
    
    // sign-up validation
    if (!foundMismatch && APP.validateSignUp()) {
      // sign-up success button animation
      signupBtnText.style.opacity = 0
      signupLoadingContainer.style.opacity = 1
      signupBtn.classList.add('loading')
      
      setTimeout(() => {
        signupBtnText.innerHTML = 'Sign-Up Successful'
        signupBtnText.style.opacity = 1
        signupLoadingContainer.style.opacity = 0
        
        signupBtn.style.width = '200px'
        signupBtn.classList.remove('loading')
        signupBtn.classList.add('success')
      }, 3000)
      
      signupAttemptSuccess = true
    } else {
      // sign-up fail button animation
    }
  }
  }
)

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

const paragraphs = []
const checkIcons = []
const crossIcons = []

const allParagraphs = document.querySelectorAll('.password-dependencies p')
const iconContainers = document.querySelectorAll('.password-dependencies .password-dependencies-icon-container')

allParagraphs.forEach((paragraph) => {
    paragraphs.push(paragraph.textContent.trim())
})

iconContainers.forEach((iconContainer) => {
    const checkIcon = iconContainer.querySelector('.check-icon')
    const crossIcon = iconContainer.querySelector('.cross-icon')
    
    if (checkIcon) {
        checkIcons.push(checkIcon)
    }
    
    if (crossIcon) {
        crossIcons.push(crossIcon)
    }
})

function updatePasswordStrengthIndicator() {
  const strengthMeter = document.querySelector('.strength-range')
  
  let correctCount = 0
  
  crossIcons.forEach((icon) => {
    if (icon.style.opacity === '0') {
      correctCount++
    }
  })
  
  switch (correctCount) {
    case 0:
      strengthMeter.style.width = '15%'
      strengthMeter.style.backgroundColor = 'rgb(199, 71, 71)'
      break
    
    case 1:
      strengthMeter.style.width = '35%'
      strengthMeter.style.backgroundColor = 'rgb(214, 108, 66)'
      break
    
    case 2:
      strengthMeter.style.width = '55%'
      strengthMeter.style.backgroundColor = 'rgb(199, 172, 0)'
      break
    
    case 3:
      strengthMeter.style.width = '80%'
      strengthMeter.style.backgroundColor = 'rgb(124, 161, 63)'
      break
    
    case 4:
      strengthMeter.style.width = '100%'
      strengthMeter.style.backgroundColor = 'rgb(98, 142, 66)'
      break
    
    default:
      break
  }
}

function updatePasswordStrength(str) {
  if (str.length <= 3) {
    crossIcons.forEach((crossIcon) => {
      crossIcon.style.opacity = 1
      crossIcon.style.fill = 'rgb(43, 58, 103)'
    })
    
    checkIcons.forEach((checkIcon) => {
        checkIcon.style.opacity = 0
    })
    updatePasswordStrengthIndicator()
    return
  }
  
  const requirements = [
    /[A-Z]/,  // Uppercase letters
    /[a-z]/,  // Lowercase letters
    /\d/,     // Numbers
    /[^\w\s]/ // Special characters
  ]
  
  requirements.forEach((re, i) => {
    if (re.test(str)) {
      checkIcons[i].style.opacity = 1
      crossIcons[i].style.opacity = 0
    } else {
      checkIcons[i].style.opacity = 0
      crossIcons[i].style.opacity = 1
      crossIcons[i].style.fill = 'rgb(197, 71, 71)'
    }
  })
  
  updatePasswordStrengthIndicator()
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
    const signUpPhoneField = document.querySelector('.form-signup #signUpPhoneNum')
    
    loginEmailField.addEventListener('input', () => {
      APP.testEmail(loginEmailField)
    })
    
    loginPasswordField.addEventListener('input', () => {
      APP.testPassword(loginPasswordField)
    })
    
    signUpEmailField.addEventListener('input', () => {
      APP.testEmail(signUpEmailField)
    })
    
    signUpPassField.addEventListener('input', () => {
      APP.testPassword(signUpPassField)
      updatePasswordStrength(signUpPassField.value)
      APP.testPassConfirm(signUpPassField, signUpPassConfirmField)
    })
    
    signUpPassConfirmField.addEventListener('input', () => {
      APP.testPassConfirm(signUpPassField, signUpPassConfirmField)
    })
    
    
    signUpEmailField.addEventListener('focus', () => {
      sidePanelToggle(1)
    })
    
    signUpPassField.addEventListener('focus', () => {
      sidePanelToggle(2)
    })
    
    signUpPassConfirmField.addEventListener('focus', () => {
      sidePanelToggle(3)
    })
    
    signUpPhoneField.addEventListener('focus', () => {
      sidePanelToggle(4)
    })
  },
  validateLogin() {
    const email = document.getElementById('loginEmail').value
    const password = document.getElementById('loginPass').value
    // check with database
    return true
  },
  validateSignUp() {
    const email = document.getElementById('loginEmail').value
    const password = document.getElementById('loginPass').value
    // const dateOfBirth = 
    // const gender = 
    // const region = 
    // const phoneNum = 
    // add to database
    return true
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
    if (passField.value.length > 3 && passField.value.length < 256) {
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
  },
  testPassConfirm(passField, passConfirmField) {
    if (passField.value === passConfirmField.value) {
      updateInputField(passConfirmField, true)
    } else {
      updateInputField(passConfirmField, false)
    }
    
    if (passConfirmField.value.length > 22) {
      passConfirmField.style.fontSize = '0.75rem'
    } else if (passConfirmField.value.length > 15) {
      passConfirmField.style.fontSize = '0.88rem'
    } else {
      passConfirmField.style.fontSize = '1.1rem'
    }
  }
}
document.addEventListener('DOMContentLoaded', APP.init)

// Mapping international dialing codes to country names
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
  "972": "Israel"
}

// date of birth inputs

const currentDate = new Date()
const currentDay = currentDate.getDate()
const currentMonth = currentDate.getMonth() + 1
const currentYear = currentDate.getFullYear()

const yearIndicatorUp = document.querySelector('.date-input-container:nth-child(3) > .dateArrowUp')
const yearInput = document.querySelector('.date-input-container:nth-child(3) > input')
const yearIndicatorDown = document.querySelector('.date-input-container:nth-child(3) > .dateArrowDown')

const monthIndicatorUp = document.querySelector('.date-input-container:nth-child(2) > .dateArrowUp')
const monthInput = document.querySelector('.date-input-container:nth-child(2) > input')
const monthIndicatorDown = document.querySelector('.date-input-container:nth-child(2) > .dateArrowDown')
let selectedMonthIndex = 0

const dayIndicatorUp = document.querySelector('.date-input-container:nth-child(1) > .dateArrowUp')
const dayInput = document.querySelector('.date-input-container:nth-child(1) > input')
const dayIndicatorDown = document.querySelector('.date-input-container:nth-child(1) > .dateArrowDown')

function updateYearInput() {
  if (yearInput.value > currentYear) {
    yearInput.value = currentYear
    yearIndicatorUp.classList.add('disable')
  } else if (yearInput.value < currentYear - 100 || isNaN(yearInput.value)) {
    yearInput.value = currentYear - 100
    yearIndicatorDown.classList.add('disable')
  }
  
  yearIndicatorUp.classList.toggle('disable', parseInt(yearInput.value) === currentYear)
  yearIndicatorDown.classList.toggle('disable', parseInt(yearInput.value) === currentYear - 100)
}

yearInput.addEventListener('change', () => {
  updateYearInput()
  updateDayInput()
})

yearIndicatorUp.addEventListener('click', () => {
  if (!yearIndicatorUp.classList.contains('disable')) {
    yearInput.value = parseInt(yearInput.value) + 1
    updateYearInput()
  }
})

yearIndicatorDown.addEventListener('click', () => {
  if (!yearIndicatorDown.classList.contains('disable')) {
    yearInput.value = parseInt(yearInput.value) - 1
    updateYearInput()
  }
})

yearInput.value = currentYear
updateYearInput()



function updateMonthInput() {
  const date = new Date(yearInput.value, selectedMonthIndex, 1)
  monthInput.value = date.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  monthIndicatorUp.classList.toggle('disable', selectedMonthIndex === 11)
  monthIndicatorDown.classList.toggle('disable', selectedMonthIndex === 0)
  updateDayInput()
}

monthInput.addEventListener('change', () => {
  const daysInMonth = getDaysInMonth()
  if (dayInput.value > daysInMonth) {
    dayInput.value = daysInMonth
    dayIndicatorUp.classList.add('disable')
  } else if (dayInput.value < 1 || isNaN(dayInput.value)) {
    dayInput.value = 1
    dayIndicatorDown.classList.add('disable')
  }
})

monthIndicatorUp.addEventListener('click', () => {
  if (selectedMonthIndex < 11) {
    selectedMonthIndex++
    updateMonthInput()
  }
})

monthIndicatorDown.addEventListener('click', () => {
  if (selectedMonthIndex > 0) {
    selectedMonthIndex--
    updateMonthInput()
  }
})

selectedMonthIndex = currentMonth - 1
const date = new Date(yearInput.value, selectedMonthIndex, 1)
monthInput.value = date.toLocaleString('en-US', { month: 'short' }).toUpperCase()



function getDaysInMonth() {
  return new Date(yearInput.value, selectedMonthIndex + 1, 0).getDate()
}

function updateDayInput() {
  const daysInMonth = getDaysInMonth()
  if (dayInput.value > daysInMonth) {
    dayInput.value = daysInMonth
    dayIndicatorUp.classList.add('disable')
  } else if (dayInput.value < 1 || isNaN(dayInput.value)) {
    dayInput.value = 1
    dayIndicatorDown.classList.add('disable')
  }
  
  dayIndicatorUp.classList.toggle('disable', parseInt(dayInput.value) === daysInMonth)
  dayIndicatorDown.classList.toggle('disable', parseInt(dayInput.value) === 1)
}

dayInput.addEventListener('change', () => {
  updateDayInput()
})

dayIndicatorUp.addEventListener('click', () => {
  if (!dayIndicatorUp.classList.contains('disable')) {
    dayInput.value = parseInt(dayInput.value) + 1
    updateDayInput()
  }
})

dayIndicatorDown.addEventListener('click', () => {
  if (!dayIndicatorDown.classList.contains('disable')) {
    dayInput.value = parseInt(dayInput.value) - 1
    updateDayInput()
  }
})

dayInput.value = currentDay
updateDayInput()