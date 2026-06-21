import { useState } from 'react';
import { SidebarLateral } from '../../components/SidebarLateral/SidebarLateral';
import { BarraStories } from '../../components/BarraStories/BarraStories';
import { Post } from '../../components/Post/Post';
import { PainelLateral } from '../../components/PainelLateral/PainelLateral';
import { ToastGossip } from '../../components/ToastGossip/ToastGossip';
import { Footer } from '../../components/Footer/Footer';
import styled from 'styled-components';

const LayoutFeed = styled.div`
    display: grid;
    grid-template-columns: 75px 1fr 320px;
    grid-template-rows: 1fr;
    min-height: 100vh;
    width: 100%;
    background-color: var(--cor-background);
    @media (max-width: 768px) {
      grid-template-columns: 70px 1fr;
    }
`
const ColunaEsquerda = styled.aside`
    grid-column: 1;
`
const ColunaCentro = styled.main`
    grid-column: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 24px;
    overflow-y: auto;
`
const ListaPosts = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 470px;
    gap: 0;
`
const ColunaDireita = styled.aside`
    grid-column: 3;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    padding: 20px 16px;
    border-left: 1px solid var(--cor-borda, #dbdbdb);
    @media (max-width: 768px) {
      display: none;
    }
`
const Titulo = styled.h3`
    text-align: left;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.9px;
    line-height: 1.2;
    margin-top: 12px;
    margin-bottom: 6px;
`
const Texto = styled.p`
    color: var(--cor-texto2);
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.6px;
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-bottom: 10px;
`

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
    <LayoutFeed>
      <ColunaEsquerda><SidebarLateral dispararToast={dispararBombaGossip}/></ColunaEsquerda>
      <ColunaCentro>
        <BarraStories dispararToast={dispararBombaGossip} />
        <ListaPosts>
          {postsGossip.map((post) => (
            <Post key={post.id} autor={post.autor} imagem={post.imagem} legenda={post.legenda}/>
          ))}
        </ListaPosts>
      </ColunaCentro>
      <ColunaDireita><PainelLateral dispararToast={dispararBombaGossip}/></ColunaDireita>
      <ToastGossip 
        exibir={modalGossip.exibir}
        mensagem={modalGossip.mensagem}
        imagem={modalGossip.imagem}
        aoFechar={() => setModalGossip({ ...modalGossip, exibir: false })}
      />
      <Footer />
    </LayoutFeed>
  );
}