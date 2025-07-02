/*****************  RESTANTE DOS SEUS SCRIPTS  ****************/
/* — mantei exatamente como estavam — */
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

if (passwordInput && togglePassword){
  togglePassword.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";
    togglePassword.textContent = isHidden ? "visibility_off" : "visibility";
  });
}

// modal “esqueci a senha”
const forgotLink = document.getElementById("forgot-link");
const forgotModal = document.getElementById("forgot-modal");
const closeModal = document.getElementById("close-modal");

if (forgotLink && forgotModal && closeModal){
  forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    forgotModal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    forgotModal.style.display = "none";
  });
}
