import { register, login } from '../core/store.js';

export function SignupPage() {
  function onSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (register(name, email, password)) {
      // login automático após cadastro
      login(email, password);
      location.hash = "/feed";
    } else {
      alert("Email já cadastrado!");
    }
  }

  setTimeout(() => {
    const form = document.getElementById("signup-form");
    form.addEventListener("submit", onSubmit);
  });

  return `
    <main style="padding: 20px;">
      <h1>Cadastro Sharp</h1>
      <form id="signup-form">
        <input id="name" type="text" placeholder="Nome" required /><br/><br/>
        <input id="email" type="email" placeholder="Email" required /><br/><br/>
        <input id="password" type="password" placeholder="Senha" required /><br/><br/>
        <button type="submit">Cadastrar</button>
      </form>
      <p>Já possui conta? <a href="#/login">Faça login</a></p>
    </main>
  `;
}
