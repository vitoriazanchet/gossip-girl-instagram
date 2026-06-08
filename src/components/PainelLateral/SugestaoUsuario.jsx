import styles from './PainelLateral.module.css';

export function SugestaoUsuario({ perfil, nome, usuario, aoClicar, aoSeguir }) {

    return (
        <div className={styles.cardSugestao} onClick={aoClicar}>
            <img src={perfil} alt={usuario} className={styles.fotoPerfil} />
            <div className={styles.containerTexto}>
                <h3 className={styles.nome}>{nome}</h3>
                <span className={styles.nomeUsuario}>{usuario}</span>
            </div>
            <a href="#rastrear" className={styles.link} onClick={aoSeguir}>Seguir</a>
        </div>
    );
}