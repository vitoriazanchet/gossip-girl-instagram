import { useState } from 'react';
import { Icones } from '../../utils/icons';
import styled from 'styled-components';
import perfil from '/perfis/logo.png';

const PostContainer = styled.article`
    width: 100%;
    max-width: 470px;
    margin: 0 auto 30px auto;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 20px;
    background-color: var(--cor-background);
`
const PostHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
`
const Perfil = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
`
const ContainerImagem = styled.div`
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid #efefef;
`
const Imagem = styled.img`
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
`
const FooterPost = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
`
const BotoesAcao = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const GrupoEsquerda = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`
const Salvar = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    width: 24px;
    justify-content: center;
    color: inherit;
    transition: transform 0.1s ease;
    margin-right: 0;
`
const BotaoIcone = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    width: 24px;
    justify-content: center;
    color: inherit;
    transition: transform 0.1s ease;
`
const CoracaoAtivo = styled.div`
    color: var(--cor-alerta);
`
const CurtidasCount = styled.span`
    font-weight: 600;
    font-size: 14px;
`
const Legenda = styled.p`
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
`
const Strong = styled.strong`
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.3px;
    line-height: 0.7;
`

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
    setSalvo(!salvo);
  };

  return (
    <PostContainer>
      <PostHeader>
        <Perfil src={perfil} alt="Gossip Girl" />
        <Strong>gossipgirl<Icones.Verified size={12}/></Strong>
      </PostHeader>
      <ContainerImagem><Imagem src={imagem} alt="Flagrante do Upper East Side"/></ContainerImagem>
      <FooterPost>
        <BotoesAcao>
          <GrupoEsquerda>
            <BotaoIcone onClick={handleCurtir}>
              {curtido ? (
                <CoracaoAtivo><Icones.CoracaoCheio size={24}/></CoracaoAtivo>
              ) : (
                <Icones.CoracaoVazio size={24}/>
              )}
            </BotaoIcone>
            <CurtidasCount>{totalCurtidas}</CurtidasCount>
            <Icones.Comentar size={24} />
            <Icones.Repostar size={24} />
            <Icones.Direct size={24} />
          </GrupoEsquerda>
          <Salvar onClick={handleSalvar}>
            {salvo ? (
              <Icones.Salvo size={24} />
            ) : (
              <Icones.Salvar size={24} />
            )}
          </Salvar>
        </BotoesAcao>
        <Legenda><Strong>gossipgirl<Icones.Verified size={12}/></Strong>{legenda}</Legenda>
      </FooterPost>
    </PostContainer>
  );
}