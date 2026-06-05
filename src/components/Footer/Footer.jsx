import { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import { Toast } from './Toast';

export function Footer() {
    const [fraseAtual, setFraseAtual] = useState(0);
    const [exibirBalao, setExibirBalao] = useState(false);

    const links = [
        "Meta", "Sobre", "Blog", "Carreiras", "Ajuda", "API", 
        "Privacidade", "Termos", "Localizações", "Popular", 
        "Instagram Lite", "Meta AI", "Threads", "Upload de contatos e não usuários", "Meta Verified"
    ];

    const totalFrases = 9;
    
    const handleLinkClick = (e) => {
        e.preventDefault();
        setExibirBalao(true);
        setFraseAtual((prev) => (prev + 1) % totalFrases);
    }

    useEffect(() => {
        if (exibirBalao) {
            const timer = setTimeout(() => {
                setExibirBalao(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [exibirBalao, fraseAtual]);

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
                <span>Português (Brasil) ▾</span>
                <span>© 2026 Instagram from Meta</span>
            </div>
            <Toast exibirBalao={exibirBalao} fraseAtual={fraseAtual} />
        </footer>
    );
}