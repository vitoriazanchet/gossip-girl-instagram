import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
`
const Janela = styled.div`
    background-color: #c0c0c0;
    width: 400px;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
    border-right: 2px solid #808080;
    border-bottom: 2px solid #808080;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    padding: 2px;
    font-family: 'MS Sans Serif', Geneva, sans-serif;
    flex-direction: column;
`
const BarraTitulo = styled.div`
    background: linear-gradient(90deg, #000080, #1084d0);
    color: white;
    padding: 4px 6px;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    width: 100% !important;
    box-sizing: border-box;
`
const TextoTitulo = styled.span`
    font-weight: bold;
    font-size: 14px;
    margin: 0;
`
const BotaoFechar = styled.button`
    background-color: #c0c0c0;
    color: black;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    width: 16px;
    height: 14px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: bold;
    margin: 0 !important; 
`
const Conteudo = styled.div`
    display: flex;
    padding: 20px;
    gap: 15px;
    align-items: center;
    background-color: #c0c0c0;
`
const ContainerImagem = styled.div`
    width: 200px;
    height: 200px;
    min-width: 70px;
    background-color:  var(--cor-background);
    border-top: 2px solid #808080;
    border-left: 2px solid #808080;
    border-right: 2px solid  var(--cor-background);
    border-bottom: 2px solid  var(--cor-background);
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px; 
`
const Mensagem = styled.p`
    color: #000;
    font-size: 13.5px;
    line-height: 1.4;
    margin: 0;
    text-align: left;
    flex: 1;
`
const BarraInferior = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 12px;
    background-color: #c0c0c0;
`
const BotaoOk = styled.button`
    background-color: #c0c0c0;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 4px 25px;
    cursor: pointer;
    box-shadow: inset 1px 1px 0px #fff;
    &:active {
      border-top: 1px solid #000;
      border-left: 1px solid #000;
      border-right: 1px solid #fff;
      border-bottom: 1px solid #fff;
      padding: 5px 24px 3px 26px;
    }
`

export function ToastGossip({ exibir, mensagem, imagem, aoFechar }) {
  if (!exibir) return null;

  return (
    <Overlay onClick={aoFechar}>
      <Janela onClick={(e) => e.stopPropagation()}>
        <BarraTitulo>
          <TextoTitulo>📢 Gossip Girl Blast</TextoTitulo>
          <BotaoFechar onClick={aoFechar}>X</BotaoFechar>
        </BarraTitulo>
        <Conteudo>
          {imagem && (<ContainerImagem><Imagem src={imagem} alt="Flagrado"/></ContainerImagem>)}
          <Mensagem>{mensagem}</Mensagem>
        </Conteudo>
        <BarraInferior><BotaoOk onClick={aoFechar}>OK</BotaoOk></BarraInferior>
      </Janela>
    </Overlay>
  );
}