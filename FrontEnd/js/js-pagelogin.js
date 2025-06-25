
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePassword.textContent = isHidden ? "visibility_off" : "visibility";
});


// Abrir modal ao clicar no link
document.getElementById("forgot-link").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("forgot-modal").style.display = "block";
});

// Fechar modal ao clicar no X
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("forgot-modal").style.display = "none";
});
