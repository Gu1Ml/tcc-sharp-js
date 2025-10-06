async function buscarUsuarios() {
  const result = await apiGet("Usuario/BuscarTodos");
  console.log("Usuários:", result);
  return result;
}

async function buscarUsuarioPorApelido(apelido) {
  const result = await apiGet(`Usuario/BuscarPorApelido?apelido=${encodeURIComponent(apelido)}`);
  console.log("Usuário:", result);
  return result;
}
