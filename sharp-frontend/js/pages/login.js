import { login } from '../core/store.js';

export function LoginPage() {
  function onSubmit(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (login(email, password)) {
      location.hash = "/feed";
    } else {
      alert("Credenciais inválidas!");
    }
  }

  setTimeout(() => {
    const form = document.getElementById("login-form");
    form.addEventListener("submit", onSubmit);
  });

  return `
    <main style="padding: 20px;">
      <h1>Login Sharp</h1>
      <form id="login-form">
        <input id="email" type="email" placeholder="Email" required /><br/><br/>
        <input id="password" type="password" placeholder="Senha" required /><br/><br/>
        <button type="submit">Entrar</button>
      </form>
      <p>Não possui conta? <a href="#/signup">Cadastre-se</a></p>
    </main>
  `;
}
