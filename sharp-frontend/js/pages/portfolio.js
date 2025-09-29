import { store } from "../core/store.js";
import { Navbar } from "../components/navbar.js";

export function PortfolioPage() {
  const user = store.user;

  // Se não logado, mostrar navbar e mensagem
  if (!user) {
    return `
      ${Navbar()}
      <main class="portfolio-container" style="padding:20px;">
        <h1>Faça login para acessar seu portfólio</h1>
      </main>
    `;
  }

  // Usa portfolio salvo no usuário ou mock minimal
  const projects = user.portfolio || [
    {
      title: "Sistema de Hotel (C# + SQL)",
      link: "https://github.com/user/hotel-system",
      techs: "C#, .NET, SQL Server"
    },
    {
      title: "Sharp (Rede Social)",
      link: "https://github.com/Gu1Ml/tcc-sharp-js",
      techs: "JS Vanilla, CSS, HTML"
    }
  ];

  return `
    ${Navbar()}

    <main class="portfolio-container">
      <div class="portfolio-header">
        <h1>Meu Portfólio</h1>
      </div>

      <div class="portfolio-list">
        ${projects.map(p => `
          <article class="portfolio-card">
            <h2>${p.title}</h2>
            <a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.link}</a>
            <h6>Tecnologias: ${p.techs}</h6>
          </article>
        `).join("")}
      </div>
    </main>
  `;
}
