 const toggleBtn = document.getElementById("toggle-btn");
    const signInForm = document.getElementById("signin-form");
    const signUpForm = document.getElementById("signup-form");
    const formTitle = document.getElementById("form-title");
    const formSubtitle = document.getElementById("form-subtitle");

    toggleBtn.addEventListener("click", () => {
      const isSignUpVisible = signUpForm.style.display === "block";
      signUpForm.style.display = isSignUpVisible ? "none" : "block";
      signInForm.style.display = isSignUpVisible ? "block" : "none";
      formTitle.textContent = isSignUpVisible ? "Sign In" : "Sign Up";
      formSubtitle.textContent = isSignUpVisible
        ? "or use your email password"
        : "or use your email for registration";
      toggleBtn.textContent = isSignUpVisible ? "SIGN UP" : "SIGN IN";
    });

    signUpForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const userId = "HMS" + Math.floor(10000 + Math.random() * 90000);
      alert("🎉 Registration Successful!\nYour User ID is: " + userId);
    });