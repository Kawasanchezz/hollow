import { useProgress } from '@react-three/drei';
import './Menu.css';

const FRASE = 'Bora jogar';

export function Menu({ onStart }) {
    const { progress } = useProgress();
    const porcentagem = Math.round(progress);
    const isLoaded = progress === 100;

    return (
        <div className='menu'>
            <span className='menu-lado menu-lado--esq'>
                Desenvolvedor<br />Full Stack
            </span>

            <span className='menu-lado menu-lado--dir' aria-live='polite'>
                {porcentagem}%<br />{isLoaded ? 'Pronto' : 'Carregando'}
            </span>

            <main className='container-menu'>
                <h1 className='menu-nome' aria-label={FRASE} role='progressbar' aria-valuemin={0} aria-valuemax={100} aria-valuenow={porcentagem}>
                    <span className='menu-nome__fundo' aria-hidden='true'>{FRASE}</span>
                    <span className='menu-nome__cheio' aria-hidden='true' style={{ clipPath: `inset(0 ${100 - porcentagem}% 0 0)` }}>{FRASE}</span>
                </h1>

                <button
                    className={`start-button ${isLoaded ? 'start-button--pronto' : ''}`}
                    onClick={onStart}
                    disabled={!isLoaded}
                    tabIndex={isLoaded ? 0 : -1}
                >
                    START
                </button>
            </main>

            <footer className='menu-rodape'>
                <span className='menu-rodape__mais' aria-hidden='true'>+</span>
                <span>Construindo experiências digitais</span>
                <strong>da ideia à entrega</strong>
            </footer>
        </div>
    );
}
