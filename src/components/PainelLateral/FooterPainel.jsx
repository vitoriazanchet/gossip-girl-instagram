import { useState } from 'react';
import { Toast } from '../Toast/Toast.jsx';
import styles from './PainelLateral.module.css';

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
        <footer className={styles.footer}>
        <div className={styles.linksRow}>
          {links.map((link, index) => (
            <div key={index} className={styles.linkWrapper}>
              <a href={`#${link.toLowerCase()}`} className={styles.footerLink} onClick={handleLinkClick}>{link}</a>
            </div>
          ))}
        </div>
        <div className={styles.copyrightRow}><span>© 2026 GOSSIP GIRL BLOG</span></div>
        <Toast exibir={exibirToast} mensagem={mensagensSequenciais[mensagemAtual]} aoFechar={() => setExibirToast(false)} />
      </footer>
    );
}