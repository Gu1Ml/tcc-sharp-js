// /js/core/store.js

export const store = {
  user: {
    id: 1,
    name: "Guilherme",
    avatar: "https://via.placeholder.com/40",
  },
  users: [
    {
      id: 1,
      name: "Guilherme",
      avatar: "https://via.placeholder.com/40",
      posts: [
        { id: 101, content: "Primeiro post do Guilherme!" },
        { id: 102, content: "Explorando a plataforma Sharp." }
      ]
    },
    {
      id: 2,
      name: "Janaina",
      avatar: "https://via.placeholder.com/40",
      posts: [
        { id: 201, content: "Estudando bastante hoje 📚" }
      ]
    }
  ]
};


function saveUsers() {
  localStorage.setItem("sharpUsers", JSON.stringify(store.users));
}

function loadUsers() {
  const saved = localStorage.getItem("sharpUsers");
  store.users = saved ? JSON.parse(saved) : [];
}

// === Autenticação ===

export function login(email, password) {
  const user = store.users.find(
    (u) => u.email === email && u.password === password
  );
  if (user) {
    store.user = { email: user.email, name: user.name };
    localStorage.setItem("sharpUser", JSON.stringify(store.user));
    return true;
  }
  return false;
}

export function register(name, email, password) {
  // impedir duplicado
  if (store.users.some((u) => u.email === email)) {
    return false;
  }
  store.users.push({ name, email, password });
  saveUsers();
  return true;
}

export function logout() {
  store.user = null;
  localStorage.removeItem("sharpUser");
}

export function loadUser() {
  const saved = localStorage.getItem("sharpUser");
  if (saved) {
    store.user = JSON.parse(saved);
  }
  loadUsers();
}