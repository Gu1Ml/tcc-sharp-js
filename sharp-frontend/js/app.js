import { initRouter, addRoute } from './core/router.js';
import { loadUser } from './core/store.js';
import { LoginPage } from './pages/login.js';
import { SignupPage } from './pages/signup.js';
import { FeedPage } from './pages/feed.js';
import { ProfilePage } from './pages/profile.js';
import { SettingsPage } from './pages/settings.js';

// Carregar usuário e lista de usuários
loadUser();

// Registrar rotas
addRoute('/login', LoginPage, './css/login.css');
addRoute('/signup', SignupPage, './css/login.css');
addRoute('/feed', FeedPage, './css/feed.css', true);
addRoute('/profile', ProfilePage, './css/profile.css', true);
addRoute('/settings', SettingsPage, './css/settings.css', true);

// Inicializar roteador
initRouter();
