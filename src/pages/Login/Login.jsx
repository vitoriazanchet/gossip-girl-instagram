import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Icones } from '../../utils/icons';
import { GradienteInstagram } from '../../components/GradienteInstagram/GradienteInstagram';
import { Footer } from '../../components/Footer/Footer';
import { Toast } from '../../components/Toast/Toast';

const TelaCheia = styled.div`
    width: 100vw;
    height: auto;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const Principal = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: calc(100vh - 100px);
    min-height: 720px;
`
const CardInstagram = styled.div`
  background-color: var(--cor-background);
  border: 0.5px solid var(--cor-borda);
  height: 100%;
  margin-bottom: 80px;
  width: 52%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 46px 5px;
  @media (max-width: 768px) {
    display: none;
  }
`
const Logo = styled.div`
    align-self: flex-start;
    margin-left: 47px;
`
const Propaganda = styled.div`
    color: var(--cor-texto2);
    font-size: 2.2rem;
    margin-top: 7px;
    margin-bottom: 15px;
    margin-left: 50px;
    width: 80%;
    text-align: center;
    line-height: 1.9;
`
const ImagemPropaganda = styled.img`
    height: 40%;
    margin-left: 15px;
    object-fit: contain;
    box-shadow: none; 
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.25));
`
const CardLogin = styled.div`
    background-color: var(--cor-background);
    border: 0.5px solid var(--cor-borda);
    height: 100%;
    margin-bottom: 80px;
    min-width: 48%;
    position: relative;
    @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`
const EntrarText = styled.p`
    display: block;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 110px;
    margin-bottom: 30px;
    text-align: left;
    font-weight: 600;
    font-size: 16.3px;
    letter-spacing: 0.9px;
    line-height: 0.7;
`
const ContainerLoginInvalido = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    width: 84%;
    padding: 14px 20px;
    margin-bottom: 30px;
    border: 1px solid var(--cor-borda2);
    border-radius: 18px;
    color: var(--cor-texto2);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.7px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items: flex-start;
    gap: 12px;
`
const LoginInvalido = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`
const Link = styled.a`
    color: var(--cor-ativo);
    text-decoration: none;
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
    &:active{
        color: var(--cor-inativo);
    }
`
const InputUsuario = styled.input`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 84%;
    padding: 18px;
    margin-bottom: 15px;
    border: 1px solid var(--cor-borda2);
    border-radius: 15px;
    color: var(--cor-texto3);
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.3px;
    line-height: 0.7;
    &::placeholder {
        color: var(--cor-texto4);
        opacity: 1;
    }
    &:hover {
        border-color: var(--cor-texto4);
        transition: border-color 0.3s ease;
    }
    &:focus {
        border-color: var(--cor-ativo);
        box-shadow: 0 0 4px var(--cor-inativo), inset 0 0 4px var(--cor-inativo);
        outline: none;
        transition: border-color 0.3s ease;
    }
`
const Senha = styled.div`
    position: relative;
    width: 84%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
`
const InputSenha = styled.input`
    width: 100%;
    margin-bottom: 0;
    padding-right: 50px;
`
const BotaoMostrarSenha = styled.button`
    position: absolute;
    z-index: 999;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--cor-texto2);
    &:hover {
        background-color: transparent;
    }
`
const BotaoEntrar = styled.button`
    color: var(--cor-background);
    transition: background-color 0.2s ease, cursor 0.2s ease;
    margin-top: 25px;
    background-color: ${props => props.$ativo ? 'var(--cor-ativo)' : 'var(--cor-inativo)'};
    cursor: ${props => props.$ativo ? 'pointer' : 'not-allowed'};
    &:hover {
        background-color: var(--cor-inativo);
        transition: border-color 0.3s ease;
    }
`
const BotaoEntrarAtivo = styled.button`
    background-color: var(--cor-ativo);
    cursor: pointer;
`
const BotaoFacebook = styled.button`
    border: 1px solid var(--cor-borda2);
    margin-top: 50px;
`
const BotaoCriar = styled.button`
    border: 1px solid var(--cor-ativo);
    color: var(--cor-ativo);
`
const Meta = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
    gap: 4px;
    font-size: 16px;
    line-height: 0.3;
`

export function Login({ navegarPara }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemToast, setMensagemToast] = useState('');
  const [exibirToast, setExibirToast] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarErroLogin, setMostrarErroLogin] = useState(false);
  const botaoLiberado = usuario.length >= 1 && senha.length >= 6;
  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === 'admin' && senha === 'admin1') {
      setMensagemToast('Login efetuado com sucesso!');
      setExibirToast(true);
      setMostrarErroLogin(false);
      setTimeout(() => {setExibirToast(false); navegarPara('feed');}, 2500);
      } else {
      setMostrarErroLogin(true);
    }
  };
  const handleEsqueceuSenha = (s) => {
    s.preventDefault();
    setMensagemToast('Não sou eu que vou te lembrar!');
    setExibirToast(true);
    
  }
  const handleFacebook = (f) => {
    f.preventDefault();
    setMensagemToast('Login com Facebook indisponível no momento! Por favor, tente novamente mais tarde.');
    setExibirToast(true);
  }
  const handleLoginInvalido = (l) => {
    l.preventDefault();
    setMensagemToast('Operação indisponível no momento! Por favor, tente novamente mais tarde.');
    setExibirToast(true);
  }
  
  return (
    <TelaCheia>
      <Principal>
        <CardInstagram>
          <Logo><GradienteInstagram /><Icones.Instagram size={88} style={{ fill: "url(#insta-gradient)" }} /></Logo>
          <Propaganda>Veja momentos do dia a dia dos seus amigos próximos.</Propaganda>
          <ImagemPropaganda src="/assets/img.png" alt="Imagem de propaganda do Instagram" />
        </CardInstagram>
        <CardLogin>
          <EntrarText>Entrar no Instagram</EntrarText>
          {mostrarErroLogin && (
            <ContainerLoginInvalido>
              <Icones.Alerta size={20} className="iconeAlerta" />
              <LoginInvalido>
                <p>As informações de login que você inseriu estão incorretas.</p>
                <Link href="#recuperar" onClick={handleLoginInvalido}>Encontre sua conta e faça login.</Link>
              </LoginInvalido>
            </ContainerLoginInvalido>
          )}
          <InputUsuario type="user" placeholder="Número de celular, nome de usuário ou email" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
          <Senha>
            <InputSenha type={mostrarSenha ? "text" : "password"} placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            {senha.length > 0 && (
              <BotaoMostrarSenha type="button" className="botaoOlho" onClick={() => setMostrarSenha(!mostrarSenha)}>
                {mostrarSenha ? (
                  <Icones.Visivel size={20} />
                ) : (
                  <Icones.Escondido size={20} />
                )}
              </BotaoMostrarSenha>
            )}
          </Senha>
          <BotaoEntrar $ativo={botaoLiberado} disabled={!botaoLiberado} onClick={handleLogin}>Entrar</BotaoEntrar>
          <button onClick={handleEsqueceuSenha}>Esqueceu a senha?</button>
          <BotaoFacebook onClick={handleFacebook}>
            <Icones.Facebook size={14} className="iconeFacebook"/>
            Entrar com o Facebook</BotaoFacebook>
          <BotaoCriar onClick={() => navegarPara('registrar')}>Criar nova conta</BotaoCriar>
          <Meta><Icones.Meta size={18} className="iconeMeta" /><p>Meta</p></Meta>
        </CardLogin>
        <Toast exibir={exibirToast} mensagem={mensagemToast} aoFechar={() => setExibirToast(false)} />
      </Principal>
      <Footer />
    </TelaCheia>
  );
}
