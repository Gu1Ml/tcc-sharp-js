// Buscar todos os posts
async function buscarPosts() {
  const result = await apiGet("Post/BuscarTodos");
  console.log("Posts:", result);
  return result;
}

// Criar novo post
async function postar(titulo, texto) {
  const params = new URLSearchParams({ titulo, texto });
  const result = await fetch(`${API_URL}/Post/Postar?${params.toString()}`, {
    method: "POST",
    credentials: "include",
  });
  return result.json();
}
