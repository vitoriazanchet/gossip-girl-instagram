import { useRef } from 'react';
import { CardStory } from './CardStory';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 10px 0;
`
const Container = styled.div`
    display: flex;
    gap: 15px;
    overflow-x: hidden;
    scroll-behavior: smooth;
    width: 100%;
    padding: 5px;
`
const SetaEsquerda = styled.button`
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    width: 25px;
    height: 25px;
    left: 5px;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
`
const SetaDireita = styled.button`
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    width: 25px;
    height: 25px;
    right: 5px;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
`

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
    <Wrapper>
      <SetaEsquerda onClick={() => moverScroll('esquerda')}>‹</SetaEsquerda>
      <Container ref={containerRef}>
        {listaStories.map((story) => (
          <CardStory key={story.id} usuario={story.usuario} perfil={story.perfil} aoClicar={() => dispararToast(story.frase, story.imagem)} />
        ))}
      </Container>
      <SetaDireita onClick={() => moverScroll('direita')}>›</SetaDireita>
    </Wrapper>
  );
}