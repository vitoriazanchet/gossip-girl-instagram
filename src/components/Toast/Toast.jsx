import { useEffect } from 'react';
import styled from 'styled-components';

const ContainerToast = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: var(--cor-background);
    border: 1px solid var(--cor-borda2);
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    color: var(--cor-texto4);
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 999;
    max-width: 340px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.4s ease, opacity 0.4s ease;
    transform: ${props => props.$exibir ? 'translateY(0)' : 'translateY(100px)'};
    opacity: ${props => props.$exibir ? '1' : '0'};
    pointer-events: ${props => props.$exibir ? 'all' : 'none'};
`

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
        <ContainerToast $exibir={exibir}>
            <p>{mensagem}</p>
        </ContainerToast>
    );
}
