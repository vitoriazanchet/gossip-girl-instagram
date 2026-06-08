import { Icones } from '../../utils/icons';
import styles from './SidebarLateral.module.css';

export function SidebarLateral({ dispararToast }) {
  const itensMenu = [
    { id: 1, texto: '', icone: <Icones.Instagram size={24} /> },
    { id: 2, texto: 'Página Inicial', icone: <Icones.Home size={24} /> },
    { id: 3, texto: 'Reels', icone: <Icones.Reels size={24} /> },
    { id: 4, texto: 'Mensagens', icone: <Icones.Direct size={24} /> },
    { id: 5, texto: 'Pesquisa', icone: <Icones.Explorar size={24} />, acao: () => dispararToast('Procurando podres de quem? 🔍') },
    { id: 6, texto: 'Notificações', icone: <Icones.CoracaoVazio size={24} /> },
    { id: 7, texto: 'Criar', icone: <Icones.Criar size={24} /> },
    { id: 8, texto: 'Painel', icone: <Icones.Painel size={24} /> },
    { id: 9, texto: 'Perfil', icone: <Icones.Perfil size={24} /> },
    { id: 10, texto: 'Mais', icone: <Icones.Menu size={24} /> },
    { id: 11, texto: 'Também aqui', icone: <Icones.Meta size={24} /> },
  ];

  return (
    <nav className={styles.sidebar}>
      <ul className={styles.listaMenu}>
        {itensMenu.map((item) => (
          <li key={item.id} className={styles.itemMenu} onClick={item.acao ? item.acao : undefined}>
            <div className={styles.containerIcone}>
              {item.icone}
            </div>
            <span className={styles.textoLink}>{item.texto}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}