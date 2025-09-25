import { Navbar } from '../components/navbar.js';

export function SettingsPage() {
  return `
    ${Navbar()}
    <main style="padding: 20px;">
      <h1>Configurações</h1>
      <p>Ajuste suas preferências.</p>
      <p>Em breve será adicionado uma pagina funcional por aqui...</p>
    </main>
  `;
}
