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


function setupCheckboxListeners(checkbox, text) {
  checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('checked')
  })
  
  text.addEventListener('click', () => {
    checkbox.click()
  })
}

const newsCheckbox = document.querySelector('.news-checkbox-container .customCheckbox')
const newsCheckboxText = document.querySelector('.news-checkbox-container .news-checkbox-text')
setupCheckboxListeners(newsCheckbox, newsCheckboxText)


const birthDateCheckbox = document.querySelector('.date-of-birth-checkbox-container .customCheckbox')
const birthDateCheckboxText = document.querySelector('.date-of-birth-checkbox-container .date-of-birth-checkbox-text')

birthDateCheckbox.addEventListener('click', () => {
  birthDateCheckbox.classList.toggle('checked')
  const birthDateContainer = document.querySelector('.birth-date')
  birthDateContainer.style.height = birthDateCheckbox.classList.contains('checked') ? '70px' : '18px'
  const birthDateInputContainer = document.querySelector('.birth-date-input-fields')
  birthDateInputContainer.style.opacity = birthDateCheckbox.classList.contains('checked') ? '1' : '0'
})
birthDateCheckboxText.addEventListener('click', () => {
  birthDateCheckbox.click()
})

const genderCheckbox = document.querySelector('.gender-checkbox-container .customCheckbox')
const genderCheckboxText = document.querySelector('.gender-checkbox-container .gender-checkbox-text')
genderCheckbox.addEventListener('click', () => {
  genderCheckbox.classList.toggle('checked')
  const genderDropdown = document.querySelector('.gender-dropdown-options')
  genderDropdown.style.height = genderCheckbox.classList.contains('checked') ? '65px' : '0px'
  genderDropdown.style.paddingTop = genderCheckbox.classList.contains('checked') ? '5px' : '0px'
  genderDropdown.style.opacity = genderCheckbox.classList.contains('checked') ? '1' : '0'
})
genderCheckboxText.addEventListener('click', () => {
    genderCheckbox.click()
})

const passwordGeneratorNumber = document.querySelector(
  '.password-generator-number-checkbox-container .customCheckbox'
)
const passwordGeneratorNumberText = document.querySelector(
  '.password-generator-number-checkbox-container .password-generator-number-checkbox-text'
)
let isNumberChecked = false

passwordGeneratorNumber.addEventListener('click', () => {
  passwordGeneratorNumber.classList.toggle('checked')
  isNumberChecked ? isNumberChecked = false : isNumberChecked = true;
})

passwordGeneratorNumberText.addEventListener('click', () => {
  passwordGeneratorNumber.click()
})

passwordGeneratorNumber.click()

const passwordGeneratorSpecialChar = document.querySelector(
  '.password-generator-specialChar-checkbox-container  .customCheckbox'
)
const passwordGeneratorSpecialCharText = document.querySelector(
  '.password-generator-specialChar-checkbox-container .password-generator-specialChar-checkbox-text'
)
let isSpecialCharChecked = false

passwordGeneratorSpecialChar.addEventListener('click', () => {
  passwordGeneratorSpecialChar.classList.toggle('checked')
  isSpecialCharChecked ? isSpecialCharChecked = false : isSpecialCharChecked = true;
})

passwordGeneratorSpecialCharText.addEventListener('click', () => {
  passwordGeneratorSpecialChar.click()
})

passwordGeneratorSpecialChar.click()

const dropdownOptions = document.querySelector('.gender-dropdown-options')
dropdownOptions.querySelectorAll('div').forEach(div => {
    div.addEventListener('click', () => {
        dropdownOptions.querySelectorAll('div').forEach(innerDiv => {
            innerDiv.classList.remove('selected')
        })
        event.target.classList.add('selected')
    })
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
      
      setTimeout(() => {s
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
      strengthMeter.style.backgroundColor = 'rgba(220, 89, 89, 0.8)'
      break
    
    case 1:
      strengthMeter.style.width = '35%'
      strengthMeter.style.backgroundColor = 'rgba(222, 165, 89, 0.8)'
      break
    
    case 2:
      strengthMeter.style.width = '55%'
      strengthMeter.style.backgroundColor = 'rgba(222, 224, 89, 0.8)'
      break
    
    case 3:
      strengthMeter.style.width = '80%'
      strengthMeter.style.backgroundColor = 'rgba(173, 224, 89, 0.8)'
      break
    
    case 4:
      strengthMeter.style.width = '100%'
      strengthMeter.style.backgroundColor = 'rgba(98, 142, 66, 1)'
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

const passwordGeneratorBtn = document.querySelector('.password-generator-btn')
const dialogBackgroundOverlay = document.querySelector('.password-generator-dialog')
const dialog = document.querySelector('.password-generator-dialog')
const closeBtn = document.querySelector('.password-generator-close')

passwordGeneratorBtn.addEventListener('click', () =>  {
  dialog.style.display = 'block'
  setTimeout(() => {
    dialog.style.opacity = '1'
  }, 250)
})
closeBtn.addEventListener('click', () => {
  dialog.style.opacity = '0'
  setTimeout(() => {
    dialog.style.display = 'none'
  }, 250)
})

function generateNewPassword(inputField, passwordLength, includeNumbers, includeSpecialChars) {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'
  const specialChar = '!@#$%^&*()_+-=[]{}|:,.<>?'
  let allowedChars = lowercase + uppercase
  allowedChars = includeNumbers ? allowedChars + numbers : allowedChars
  allowedChars = includeSpecialChars ? allowedChars + specialChar : allowedChars
  
  let generatedPassword = ''
  while (true) {
      // Generate a new password
      generatedPassword = ''
      
      for (let i = 0; i < passwordLength; i++) {
          const randomIndex = Math.floor(Math.random() * allowedChars.length)
          generatedPassword += allowedChars[randomIndex]
      }
      
      // Check if the password meets the requirements
      if (
          (!includeNumbers || generatedPassword.match(/\d/)) &&
          (!includeSpecialChars || generatedPassword.match(/[!@#$%^&*()_+\-=$$$${}|:,.<>?]/)) &&
          generatedPassword.match(/[a-zA-Z]/)
      ) {
          inputField.value = generatedPassword
          break
      }
  }
}

const regenerateBtn = document.querySelector('.regenerate-btn')
regenerateBtn.addEventListener('click', () => {
  generateNewPassword(
    passGeneratorField,
    rangeInputIndicator.value,
    isNumberChecked,
    isSpecialCharChecked
  )
})

const signUpPassField = document.querySelector('.form-signup #signUpPass')
const signUpPassConfirmField = document.querySelector('.form-signup #signUpPassConfirm')
const pasteToFieldBtn = document.querySelector('.paste-field-btn')
const passGeneratorField = document.querySelector('.password-generator-field')
const rangeInput = document.querySelector('.length-range-input')
const rangeInputIndicator = document.querySelector('.length-range-indicator')

pasteToFieldBtn.addEventListener('click', () => {
  signUpPassField.value = passGeneratorField.value
  signUpPassConfirmField.value = passGeneratorField.value
  closeBtn.click()
  setTimeout(() => {
    rangeInputIndicator.value = '15'
    
    if (!isNumberChecked) {
      passwordGeneratorNumber.click()
    }
    
    if (!isSpecialCharChecked) {
      passwordGeneratorSpecialChar.click()
    }
    
    signUpPassField.dispatchEvent(new Event('input'))
    signUpPassConfirmField.focus()
  }, 250)
})

generateNewPassword(
  passGeneratorField,
  rangeInputIndicator.value,
  true,
  true
) // init
rangeInput.addEventListener('input', () => {
  rangeInputIndicator.value = rangeInput.value
  generateNewPassword(
    passGeneratorField,
    rangeInputIndicator.value,
    isNumberChecked,
    isSpecialCharChecked
  )
})
rangeInputIndicator.addEventListener('input', () => {
  rangeInput.value = rangeInputIndicator.value
})
rangeInputIndicator.addEventListener('blur', function() {
  let value = parseInt(this.value)
  
  if (isNaN(value) || value < 6) {
    this.value = '6'
    rangeInput.value = this.value
  }
  
  if (value > 50) {
    this.value = '50'
    rangeInput.value = this.value
  }
  
  generateNewPassword(
    passGeneratorField,
    rangeInputIndicator.value,
    isNumberChecked,
    isSpecialCharChecked
  )
})

// Phone Field
// 1, 44, 49, 7
const sortedCountryCodes = {
  "1": "United States", //
  "1": "Canada", //
  "20": "Egypt",
  "211": "South Sudan",
  "212": "Morocco",
  "213": "Algeria",
  "216": "Tunisia",
  "218": "Libya",
  "220": "Gambia",
  "221": "Senegal",
  "223": "Mali",
  "224": "Guinea",
  "227": "Niger",
  "228": "Togo",
  "229": "Benin",
  "231": "Liberia",
  "233": "Ghana",
  "234": "Nigeria",
  "235": "Chad",
  "236": "Central African Rep.",
  "237": "Cameroon",
  "241": "Gabon",
  "242": "Congo Rep.",
  "246": "Diego Garcia",
  "249": "Sudan",
  "251": "Ethiopia",
  "252": "Somalia",
  "254": "Kenya",
  "255": "Tanzania",
  "256": "Uganda",
  "260": "Zambia",
  "261": "Madagascar",
  "263": "Zimbabwe",
  "264": "Namibia",
  "265": "Malawi",
  "266": "Lesotho",
  "269": "Comoros",
  "27": "South Africa",
  "297": "Aruba",
  "298": "Faroe Islands",
  "299": "Greenland",
  "30": "Greece",
  "31": "Netherlands",
  "32": "Belgium",
  "33": "France",
  "34": "Spain",
  "351": "Portugal",
  "352": "Luxembourg",
  "353": "Ireland",
  "354": "Iceland",
  "355": "Albania",
  "356": "Malta",
  "358": "Finland",
  "359": "Bulgaria",
  "36": "Hungary",
  "371": "Latvia",
  "373": "Moldova",
  "374": "Armenia",
  "375": "Belarus",
  "377": "Monaco",
  "380": "Ukraine",
  "381": "Serbia",
  "386": "Slovenia",
  "388": "Kosovo",
  "39": "Italy",
  "40": "Romania",
  "41": "Switzerland",
  "420": "Czech Republic",
  "421": "Slovakia",
  "423": "Liechtenstein",
  "43": "Austria", 
  "44": "Ireland", //
  "44": "United Kingdom", //
  "45": "Denmark",
  "46": "Norway",
  "47": "Norway",
  "48": "Poland",
  "49": "Germany", //
  "49": "Sweden", //
  "500": "Falkland Islands",
  "501": "Belize",
  "502": "Guatemala",
  "503": "El Salvador",
  "504": "Honduras",
  "505": "Nicaragua",
  "506": "Costa Rica",
  "507": "Panama",
  "509": "Haiti",
  "51": "Peru",
  "52": "Mexico",
  "53": "Cuba",
  "54": "Argentina",
  "55": "Brazil",
  "56": "Chile",
  "57": "Colombia",
  "58": "Venezuela",
  "591": "Micronesia",
  "593": "Ecuador",
  "594": "French Guiana",
  "595": "Paraguay",
  "596": "Martinique",
  "598": "Uruguay",
  "60": "Malaysia",
  "61": "Australia",
  "62": "Indonesia",
  "63": "Philippines",
  "64": "New Zealand",
  "65": "Singapore",
  "66": "Thailand",
  "677": "Solomon Islands",
  "679": "Fiji",
  "686": "Kiribati",
  "689": "French Polynesia",
  "692": "Marshall Islands",
  "7": "Russian Federation", //
  "7": "Kazakhstan", //
  "81": "Japan",
  "82": "South Korea",
  "84": "Vietnam",
  "850": "North Korea",
  "852": "Hong Kong",
  "855": "Cambodia",
  "856": "Laos",
  "86": "China",
  "880": "Bangladesh",
  "884": "Taiwan",
  "881": "GMSS",
  "888": "Anonymous",
  "90": "Turkey",
  "91": "India",
  "92": "Pakistan",
  "93": "Afghanistan",
  "960": "Maldives",
  "961": "Lebanon",
  "962": "Jordan",
  "964": "Iraq",
  "965": "Kuwait",
  "966": "Saudi Arabia",
  "967": "Yemen",
  "968": "Oman",
  "970": "Palestine",
  "971": "UAE",
  "972": "Israel",
  "973": "Bahrain",
  "974": "Qatar",
  "976": "Mongolia",
  "977": "Nepal",
  "963": "Syria",
  "98": "Iran",
  "992": "Tajikistan",
  "993": "Turkmenistan",
  "994": "Azerbaijan",
  "995": "Georgia",
  "996": "Kyrgyzstan",
  "998": "Uzbekistan"
}

const signUpPhoneIDCField = document.querySelector('.form-signup #signUpPhoneIDC')
const signUpPhoneField = document.querySelector('.form-signup #signUpPhoneNum')
const verticalDivider = document.querySelector('.phone-vertical-divider')
let isInputFocused = false

function showDivider() {
  verticalDivider.style.transition = 'opacity 0.27s 0.2s ease, right 0.27s ease-out'
  verticalDivider.style.opacity = 1
  setTimeout(() => {
    verticalDivider.style.right = '72%'
  }, 100)
  
  // Display the second input
  signUpPhoneField.style.display = 'block'
}

function hideDivider() {
  verticalDivider.style.transition = 'opacity 0.1s ease, right 0.1s ease-out'
  verticalDivider.style.opacity = 0
  verticalDivider.style.right = '60%'
  
  // Hide the second input
  signUpPhoneField.style.display = 'none'
}

function updatePhoneInputLabel(IDC) {
  const placeholder = document.querySelector('.phone-label-placeholder')
  const mainLabel = document.querySelector('.phone-label-main')
  const containerLabels = document.querySelectorAll('.phone-label-container label')
  
  if (IDC === '' || sortedCountryCodes[`${IDC}`] === undefined) {
    placeholder.textContent = 'Phone'
  } else {
    placeholder.textContent = sortedCountryCodes[`${IDC}`]
  }
  
  if (mainLabel.textContent === placeholder.textContent) { return }
  
  containerLabels.forEach(label => {
    label.style.transform = 'translate(0, calc(-50% + 5px))'
  })
  
  // remove the transition and move the labels up
  setTimeout(() => {
    mainLabel.textContent = placeholder.textContent
    containerLabels.forEach(label => {
      label.style.transition = 'color 0.25s ease, font-size 0.25s ease, font-weight 0.25s ease'
      label.style.transform = 'translate(0, calc(-50% - 17.7px))'
    })
  }, 450)
  
  // Restore the transition
  containerLabels.forEach(label => {
    label.style.transition = 'color 0.25s ease, font-size 0.25s ease, font-weight 0.25s ease, transform 0.4s ease'
  })
}

signUpPhoneIDCField.addEventListener('focus', () => {
  isInputFocused = true
  showDivider()
})

signUpPhoneIDCField.addEventListener('blur', () => {
  isInputFocused = false;
  setTimeout(() => {
    if (!isInputFocused && signUpPhoneIDCField.value === '') {
      hideDivider()
    }
  }, 100)
})

signUpPhoneField.addEventListener('focus', () => {
  isInputFocused = true
  showDivider()
})

signUpPhoneField.addEventListener('blur', () => {
  isInputFocused = false;
  setTimeout(() => {
    if (!isInputFocused && signUpPhoneIDCField.value === '') {
      hideDivider()
    }
  }, 100)
})

signUpPhoneField.addEventListener('keydown', () => {
  if (event.key === 'Backspace' && signUpPhoneField.value === '') {
    signUpPhoneIDCField.focus()
  }
})

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
    const signUpPhoneIDCField = document.querySelector('.form-signup #signUpPhoneIDC')
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
    
    signUpPhoneField.addEventListener('input', () => {
      APP.testPhoneNumber(signUpPhoneIDCField, signUpPhoneField)
    })
    
    signUpPhoneIDCField.addEventListener('input', () => {
      let inputValue = signUpPhoneIDCField.value
      
      // Allow only numbers and plus sign
      inputValue = inputValue.replace(/\D/g, '')
      
      // Ensure the value always starts with one plus sign
      if (inputValue === '+') {
        inputValue = ''
      } else {
        if (inputValue.length === 1) {
          inputValue = '+' + inputValue
        } else {
          inputValue = inputValue.slice(0, 4)
        }
      }
      
      if (!inputValue.startsWith('+')) {
        inputValue = '+' + inputValue
      }
      
      if (inputValue === '+') {
        inputValue = ''
      }
      
      signUpPhoneIDCField.value = inputValue
      updatePhoneInputLabel(signUpPhoneIDCField.value.slice(1))
      if (sortedCountryCodes[`${signUpPhoneIDCField.value.slice(1)}`] !== undefined) {
        signUpPhoneField.focus()
      }
    })
    
    // Side Panels
    
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
    
    signUpPhoneIDCField.addEventListener('focus', () => {
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
  },
  testPhoneNumber(IDCField, callingCodeField) {
    if (callingCodeField.value === '') {
      IDCField.parentNode.classList.remove('invalidInput')
      IDCField.parentNode.classList.remove('validInput')
    } else if (
      sortedCountryCodes[`${IDCField.value.slice(1)}`] !== undefined &&
      callingCodeField.value.length > 4
    ) {
      updateInputField(IDCField, true)
    } else {
      updateInputField(IDCField, false)
    }
  }
}
document.addEventListener('DOMContentLoaded', APP.init)

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