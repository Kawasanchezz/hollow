import "./MenuContato.css";

export function MenuContato({ fechar }) {
  return (
    <div className="menu-contato">
      <button type="button" className="buttonClose" onClick={fechar} aria-label="Fechar">X</button>

      <h2>Contato</h2>
      <p className="descricao">
        Quer falar comigo? Me chama por qualquer um dos canais abaixo 👇
      </p>

      <div className="lista-contato">
        <a href="mailto:kawagarcia71@gmail.com" className="item-contato">
          <span>kawagarcia71@gmail.com</span>
        </a>

        <a
          href="https://github.com/Kawasanchezz"
          target="_blank"
          rel="noopener noreferrer"
          className="item-contato"
        >
          <span>github.com/Kawasanchezz</span>
        </a>

        <a
          href="https://www.linkedin.com/in/kawagarcia"
          target="_blank"
          rel="noopener noreferrer"
          className="item-contato"
        >
          <span>linkedin.com/in/kawagarcia</span>
        </a>
      </div>
    </div>
  );
}
