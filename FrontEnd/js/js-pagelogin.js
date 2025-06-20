// FrontEnd/js/js-pagelogin.js
async function logar (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });

    const data = await response.json();

    if (data.status === 'sucesso') {
      alert(`Bem-vindo, ${data.nome}`);
      window.location.href = 'modulos.html'; // ou a próxima página
    } else {
      alert('E-mail ou senha inválidos!');
    }
  } catch (error) {
    console.error('Erro no login:', error);
    alert('Erro ao conectar ao servidor.');
  }
}
