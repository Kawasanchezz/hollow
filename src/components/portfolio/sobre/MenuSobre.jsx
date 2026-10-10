import "./MenuSobre.css"

export function MenuSobre({ fechar }) {
    return (
        <div className="menu-sobre">
            <h2>Sobre Mim</h2>

            <p>Transformo complexidade em <strong>experiências digitais elegantes</strong> e intuitivas. Como desenvolvedor, dedico-me a arquitetar soluções web que combinam desempenho impecável, código limpo e um design impactante.<br/><br/>
                Minha missão é construir produtos que não apenas atendam às necessidades da engenharia contemporânea, mas que elevem o padrão sensorial e funcional de como interagimos com a tecnologia.</p>

            <button type="button" className="buttonClose" onClick={fechar} aria-label="Fechar">X</button>
        </div>

    );
}