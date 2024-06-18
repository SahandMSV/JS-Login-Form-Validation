const loginBtn = document.querySelector('.submit-btn')
const loginBtnText = document.querySelector('.submit-btn .login-submit-text')
const loadingContainer = document.querySelector('.submit-btn .submit-loading-container')
let loginAttempt = false

loginBtn.addEventListener('click', e => {
  e.preventDefault()
  
  if (!loginAttempt) {
    loginAttempt = true
    
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
  }
})