import { store } from './store.js';

const routes = {};
const privateRoutes = new Set();
const pageStyles = {}; // associa cada rota a um CSS específico

// ----------------------
// Loader temporário
// ----------------------
function showLoader() {
  const app = document.getElementById('app');
  app.innerHTML = `<div class="loader">Carregando...</div>`;
}

// ----------------------
// Atualiza CSS da página
// ----------------------
function setPageStyle(path) {
  const link = document.getElementById('page-style');
  if (link) link.href = pageStyles[path] || '';
}

// ----------------------
// Renderiza a página com fade-in/fade-out
// ----------------------
function renderPage(path, page) {
  const app = document.getElementById('app');

  // Aplica fade-out
  app.classList.add('fade-out');

  setTimeout(() => {
    // Renderiza conteúdo
    app.innerHTML = page ? page() : `<h1>404 - Página não encontrada</h1>`;

    // Atualiza CSS
    setPageStyle(path);

    // Reseta scroll
    window.scrollTo(0, 0);

    // Remove fade-out para aparecer fade-in
    app.classList.remove('fade-out');
  }, 200); // duração da transição
}

// ----------------------
// Registra uma rota
// ----------------------
export function addRoute(path, handler, cssFile = '', isPrivate = false) {
  routes[path] = handler;
  if (isPrivate) privateRoutes.add(path);
  if (cssFile) pageStyles[path] = cssFile;
}

// ----------------------
// Navegação SPA
// ----------------------
export function navigate() {
  const path = location.hash.slice(1) || '/login';
  const page = routes[path];

  // Rota privada bloqueada se não estiver logado
  if (privateRoutes.has(path) && !store.user) {
    location.hash = '/login';
    return;
  }

  showLoader();            // exibe loader
  renderPage(path, page);  // renderiza página com fade
}

// ----------------------
// Inicializa roteador
// ----------------------
export function initRouter() {
  window.addEventListener('hashchange', navigate);
  navigate();
}

