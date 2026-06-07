import { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import { Toast } from '../Toast/Toast.jsx';
import { Icones } from '../../utils/icons.js';

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
        "Calsaçoooo 🎉",
        "Isso é tudo pessoal! 😊"
    ];

    const totalMensagens = 9;
    
    const handleLinkClick = (e) => {
        e.preventDefault();
        setExibirToast(true);
        setMensagemAtual((prev) => (prev + 1) % totalMensagens);
    }

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.linksRow}>
                {links.map((link, index) => (
                    <div key={index} className={styles.linkWrapper}>
                        <a href={`#${link.toLowerCase()}`} className={styles.footerLink} onClick={handleLinkClick}>
                            {link}
                        </a>
                    </div>
                ))}
            </div>
            <div className={styles.copyrightRow}>
                <span>Português (Brasil) <Icones.ArrowDown size={12} className="iconeArrow" /></span>
                <span>© 2026 Instagram from Meta</span>
            </div>
            <Toast exibir={exibirToast} mensagem={mensagensSequenciais[mensagemAtual]} aoFechar={() => setExibirToast(false)} />
        </footer>
    );
}