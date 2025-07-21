// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

window.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const toggleBtn = document.getElementById("toggle-btn");
  const signInForm = document.getElementById("signin-form");
  const signUpForm = document.getElementById("signup-form");
  const formTitle = document.getElementById("form-title");
  const formSubtitle = document.getElementById("form-subtitle");
  const switchToSignUp = document.getElementById("switch-to-signup");
  const switchToSignIn = document.getElementById("switch-to-signin");

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

  switchToSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
    formTitle.textContent = "Sign Up";
    formSubtitle.textContent = "or use your email for registration";
    toggleBtn.textContent = "SIGN IN";
  });

  switchToSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
    formTitle.textContent = "Sign In";
    formSubtitle.textContent = "or use your email password";
    toggleBtn.textContent = "SIGN UP";
  });

  // Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyC8NCr9iaSL2R-IEwY_M8tH0dbfEW4IyMA",
    authDomain: "hms-login-7f801.firebaseapp.com",
    projectId: "hms-login-7f801",
    storageBucket: "hms-login-7f801.appspot.com",
    messagingSenderId: "780053943142",
    appId: "1:780053943142:web:9abae4d12badf6c8946ea7",
    measurementId: "G-NBHL20KWEG",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  // Sign In
  const signInButton = document.getElementById("signin-button");
  signInButton.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("signin-email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("✅ Sign In Successful!\nWelcome, " + user.email + "!");
      })
      .catch((error) => {
        alert("❌ Error: " + error.message);
      });
  });

  // Sign Up
  const signUpButton = document.getElementById("signup-button");
  signUpButton.addEventListener("click", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userId = "HMS" + Math.floor(10000 + Math.random() * 90000);
        alert(`🎉 Registration Successful!\nWelcome, ${fullName}!\nYour User ID is: ${userId}`);
        signUpForm.reset();
      })
      .catch((error) => {
        alert("❌ Error: " + error.message);
      });
  });
});
