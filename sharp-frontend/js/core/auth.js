// Login
async function logar(emailOuApelido, senha) {
  const endpoint = `Autenticacao/Logar?email_ou_apelido=${encodeURIComponent(emailOuApelido)}&senha=${encodeURIComponent(senha)}`;
  const result = await apiGet(endpoint);
  console.log("Login:", result);
  return result;
}

// Ver usuário logado
async function buscarUsuarioLogado() {
  const result = await apiGet("Autenticacao/BuscarUsuarioLogado");
  console.log("Usuário atual:", result);
  return result;
}

// Logout
async function deslogar() {
  const result = await apiGet("Autenticacao/Deslogar");
  console.log("Logout:", result);
  return result;
}
