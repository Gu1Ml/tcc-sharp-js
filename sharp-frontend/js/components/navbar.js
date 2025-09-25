import { logout } from '../core/store.js';

export function Navbar() {
  setTimeout(() => {
    const btn = document.getElementById("logout-btn");
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        logout();
        location.hash = "/login";
      });
    }
  });

  return `
    <nav class="navbar">
      <div class="navbar-logo">
        <span class="logo">#</span> Sharp
      </div>
      <ul class="navbar-links">
        <li><a href="#/feed">Feed</a></li>
        <li><a href="#/profile">Perfil</a></li>
        <li><a href="#/settings">Configurações</a></li>
        <li><a href="#/login" id="logout-btn">Sair</a></li>
      </ul>
    </nav>
  `;
}
