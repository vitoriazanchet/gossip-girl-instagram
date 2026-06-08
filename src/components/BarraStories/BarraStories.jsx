import { useRef } from 'react';
import { CardStory } from './CardStory';
import styles from './BarraStories.module.css';

export function BarraStories({ dispararToast }) {
  const containerRef = useRef(null);

  const listaStories = [
    { id: 1, usuario: 'blairwaldorf', perfil: '/perfis/blair.jpg', frase: 'Flagrada no saguão do hotel: a nossa It Girl favorita tentando consertar um erro do passado.', imagem: '/flagrado/blair.jpg' },
    { id: 2, usuario: 'serenavan...', perfil: '/perfis/serena.jpg', frase: 'Flagrada: Serena van der Woodsen, voltando da estação e pronta para reclamar o seu trono.', imagem: '/flagrado/serena.jpg' },
    { id: 3, usuario: 'natearchibald', perfil: '/perfis/nate.jpg', frase: 'Ouvi dizer que o N. estava muito bem acompanhado ontem à noite. O que será que a V. vai achar quando ver as fotos?', imagem: '/flagrado/nate.jpg' },
    { id: 4, usuario: 'chuckbass', perfil: '/perfis/chuck.jpg', frase: 'Cuidado, Upper East Side. Dizem que os segredos nunca morrem, eles apenas mudam de dono.' },
    { id: 5, usuario: 'lilyvande...', perfil: '/perfis/lily.jpg', frase: 'Alguns dizem que é amor. Eu digo que é o roteiro perfeito para o próximo escândalo.', imagem: '/flagrado/lily.jpg' },
    { id: 6, usuario: 'georginas...', perfil: '/perfis/georgina.jpg', frase: 'Corre o boato de que a nossa garota má voltou a aprontar. Será que ela mudou mesmo?' },
    { id: 7, usuario: 'jennyhum...', perfil: '/perfis/jenny.jpg', frase: 'Se você vai mentir para a cidade inteira, querida, pelo menos deveria ter uma história que ficasse de pé', imagem: '/flagrado/jenny.jpg' },
    { id: 8, usuario: 'ericvander...', perfil: '/perfis/eric.jpg', frase: 'Todo mundo quer ser alguém. E eu sei exatamente quem vocês são.'},
    { id: 9, usuario: 'vanessaab...', perfil: '/perfis/vanessa.jpg', frase: 'Todo castelo de cartas tem uma base fraca. E eu acabei de encontrar a carta que vai derrubar tudo.' },
    { id: 10, usuario: 'danhumph...', perfil: '/perfis/dan.jpg', frase: 'Aposto que eles pensaram que conseguiriam esconder isso de mim. Pobre, ingênuo e... muito, muito burro.' },
  ];

  const moverScroll = (direcao) => {
    if (containerRef.current) {
      const quantidade = direcao === 'esquerda' ? -400 : 400;
      containerRef.current.scrollBy({ left: quantidade, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.setaEsquerda} onClick={() => moverScroll('esquerda')}>‹</button>
      <div className={styles.container} ref={containerRef}>
        {listaStories.map((story) => (
          <CardStory key={story.id} usuario={story.usuario} perfil={story.perfil} aoClicar={() => dispararToast(story.frase, story.imagem)} />
        ))}
      </div>
      <button className={styles.setaDireita} onClick={() => moverScroll('direita')}>›</button>
    </div>
  );
}