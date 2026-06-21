import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Icones } from '../../utils/icons';
import { Footer } from '../../components/Footer/Footer';
import { Toast } from '../../components/Toast/Toast';

const TelaCheia = styled.div`
  width: 100%;
  height: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--cor-background);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 95%;
  height: auto;
  @media (min-width: 768px) {
    width: 580px;
  }
`;
const VideoTelaCheia = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  z-index: 9999;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const BotaoRedondo = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 0;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Meta = styled.div`
  margin-left: 30px;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  transform: translateX(-50%);
  font-size: 16px;
  line-height: 0.3;
`;
const Titulo2 = styled.h2`
  letter-spacing: 0.9px;
  line-height: 0.5;
  margin-top: 15px;
  margin-bottom: 10px;
`;
const Titulo3 = styled.h3`
  text-align: left;
  font-weight: 600;
  font-size: 16.3px;
  letter-spacing: 0.9px;
  line-height: 0.7;
  margin-top: 12px;
  margin-bottom: 10px;
`;
const Paragrafo = styled.p`
  color: var(--cor-texto2);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.6px;
  line-height: 1.3;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 10px;
`;
const Link = styled.a`
  font-weight: 600;
`;
const Input = styled.input`
  width: 100%;
`;
const Selecao = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;
const InputSenha = styled.input`
  width: 100%;
  margin-bottom: 0;
  padding-right: 50px;
`;
const SecaoData = styled.div`
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Data = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  margin-top: 15px;
`;
const BotaoAjuda = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-30%);
`;
const Balao = styled.div`
  position: absolute;
  top: 35px;
  left: 32%;
  z-index: 10;
  background-color: var(--cor-background);
  border-radius: 22px;
  padding: 14.5px;
  width: 79%;
  box-shadow: 0 2px 15px -5px rgba(0, 0, 0, 0.3);
`;
const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  ${({ $erro }) =>
    $erro &&
    css`
      margin-bottom: 0;
    `}
`;
const Select = styled.select`
  width: 32%;
  padding: 18px;
  border: 1px solid var(--cor-borda2);
  background-color: var(--cor-background);
  color: var(--cor-texto4);
  border-radius: 15px;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.3px;
  line-height: 0.7;
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
  ${({ $erro }) =>
    $erro &&
    css`
      border: 1px solid var(--cor-alerta);
      background-color: var(--cor-background);
      color: var(--cor-alerta);
    `}
`;
const InputUser = styled.input`
  width: 100%;
  margin-bottom: 35px;
`;
const InputErro = styled.input`
  border-color: var(--cor-alerta);
  width: 100%;
  margin-bottom: 0;
  &::placeholder {
    color: var(--cor-alerta);
    opacity: 1;
  }
`;
const MensagemErro = styled.span`
  color: var(--cor-alerta);
  font-size: 13.5px;
  letter-spacing: 0.3px;
  line-height: 0.3;
  margin-top: 5px;
  margin-bottom: 12px;
`;
const IconeAlerta = styled(Icones.Alerta)`
  transform: translateY(25%);
`;
const VideoPernalonga = styled.video`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  transform: translateY(200px);
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 9999;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  ${({ $show }) =>
    $show &&
    css`
      transform: translateY(0);
      opacity: 1;
    `}
`;
const BotaoEnviar = styled.button`
  background-color: var(--cor-ativo);
  color: var(--cor-background);
  cursor: pointer;
  width: 100%;
`;
const BotaoConta = styled.button`
  border: 1px solid var(--cor-borda2);
  width: 100%;
  margin-bottom: 40px;
`;

export function CriarConta({ navegarPara }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [data, setData] = useState({dia: '', mes: '', ano: ''});
  const [idade, setIdade] = useState('');
  const [nome, setNome] = useState('');
  const [user, setUser] = useState('');
  const [erros, setErros] = useState({email: '', senha: '', data: '', idade: '', nome: '', user: ''});
  const [mensagemToast, setMensagemToast] = useState('');
  const [exibirToast, setExibirToast] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [contarCliques, setContarCliques] = useState(0);
  const [mostrarCampoIdade, setMostrarCampoIdade] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(false);
  const [exibirPernalonga, setExibirPernalonga] = useState(false);
  const [faseSucesso, setFaseSucesso] = useState('formulario');

  const handleInformacoes = (i) => {
    i.preventDefault();
    setMensagemToast('Pra encher o saco! 😊');
    setExibirToast(true);
  }
  const handleSaibaMais = (s) => {
    s.preventDefault();
    setMensagemToast('Não há nada mais a saber!');
    setExibirToast(true);
  }
  const handleTermos = (t) => {
    t.preventDefault();
    setMensagemToast('Nós sabemos que você não lerá os termos.. 😒');
    setExibirToast(true);
  }
  const handlePrivacidade = (p) => {
    p.preventDefault();
    setMensagemToast('Esquece privacidade, você já vendeu sua alma!');
    setExibirToast(true);
  }
  const handleCookies = (c) => {
    c.preventDefault();
    setMensagemToast('Eu não te engordo, só engordo a ficha que os sites têm sobre você! 😉');
    setExibirToast(true);
  }
  const handlePrivacidade2 = (p2) => {
    p2.preventDefault();
    setMensagemToast('Privacidade é uma ilusão, aceite!');
    setExibirToast(true);
  }
  const handleTemConta = (tc) => {
    tc.preventDefault();
    setMensagemToast('Tá fazendo o que aqui então?');
    setExibirToast(true);
  }
  const handleAjuda = (a) => {
    a.preventDefault();
    setActiveTooltip(!activeTooltip);
  }
  const handlePrivacidade3 = (p3) => {
    p3.preventDefault();
    setMensagemToast('Nós vendemos! 🤑');
    setExibirToast(true);
  }

  const handleEnviar = (e) => {
    e.preventDefault();
    let errosDetetados = {};
    if (!email.trim()) {errosDetetados.email = 'Insira um número de celular ou endereço de email válido.';
    } else if (erros.email && erros.email !== ' ') {errosDetetados.email = erros.email;}
    if (!senha.trim()) {errosDetetados.senha = 'Insira uma combinação de pelo menos seis números, letras, sinais de pontuação e caracteres especiais.';
    } else if (erros.senha) {errosDetetados.senha = erros.senha;}
    if (mostrarCampoIdade) {
      if (!idade.trim() && Number(idade) < 6) {errosDetetados.idade = 'Parece que você inseriu informações incorretas. Use sua idade verdadeira.';}
      if (!idade.trim()) {errosDetetados.idade = 'Insira a sua idade.'};
    } else {
      if (!data.dia || !data.mes || !data.ano.trim()) errosDetetados.data = 'Selecione sua data de nascimento. Você poderá alterar quem pode ver isso depois.';}
    if (data.ano.trim() && Number(data.ano) > 2021) {
      setContarCliques(prev => prev + 1);
      errosDetetados.data = 'Parece que você inseriu informações incorretas. Use sua data de nascimento verdadeira.';
      if(contarCliques >= 1){
        console.log(setMostrarCampoIdade(true));
      }
    }
    if (!user.trim()) {errosDetetados.user = 'Selecione um nome de usuário para sua conta.';} 
    else if (user.toLowerCase() === 'admin') {errosDetetados.user = 'O nome de usuário admin não está disponível.';}
    setErros(errosDetetados);
    if (Object.keys(errosDetetados).length > 0) {
      setExibirPernalonga(Date.now());
      return;
    }
    alert('Conta criada com sucesso! Clique "ok" para continuar.');
    setFaseSucesso('videoHarry');
  };

  const validarEmail = () => {
    if (!email.trim()) {
      setErros(prev => ({...prev, email: ''}));
      return; 
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const apenasNumeros = email.replace(/\D/g, '');
    const telefoneValido = apenasNumeros.length >= 9 && apenasNumeros.length <= 11;
    const ehEmailValido = emailRegex.test(email);
    if (!ehEmailValido && !telefoneValido) {
      setErros(prev => ({...prev, email: 'Insira um número de celular ou endereço de email válido.'}));
    } else {
      setErros(prev => ({...prev, email: ' '}));
    }
  };

  const handleUser = (u) => {
    const valor = u.target.value;
    setUser(valor);
    if (!valor.trim()) {
      setErros(prev => ({ ...prev, user: '' }));
      return; 
    }
    if (valor.toLowerCase() === 'admin') {
      setErros(prev => ({...prev, user: 'O nome de usuário admin não está disponível.'}));
      } else {
      setErros(prev => ({...prev, user: ''}));
    }
  };

  const handleSenha = (e) => {
    const valor = e.target.value;
    setSenha(valor);

    if (!valor) {
      setErros(prev => ({ ...prev, senha: '' }));
      return;
    }

    const feiticos = [
      'crucio', 'imperio', 'legilimens', 'oclumência', 'obliviate',
      'estupefaça', 'protego', 'expecto patronum', 'sectumsempra', 'petrificus totalus',
      'accio', 'nox', 'wingardium leviosa',  'reparo', 'riddikulus', 'stupefy', 'incendio',
      'alohomora', 'lumos', 'expelliarmus', 'avada kedavra'
    ];

    const feiticosProibidos = [
      'alohomora', 'lumos', 'expelliarmus', 'avada kedavra'
    ]

    const temNumero = /\d/.test(valor);
    const temLetra = /[a-zA-Z]/.test(valor);
    const temMaiuscula = /[A-Z]/.test(valor);
    const temMinuscula = /[a-z]/.test(valor);
    const temEspecial = /[^a-zA-Z0-9\s]/.test(valor);
    const temFeitico = feiticos.some(feitico => valor.toLowerCase().includes(feitico));
    const temFeiticoProibido = feiticosProibidos.some(feitico => valor.toLowerCase().includes(feitico));
    const temHexa = valor.includes('2026');
    const tamanhoAtual = valor.length;
    const temQuantidadeDeDigitos = valor.includes(String(tamanhoAtual));

    if (valor.length < 6) {
      setErros(prev => ({ ...prev, senha: 'No mínimo 6 dígitos.' }));
    } else if (!temNumero) {
      setErros(prev => ({ ...prev, senha: 'Tem que ter um número.' }));
    } else if (!temLetra) {
      setErros(prev => ({ ...prev, senha: 'Tem que ter uma letra.' }));
    } else if (!temMaiuscula) {
      setErros(prev => ({ ...prev, senha: 'Tem que ter uma letra maiúscula.' }));
    } else if (!temMinuscula) {
      setErros(prev => ({ ...prev, senha: 'Tem que ter uma letra minúscula.' }));
    } else if (!temEspecial) {
      setErros(prev => ({ ...prev, senha: 'Tem que ter um caractere especial (ex: !, @, #).' }));
    } else if (!temFeitico) {
      setErros(prev => ({ ...prev, senha: 'Tem que ter um feitiço do Harry Potter.' }));
    } else if (temFeiticoProibido) {
      setErros(prev => ({ ...prev, senha: 'Esse não! 🪄' }));
    } else if (!temHexa) {
      setErros(prev => ({ ...prev, senha: 'Tem que ter o ano em que o Brasil ganhou o hexa.' }));
    } else if (!temQuantidadeDeDigitos) {
      setErros(prev => ({ ...prev, senha: 'Tem que ter o número correspondente à quantidade total de caracteres!' }));
    } else {
      setErros(prev => ({ ...prev, senha: '' }));
    }
  };

  const handleLimpar = (campo) => {
    if (campo === 'email') setEmail('');
    if (campo === 'senha') setSenha('');
    if (campo === 'idade') setIdade('');
    if (campo === 'nome') setNome('');
    if (campo === 'user') setUser('');

    setErros(prev => ({ ...prev, [campo]: '' }));
  };

  if (faseSucesso !== 'formulario') {
    return (
      <VideoTelaCheia>
        {faseSucesso === 'videoHarry' ? (
          <Video src="/videos/harry.mov" autoPlay onEnded={() => setFaseSucesso('videoEnd')} />
        ) : (
          <Video src="/videos/end.mp4" autoPlay />
        )}
      </VideoTelaCheia>
    );
  }
  return (
    <TelaCheia>
      <Container>
        <BotaoRedondo onClick={() => navegarPara('login')}><Icones.ArrowBack size={24} className="iconeArrow" /></BotaoRedondo>
        <Meta><Icones.Meta size={18} className="iconeMeta" /><Paragrafo>Meta</Paragrafo></Meta>
        <Titulo2>Comece a usar o Instagram</Titulo2>
        <Paragrafo>Cadastre-se para ver fotos e vídeos dos seus amigos.</Paragrafo>
        <Titulo3>Número de celular ou email</Titulo3>
        <Selecao>
          {erros.email ? (
            <InputErro type="user" placeholder="Número de celular ou email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validarEmail} />
          ) : (
            <Input type="user" placeholder="Número de celular ou email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validarEmail} />
          )}
          {email.length > 0 && (
            <button type="button" className="x" onClick={() => handleLimpar('email')}><Icones.X size={25}/></button>
          )}
        </Selecao>
        {erros.email && erros.email !== ' ' && (<MensagemErro><IconeAlerta size={18} />{erros.email}</MensagemErro>)}
        <Paragrafo>Você poderá receber notificações enviadas por nós.&nbsp;<Link href="#informacoes" onClick={handleInformacoes}>Saiba por que pedimos suas informações de contato</Link></Paragrafo>
        <Titulo3>Senha</Titulo3>
        <Input as="div">
          <Selecao>
            {erros.senha ? (
              <InputErro type={mostrarSenha ? "text" : "password"} placeholder="Senha" value={senha} onChange={handleSenha} />
            ) : (
              <InputSenha type={mostrarSenha ? "text" : "password"} placeholder="Senha" value={senha} onChange={handleSenha} />
            )}
            {senha.length > 0 && (
              <button type="button" className="botaoOlho" onClick={() => setMostrarSenha(!mostrarSenha)}>
                {mostrarSenha ? (<Icones.Visivel size={20} />) : (<Icones.Escondido size={20} />)}
              </button>
            )}
          </Selecao>
          {erros.senha && <MensagemErro><IconeAlerta size={18} />{erros.senha}</MensagemErro>}
        </Input>
        {!mostrarCampoIdade ? (
        <SecaoData>
          <Data>
            <Titulo3>Data de nascimento</Titulo3>
            <BotaoAjuda type="button" onClick={handleAjuda}><Icones.Ajuda size={25} /></BotaoAjuda>
            {activeTooltip && (
              <Balao>
                <Paragrafo>Ao informar sua data de nascimento, você ajuda a melhorar os recursos e anúncios que vê e a manter a comunidade do Instagram segura. Você pode encontrar sua data de nascimento nas configurações da conta.&nbsp;
                  <Link href="#privacidade3" onClick={handlePrivacidade3}>Saiba como usamos suas informações na nossa Política de Privacidade.</Link>
                </Paragrafo>
              </Balao>
            )}
          </Data>
          <SelectWrapper $erro={!!erros.data}>
            <Select name="dia" defaultValue="" value={data.dia} onChange={(e) => setData({...data, dia: e.target.value})}>
              <option value="" disabled hidden>Dia</option>
              {Array.from({ length: 31 }, (_, i) => (<option key={i + 1} value={i + 1}>{i + 1}</option>))}
            </Select>
            <Select name="mes" defaultValue="" value={data.mes} onChange={(e) => setData({...data, mes: e.target.value})}>
              <option value="" disabled hidden>Mês</option>
              <option value="1">janeiro</option>
              <option value="2">fevereiro</option>
              <option value="3">março</option>
              <option value="4">abril</option>
              <option value="5">maio</option>
              <option value="6">junho</option>
              <option value="7">julho</option>
              <option value="8">agosto</option>
              <option value="9">setembro</option>
              <option value="10">outubro</option>
              <option value="11">novembro</option>
              <option value="12">dezembro</option>
            </Select>
            <Select name="ano" defaultValue="" value={data.ano} onChange={(e) => setData({...data, ano: e.target.value})}>
              <option value="" disabled hidden>Ano</option>
              {Array.from({ length: 107 }, (_, i) => {const ano = 2026 - i; return <option key={ano} value={ano}>{ano}</option>;})}
            </Select>
          </SelectWrapper>
          {erros.data && <MensagemErro>{erros.data}</MensagemErro>}
        </SecaoData>
        ) : (
          <SecaoData>
          <Data>
            <Titulo3>Idade</Titulo3>
            <BotaoAjuda type="button" onClick={handleAjuda}><Icones.Ajuda size={25} /></BotaoAjuda>
            {activeTooltip && (<Balao as="p">Confirmar sua idade</Balao>)}
            <Link href="#data" onClick={() => setMostrarCampoIdade(!mostrarCampoIdade)}>Usar data de nascimento</Link>
          </Data>
          <Selecao>
            {erros.idade ? (
              <InputErro type="number" placeholder="Sua idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
            ) : (
              <Input type="number" placeholder="Sua idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
            )}
            {idade.length > 0 && (
              <button type="button" className="x" onClick={() => handleLimpar('idade')}><Icones.X size={25}/></button>
            )}
          </Selecao>
          {erros.idade && <MensagemErro><IconeAlerta size={18} />{erros.idade}</MensagemErro>}
          </SecaoData>
        )}
        <Titulo3>Nome</Titulo3>
        <Selecao>
          <Input type="text" placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
          {nome.length > 0 && (
            <button type="button" className="x" onClick={() => handleLimpar('nome')}><Icones.X size={25}/></button>
          )}
        </Selecao>
        <Titulo3>Nome de usuário</Titulo3>
        <Selecao>
          {erros.user ? (
            <InputErro type="text" placeholder="Nome de usuário" value={user} onChange={handleUser} />
          ) : (
            <InputUser type="text" placeholder="Nome de usuário" value={user} onChange={handleUser} />
          )}
          {user.length > 0 && (
            user.toLowerCase() === 'admin' ? (
              <button type="button" className="x" onClick={() => handleLimpar('user')}><Icones.X size={25}/></button>
            ) : (
              <Icones.Verificado size={25} className="verificado"/>
            )
          )}
        </Selecao>
        {erros.user && <MensagemErro><IconeAlerta size={18} />{erros.user}</MensagemErro>}
        <Paragrafo>As pessoas que usam nosso serviço podem ter carregado suas informações de contato no Instagram.&nbsp;<Link href="#saiba" onClick={handleSaibaMais}>Saiba mais</Link>.</Paragrafo>
        <Paragrafo>Ao tocar em Enviar, você concorda em criar uma conta e em seguir os&nbsp;
          <Link href="#termos" onClick={handleTermos}>Termos</Link>, a&nbsp;
          <Link href="#privacidade" onClick={handlePrivacidade}>Política de Privacidade</Link>&nbsp;e a&nbsp;
          <Link href="#cookies" onClick={handleCookies}>Política de Cookies</Link>&nbsp;do Instagram.</Paragrafo>
        <Paragrafo>A&nbsp;<Link href="#privacidade2" onClick={handlePrivacidade2}>Política de Privacidade</Link>&nbsp;descreve como podemos usar as informações que coletamos quando você cria uma conta. Por exemplo, usamos essas informações para fornecer, personalizar e melhorar nossos produtos, incluindo anúncios.</Paragrafo>
        <BotaoEnviar onClick={handleEnviar}>Enviar</BotaoEnviar>
        <BotaoConta onClick={handleTemConta}>Já tenho uma conta</BotaoConta>
        {exibirPernalonga > 0 && (
          <VideoPernalonga key={exibirPernalonga} src="/videos/pernalonga.mov" $show autoPlay onEnded={() => setExibirPernalonga(0)} />
        )}
        <Toast exibir={exibirToast} mensagem={mensagemToast} aoFechar={() => setExibirToast(false)} />
      </Container>
      <Footer />
    </TelaCheia>
  );
}