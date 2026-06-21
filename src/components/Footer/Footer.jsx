import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Toast } from '../Toast/Toast.jsx';
import { Icones } from '../../utils/icons.js';

const FooterContainer = styled.footer`
    width: 100vw;
    position: relative;
    bottom: 0;
    left: 0;
    margin-top: auto;
    background-color:var(--cor-background);
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-family: var(--font-padrao);
    color: var(--cor-texto5);
    font-size: 12px;
    @media (max-width: 768px) {
        display: none;
    }
`
const LinksRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    max-width: 100%;
    margin-top: 5px;
`
const FooterLink = styled.a`
    color: var(--cor-texto5);
    text-decoration: none;
    transition: text-decoration 0.2s ease;
    &:hover {
        text-decoration: underline;
    }
    &:active {
        color: var(--cor-texto6);
    }
`
const CopyrightRow = styled.div`
    line-height: 3;
    display: flex;
    gap: 16px;
    margin-bottom: 30px;
`

export function Footer() {
    const [mensagemAtual, setMensagemAtual] = useState(0);
    const [exibirToast, setExibirToast] = useState(false);

    const links = [
        "Meta", "Sobre", "Blog", "Carreiras", "Ajuda", "API", 
        "Privacidade", "Termos", "Localizações", "Popular", 
        "Instagram Lite", "Meta AI", "Threads", "Upload de contatos e não usuários", "Meta Verified"
    ];

    const mensagensSequenciais = [
        "Achou mesmo que teria um link aí? 😆",
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
                    <div key={index} >
                        <FooterLink href={`#${link.toLowerCase()}`} onClick={handleLinkClick}>{link}</FooterLink>
                    </div>
                ))}
            </LinksRow>
            <CopyrightRow>
                <span>Português (Brasil) <Icones.ArrowDown size={12} className="iconeArrow"/></span>
                <span>© 2026 Instagram from Meta</span>
            </CopyrightRow>
            <Toast exibir={exibirToast} mensagem={mensagensSequenciais[mensagemAtual]} aoFechar={() => setExibirToast(false)} />
        </FooterContainer>
    );
}