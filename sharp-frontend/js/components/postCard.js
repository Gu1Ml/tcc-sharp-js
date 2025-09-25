// /js/components/postCard.js

/**
 * Cria um card de post
 * @param {Object} post - Objeto com dados do post
 * @param {string} post.author - Nome do autor
 * @param {string} post.content - Texto do post
 * @param {string} post.date - Data do post
 * @param {boolean} isMyPost - Se o post é do usuário logado
 */
export function postCard(post, isMyPost = false) {
  const cssClass = isMyPost ? 'post my-post' : 'post';

  return `
    <div class="${cssClass}">
      <h3>${post.author}</h3>
      <p>${post.content}</p>
      <small>${post.date}</small>
    </div>
  `;
}
