import { store } from "../core/store.js";
import { Navbar } from "../components/navbar.js";
import { postCard } from '../components/postCard.js';

export function FeedPage() {
  const user = store.user || { name: "Usuário Mock" };

  let posts = store.posts || [
    { user: "Guilherme", content: "Primeiro post meu!", date: "24/09/2025" },
    { user: "Janaina", content: "Post de outro usuário", date: "24/09/2025" },
    { user: "Marcos", content: "Mais um post de outro", date: "24/09/2025" }
  ];

  const meusPosts = posts.filter(p => p.user === user.name);
  const outrosPosts = posts.filter(p => p.user !== user.name);

  const html = `
    ${Navbar()}

    <section id="create-post" class="create-post">
      <textarea id="post-content" placeholder="O que você está pensando?"></textarea>
      <button id="post-btn">Publicar</button>
    </section>

    <section id="my-posts" class="posts-section">
      <h2>Meus posts</h2>
      ${meusPosts.map(p => `
        <div class="post">
          <h3>${p.user}</h3>
          <p>${p.content}</p>
          <small>${p.date}</small>
        </div>
      `).join("")}
    </section>

    <section id="other-posts" class="posts-section">
      <h2>Posts de outros usuários</h2>
      ${outrosPosts.map(p => `
        <div class="post">
          <h3>${p.user}</h3>
          <p>${p.content}</p>
          <small>${p.date}</small>
        </div>
      `).join("")}
    </section>
  `;

  setTimeout(() => {
    const postBtn = document.getElementById("post-btn");
    const postContent = document.getElementById("post-content");
    const myPostsContainer = document.getElementById("my-posts");

    postBtn?.addEventListener("click", () => {
      const content = postContent.value.trim();
      if (!content) return;

      const newPost = {
        user: user.name,
        content,
        date: new Date().toLocaleDateString("pt-BR")
      };

      posts.unshift(newPost);
      store.posts = posts;
      localStorage.setItem("sharpPosts", JSON.stringify(posts));
      postContent.value = "";

      const meusPostsAtualizados = posts.filter(p => p.user === user.name);
      myPostsContainer.innerHTML = `
        <h2>Meus posts</h2>
        ${meusPostsAtualizados.map(p => `
          <div class="post">
            <h3>${p.user}</h3>
            <p>${p.content}</p>
            <small>${p.date}</small>
          </div>
        `).join("")}
      `;
    });
  }, 0);

  return html;
}