import { useRef } from 'react';
import { SugestaoUsuario } from './SugestaoUsuario';
import { FooterPainel } from './FooterPainel';
import styles from './PainelLateral.module.css';

export function PainelLateral({ dispararToast }) {
  const containerRef = useRef(null);

  const gossipGirl = { id: 1, perfil: '/perfis/logo.png', nome: 'gossipgirl', usuario: 'gossipgirl', frase: 'Vocês sabem que me adoram. XOXO...'};

  const listaSugestoes = [
    { id: 1, perfil: '/perfis/olivia.jpg', nome: 'Olivia Burke', usuario: 'oliviaburke', frase: 'Você é ninguém até que a Garota do Blog fale de você.',},
    { id: 2, perfil: '/perfis/carter.jpeg', nome: 'Carter Baizer', usuario: 'carterbaizen', frase: 'Dizem que Roma não foi construída em um dia. Mas em um segundo, tudo pode ser destruído.',},
    { id: 3, perfil: '/perfis/eleanor.jpg', nome: 'Eleanor Waldorf', usuario: 'eleanorwaldorf', frase: 'Fofoca nunca sai de moda. E eu nunca durmo.',},
    { id: 4, perfil: '/perfis/rufus.jpg', nome: 'Rufus Humphrey', usuario: 'rufushumphrey', frase: 'Hoje o R. descobriu que o dinheiro compra muita coisa, mas não compra a lealdade.',},
    { id: 5, perfil: '/perfis/jack.jpg', nome: 'Jack Bass', usuario: 'jackbass', frase: 'As pessoas não mudam. Elas apenas revelam quem realmente são quando a máscara cai.',},
  ];

  const handleSeguirComMapa = (e, usuario) => {
    e.preventDefault();
    e.stopPropagation();
    dispararToast(
      `Rastreando localização de @${usuario}... Você não pode se esconder de mim no Upper East Side!`,
      '/flagrado/mapa.png'
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} ref={containerRef}>
        <SugestaoUsuario perfil={gossipGirl.perfil} nome={gossipGirl.nome} usuario={gossipGirl.usuario} aoClicar={() => dispararToast(gossipGirl.frase, gossipGirl.perfil)}/>
        {listaSugestoes.map((sugestao) => (
          <SugestaoUsuario key={sugestao.id} perfil={sugestao.perfil} nome={sugestao.nome} usuario={sugestao.usuario}
            aoClicar={() => dispararToast(sugestao.frase)} 
            aoSeguir={(e) => handleSeguirComMapa(e, sugestao.usuario)}
          />
        ))}
      </div>
      <FooterPainel />
    </div>
  );
}