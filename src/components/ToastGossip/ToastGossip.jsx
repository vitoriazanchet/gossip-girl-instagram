import styles from './ToastGossip.module.css';

export function ToastGossip({ exibir, mensagem, imagem, aoFechar }) {
  if (!exibir) return null;

  return (
    <div className={styles.overlay} onClick={aoFechar}>
      <div className={styles.janela} onClick={(e) => e.stopPropagation()}>
        <div className={styles.barraTitulo}>
          <span className={styles.titulo}>📢 Gossip Girl Blast</span>
          <button className={styles.botaoFechar} onClick={aoFechar}>X</button>
        </div>
        <div className={styles.conteudo}>
          {imagem && (
            <div className={styles.containerFoto}>
              <img src={imagem} alt="Flagrado" className={styles.foto} />
            </div>
          )}
          <p className={styles.mensagem}>{mensagem}</p>
        </div>
        <div className={styles.barraInferior}>
          <button className={styles.botaoOk} onClick={aoFechar}>OK</button>
        </div>
      </div>
    </div>
  );
}