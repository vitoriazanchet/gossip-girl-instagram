import { useEffect } from 'react';
import styles from './Toast.module.css';

export function Toast({ exibir, mensagem, aoFechar }) {
    
    useEffect(() => {
        if (exibir && aoFechar) {
            const timer = setTimeout(() => {
                aoFechar();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [exibir, mensagem, aoFechar]);

    return (
        <div className={`${styles.toast} ${exibir ? styles.show : ''}`}>
        <p>{mensagem}</p>
        </div>
    );
}
