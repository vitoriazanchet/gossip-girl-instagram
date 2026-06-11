import styles from './BarraStories.module.css';

export function CardStory({ perfil, usuario, aoClicar }) {
  return (
    <div className={styles.cardStory} onClick={aoClicar}>
      <div className={styles.bordaFoto}>
        <img src={perfil} alt={usuario} className={styles.fotoPerfil} />
      </div>
      <span className={styles.nomeUsuario}>{usuario}</span>
    </div>
  );
}