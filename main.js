document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const userId = document.getElementById("user-id");
  const password = document.getElementById("password");
  const resetBtn = document.querySelector('input[type="reset"]');

  if (!form || !userId || !password || !resetBtn) return;

  const showMessage = (message, type = "info") => {
    const msgBox = document.createElement("div");
    msgBox.textContent = message;
    msgBox.style.position = "fixed";
    msgBox.style.top = "20px";
    msgBox.style.left = "50%";
    msgBox.style.transform = "translateX(-50%)";
    msgBox.style.padding = "12px 20px";
    msgBox.style.borderRadius = "6px";
    msgBox.style.fontSize = "1rem";
    msgBox.style.zIndex = "9999";
    msgBox.style.color = "#fff";
    msgBox.style.backgroundColor =
      type === "error" ? "#e74c3c" :
      type === "success" ? "#2ecc71" : "#3498db";
    msgBox.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    document.body.appendChild(msgBox);
    setTimeout(() => msgBox.remove(), 3000);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = userId.value.trim();
    const pass = password.value.trim();

    if (user === "" || pass === "") {
      [userId, password].forEach(input => {
        if (input.value.trim() === "") {
          input.style.borderColor = "#e74c3c";
        }
      });
      showMessage("Please fill in all fields.", "error");
    } else {
      showMessage("Login successful!", "success");
      form.reset();
      [userId, password].forEach(input => input.style.borderColor = "#ccc");
    }
  });

  resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const confirmReset = confirm("Forgot password?\nWould you like to reset your credentials?");
    if (confirmReset) {
      showMessage("Password recovery link sent to your registered email.", "info");
    }
  });

  [userId, password].forEach(input => {
    input.addEventListener("input", () => {
      input.style.borderColor = input.value.trim() !== "" ? "#007BFF" : "#ccc";
    });
    input.addEventListener("focus", () => {
      input.style.outline = "2px solid #007BFF";
    });
    input.addEventListener("blur", () => {
      input.style.outline = "none";
      input.style.borderColor = input.value.trim() !== "" ? "#ccc" : "#ccc";
    });
  });
});
