import { Icones } from '../../utils/icons';
import styled from 'styled-components';

const Sidebar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 75px;
    background-color:  var(--cor-background);
    border-right: 1px solid #dbdbdb;
    padding: 20px 12px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    z-index: 9999;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    &:hover {
      width: 240px;
    }
`
const ListaMenu  = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const ItemMenu  = styled.li`
    display: flex;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
`
const ContainerIcone  = styled.div`
    min-width: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TextoLink  = styled.span`
    font-size: 16px;
    color: #000;
    white-space: nowrap;
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    padding-left: 12px;
    .sidebar:hover & {
        opacity: 1;
        transform: translateX(0);
        transition-delay: 0.1s;
    }
`

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
    <Sidebar className="sidebar">
      <ListaMenu>
        {itensMenu.map((item) => (
          <ItemMenu key={item.id} onClick={item.acao ? item.acao : undefined}>
            <ContainerIcone>{item.icone}</ContainerIcone>
            <TextoLink>{item.texto}</TextoLink>
          </ItemMenu>
        ))}
      </ListaMenu>
    </Sidebar>
  );
}