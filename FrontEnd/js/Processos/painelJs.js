/*****************  TOGGLE SIDEBAR  ****************/
const sidebar     = document.querySelector('.sidebar');
const toggleBtn   = document.getElementById('ocultar-sidebar');
const logoImg     = document.getElementById('logo-img');

const LOGO_FULL = '/FrontEnd/img/logoelmo.png';
const LOGO_MINI = '/FrontEnd/img/elmoicon.png';

toggleBtn.addEventListener('click', () => {
  // 1) alterna a largura
  sidebar.classList.toggle('close');

  // 2) gira o ícone da seta
  toggleBtn.classList.toggle('rotate');

  // 3) troca a logo
  const collapsed = sidebar.classList.contains('close');
  logoImg.src = collapsed ? LOGO_MINI : LOGO_FULL;
});

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
