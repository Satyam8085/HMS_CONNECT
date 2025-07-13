const toggleBtn = document.getElementById('toggle-btn');
const formTitle = document.getElementById('form-title');
const formSubtitle = document.getElementById('form-subtitle');
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');
const panelHeading = document.getElementById('panel-heading');
const panelText = document.getElementById('panel-text');

let isSignIn = true;

toggleBtn.addEventListener('click', () => {
  isSignIn = !isSignIn;

  if (isSignIn) {
    formTitle.textContent = "Sign In";
    formSubtitle.textContent = "or use your email password";
    signinForm.style.display = "block";
    signupForm.style.display = "none";
    toggleBtn.textContent = "SIGN UP";
    panelHeading.textContent = "Hello, Friend!";
    panelText.textContent = "Register with your personal details to use all of site features";
  } else {
    formTitle.textContent = "Sign Up";
    formSubtitle.textContent = "or use your email for registration";
    signinForm.style.display = "none";
    signupForm.style.display = "block";
    toggleBtn.textContent = "SIGN IN";
    panelHeading.textContent = "Welcome Back!";
    panelText.textContent = "To keep connected with us, please login with your personal info";
  }
});
