import styled from 'styled-components';

const CardStoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    min-width: 80px;
`
const BordaFoto = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    padding: 2px;
    background: radial-gradient(circle at 30% 107%, #F1D344 15%, #EE5052 40%, #EC3268 45%, #DC2BC3 75%, #9C1EDB 85%, #6C1DFB 95%);
    display: flex;
    align-items: center;
    justify-content: center;
`
const FotoPerfil = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`
const NomeUsuario = styled.span`
    font-size: 12px;
    color: var(--cor-texto4);
    margin-top: 4px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`

export function CardStory({ perfil, usuario, aoClicar }) {
  return (
    <CardStoryContainer onClick={aoClicar}>
      <BordaFoto>
        <FotoPerfil src={perfil} alt={usuario} />
      </BordaFoto>
      <NomeUsuario>{usuario}</NomeUsuario>
    </CardStoryContainer>
  );
}