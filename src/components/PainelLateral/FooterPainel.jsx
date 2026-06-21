import { useState } from 'react';
import { Toast } from '../Toast/Toast.jsx';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    width: 100%;
    margin-top: auto;
    padding: 16px 0 10px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-top: 1px solid var(--cor-texto5);
    font-size: 11px;
    color: var(--cor-texto5);
`
const LinksRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px 10px;
    width: 100%;
`
const LinkWrapper = styled.div`
    display: inline-flex;
` 
const FooterLink = styled.a`
    color: var(--cor-texto5);
    text-decoration: none;
    transition: color 0.15s ease;
    font-size: 11px;
    &:hover {
        color: var(--cor-texto4);
        text-decoration: underline;
    }
    &:active {
        color: var(--cor-texto6);
    }
`
const CopyrightRow = styled.span`
    font-size: 11px;
    color: var(--cor-texto5);
    margin: 0;
    padding: 0;
    line-height: 1.5;
    letter-spacing: 0;
    font-weight: 400;
`

export function FooterPainel() {
    const [mensagemAtual, setMensagemAtual] = useState(0);
    const [exibirToast, setExibirToast] = useState(false);

    const links = [
        "Sobre", "Ajuda", "Imprensa", "API", "Carreiras", 
        "Privacidade", "Termos", "Localizações", "Idioma", "Meta Verified"
    ];
    
    const mensagensSequenciais = [
        "Achou mesmo que eu manteria um link do concorrente aí? 😆",
        "Esse não é um botão.",
        "Esse também não! 🤪",
        "Vai mesmo testar todos? 😱",
        "Realmente você não desiste.",
        "Já está merecendo um prêmio! 🏆",
        "Quem sabe no proximo?",
        "Seu prêmio é... 🥁",
        "Cansaçoooo 🎉",
        "Isso é tudo pessoal! 😊"
    ];
    
    const totalMensagens = 10;
        
    const handleLinkClick = (e) => {
        e.preventDefault();
        setExibirToast(true);
        setMensagemAtual((prev) => (prev + 1) % totalMensagens);
    }

    return (
        <FooterContainer>
        <LinksRow>
          {links.map((link, index) => (
            <LinkWrapper key={index}>
              <FooterLink href={`#${link.toLowerCase()}`} onClick={handleLinkClick}>{link}</FooterLink>
            </LinkWrapper>
          ))}
        </LinksRow>
        <CopyrightRow>© 2026 GOSSIP GIRL BLOG</CopyrightRow>
        <Toast exibir={exibirToast} mensagem={mensagensSequenciais[mensagemAtual]} aoFechar={() => setExibirToast(false)} />
      </FooterContainer>
    );
}