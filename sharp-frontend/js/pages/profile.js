import { store } from "../core/store.js";
import { Navbar } from "../components/navbar.js";

export function ProfilePage() {
  const user = store.user || { name: "Usuário Mock", email: "mock@sharp.com", role: "Estudante" };

  const html = `
    ${Navbar()}

    <section class="profile-card">
      <img src="./assets/user-default.png" alt="Foto de perfil" class="profile-pic">
      <h2 id="profile-name">${user.name}</h2>
      <p id="profile-email">${user.email}</p>
      <p id="profile-role">${user.role}</p>
      <button id="edit-btn">Editar Perfil</button>
    </section>

    <section id="edit-form" class="hidden">
      <h3>Editar Perfil</h3>
      <input type="text" id="edit-name" value="${user.name}">
      <input type="email" id="edit-email" value="${user.email}">
      <input type="text" id="edit-role" value="${user.role}">
      <button id="save-btn">Salvar</button>
      <button id="cancel-btn">Cancelar</button>
    </section>
  `;

  setTimeout(() => {
    const editBtn = document.getElementById("edit-btn");
    const saveBtn = document.getElementById("save-btn");
    const cancelBtn = document.getElementById("cancel-btn");
    const editForm = document.getElementById("edit-form");
    const profileCard = document.querySelector(".profile-card");

    editBtn?.addEventListener("click", () => {
      editForm.classList.remove("hidden");
      profileCard.classList.add("hidden");
    });

    saveBtn?.addEventListener("click", () => {
      const updatedUser = {
        name: document.getElementById("edit-name").value,
        email: document.getElementById("edit-email").value,
        role: document.getElementById("edit-role").value
      };
      store.user = updatedUser;
      localStorage.setItem("sharpUser", JSON.stringify(updatedUser));

      document.getElementById("profile-name").textContent = updatedUser.name;
      document.getElementById("profile-email").textContent = updatedUser.email;
      document.getElementById("profile-role").textContent = updatedUser.role;

      editForm.classList.add("hidden");
      profileCard.classList.remove("hidden");
    });

    cancelBtn?.addEventListener("click", () => {
      editForm.classList.add("hidden");
      profileCard.classList.remove("hidden");
    });
  }, 0);

  return html;
}
