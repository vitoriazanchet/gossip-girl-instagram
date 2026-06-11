import { useState } from 'react';
import { Icones } from '../../utils/icons';
import styles from './Post.module.css';
import perfil from '/perfis/logo.png';

export function Post({ imagem, legenda }) {
  const [curtido, setCurtido] = useState(false);
  const [totalCurtidas, setTotalCurtidas] = useState(Math.floor(Math.random() * 500) + 100);
  const [salvo, setSalvo] = useState(false);

  const handleCurtir = () => {
    if (curtido) {
      setCurtido(false);
      setTotalCurtidas(prev => prev - 1);
    } else {
      setCurtido(true);
      setTotalCurtidas(prev => prev + 1);
    }
  };

  const handleSalvar = () => {
    if (salvo) {
      setSalvo(false);
    } else {
      setSalvo(true);
    }
  };

  return (
    <article className={styles.postContainer}>
      <div className={styles.postHeader}>
        <img className={styles.perfil} src={perfil} alt="Gossip Girl" />
        <strong>gossipgirl<Icones.Verified size={12} /></strong>
      </div>
      <div className={styles.containerImagem}>
        <img src={imagem} alt="Flagrante do Upper East Side" className={styles.imagem} />
      </div>
      <div className={styles.footer}>
        <div className={styles.botoesAcao}>
          <div className={styles.grupoEsquerda}>
          <button onClick={handleCurtir} className={styles.botaoIcone}>
            {curtido ? (
              <Icones.CoracaoCheio size={24} className={styles.coracaoAtivo} />
            ) : (
              <Icones.CoracaoVazio size={24} />
            )}
          </button>
          <span className={styles.curtidasCount}>{totalCurtidas}</span>
          <Icones.Comentar size={24} />
          <Icones.Repostar size={24} />
          <Icones.Direct size={24} />
        </div>
        <button onClick={handleSalvar} className={`${styles.botaoIcone} ${styles.salvar}`}>
          {salvo ? (
            <Icones.Salvo size={24} />
          ) : (
            <Icones.Salvar size={24} />
          )}
        </button>
        </div>
        <p className={styles.legenda}>
          <strong>gossipgirl<Icones.Verified size={12} /></strong> {legenda}
        </p>
      </div>
    </article>
  );
}