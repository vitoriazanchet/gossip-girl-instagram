import { useState } from 'react';
import { SidebarLateral } from '../../components/SidebarLateral/SidebarLateral';
import { BarraStories } from '../../components/BarraStories/BarraStories';
import { Post } from '../../components/Post/Post';
import { PainelLateral } from '../../components/PainelLateral/PainelLateral';
import { ToastGossip } from '../../components/ToastGossip/ToastGossip';
import { Footer } from '../../components/Footer/Footer';
import styles from './Feed.module.css';

export function Feed({ navegarPara }) {

  const [modalGossip, setModalGossip] = useState({
    exibir: false,
    mensagem: '',
    imagem: ''
  });

  const dispararBombaGossip = (mensagem, urlImagem) => {
    setModalGossip({
      exibir: true,
      mensagem: mensagem,
      imagem: urlImagem
    });
  };

  const postsGossip = [
    {
      id: 1,
      imagem: '/post/1.png',
      legenda: 'Sentiram saudades? Podem admitir, seus segredos estavam guardados tempo demais.'
      
    },
    {
      id: 2,
      imagem: '/post/2.png',
      legenda: 'Bomba de última hora: S. e B. dividindo o mesmo táxi na Quinta Avenida após uma briga monumental. Amigas ou rivais de trincheira? Na corte de Manhattan, as alianças mudam mais rápido que as estações. XOXO...'
    },
    {
      id: 3,
      imagem: '/post/3.png',
      legenda: 'Quem disse que eu tinha ido embora? Eu só estava observando de camarote.'
    }
  ];

  return (
    <div className={styles.layoutFeed}>
      <aside className={styles.colunaEsquerda}>
        <SidebarLateral dispararToast={dispararBombaGossip} />
      </aside>
      <main className={styles.colunaCentro}>
        <BarraStories dispararToast={dispararBombaGossip} />
        <div className={styles.listaPosts}>
          {postsGossip.map((post) => (
            <Post key={post.id} autor={post.autor} imagem={post.imagem} legenda={post.legenda}/>
          ))}
        </div>
      </main>
      <aside className={styles.colunaDireita}>
        <PainelLateral dispararToast={dispararBombaGossip} />
      </aside>
      <ToastGossip 
        exibir={modalGossip.exibir}
        mensagem={modalGossip.mensagem}
        imagem={modalGossip.imagem}
        aoFechar={() => setModalGossip({ ...modalGossip, exibir: false })}
      />
      <Footer />
    </div>
  );
}