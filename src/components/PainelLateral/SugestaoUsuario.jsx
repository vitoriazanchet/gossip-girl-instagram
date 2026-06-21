import styled from 'styled-components';

const CardSugestao = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    width: 100%;
    padding: 4px 0;
    transition: opacity 0.2s ease;
    &:hover {
        opacity: 0.8;
    }
`
const FotoPerfil = styled.img`
    width: 36px;
    height: 36px;
    min-width: 36px;
    border-radius: 50%;
    object-fit: cover;
`

const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    overflow: hidden;
`

const Nome = styled.h3`
    font-size: 13px;
    font-weight: 600;
    color: var(--cor-texto4);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    margin: 0;
    letter-spacing: 0.2px;
    line-height: 1.4;
`
const NomeUsuario = styled.span`
    font-size: 12px;
    color: var(--cor-texto5);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`

const Link = styled.a`
    font-size: 12px;
    font-weight: 600;
    color: var(--cor-destaque, #0095f6);
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0;
    transition: opacity 0.15s ease;
    &:hover {
        text-decoration: underline;
    }
`

export function SugestaoUsuario({ perfil, nome, usuario, aoClicar, aoSeguir }) {

    return (
        <CardSugestao onClick={aoClicar}>
            <FotoPerfil src={perfil} alt={usuario}/>
            <ContainerTexto>
                <Nome>{nome}</Nome>
                <NomeUsuario>{usuario}</NomeUsuario>
            </ContainerTexto>
            <Link href="#rastrear" onClick={aoSeguir}>Seguir</Link>
        </CardSugestao>
    );
}