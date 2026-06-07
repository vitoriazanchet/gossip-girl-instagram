import { useState, useEffect } from 'react';
import styles from './CriarConta.module.css';
import { Icones } from '../../utils/icons';
import { Footer } from '../../components/Footer/Footer';
import { Toast } from '../../components/Toast/Toast';

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
      return;
    }
    alert('Bem-vindo! Conta criada com sucesso.');
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

  return (
    <div className={styles.telaCheia}>
      <div className={styles.container}>
        <button onClick={() => navegarPara('login')} className={styles.redondo}><Icones.ArrowBack size={24} className="iconeArrow" /></button>
        <div className={styles.meta}><Icones.Meta size={18} className="iconeMeta" /><p>Meta</p></div>
        <h2>Comece a usar o Instagram</h2>
        <p>Cadastre-se para ver fotos e vídeos dos seus amigos.</p>
        <h3>Número de celular ou email</h3>
        <div className={styles.selecao}>
          <input type="user" placeholder="Número de celular ou email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validarEmail} className={erros.email ? `${styles.input} ${styles.inputErro}` : styles.input} />
          {email.length > 0 && (
            <button type="button" className="x" onClick={() => handleLimpar('email')}><Icones.X size={25}/></button>
          )}
        </div>
        {erros.email && erros.email !== ' ' && (<span className={styles.mensagemErro}><Icones.Alerta size={18} className={styles.iconeAlerta} />{erros.email}</span>)}
        <p>Você poderá receber notificações enviadas por nós.&nbsp;<a href="#informacoes" className={styles.link} onClick={handleInformacoes}>Saiba por que pedimos suas informações de contato</a></p>
        <h3>Senha</h3>
        <div className={styles.input}>
          <div className={styles.selecao}>
            <input type={mostrarSenha ? "text" : "password"} placeholder="Senha" value={senha} onChange={handleSenha} className={erros.senha ? styles.inputErro : styles.inputSenha}/>
            {senha.length > 0 && (
              <button type="button" className="botaoOlho" onClick={() => setMostrarSenha(!mostrarSenha)}>
                {mostrarSenha ? (<Icones.Visivel size={20} />) : (<Icones.Escondido size={20} />)}
              </button>
            )}
          </div>
          {erros.senha && <span className={styles.mensagemErro}><Icones.Alerta size={18} className={styles.iconeAlerta} />{erros.senha}</span>}
        </div>
        {!mostrarCampoIdade ? (
        <div className={styles.secaoData}>
          <div className={styles.data}>
            <h3>Data de nascimento</h3>
            <button type="button" className={styles.botaoAjuda} onClick={handleAjuda}><Icones.Ajuda size={25} /></button>
            {activeTooltip && (
              <div className={styles.balao}>
                <p>Ao informar sua data de nascimento, você ajuda a melhorar os recursos e anúncios que vê e a manter a comunidade do Instagram segura. Você pode encontrar sua data de nascimento nas configurações da conta.&nbsp;
                  <a href="#privacidade3" className={styles.link} onClick={handlePrivacidade3}>Saiba como usamos suas informações na nossa Política de Privacidade.</a>
                </p>
              </div>
            )}
          </div>
          <div className={erros.data ? styles.selectErro : styles.select} >
            <select name="dia" defaultValue="" value={data.dia} onChange={(e) => setData({...data, dia: e.target.value})}>
              <option value="" disabled hidden>Dia</option>
              {Array.from({ length: 31 }, (_, i) => (<option key={i + 1} value={i + 1}>{i + 1}</option>))}
            </select>
            <select name="mes" defaultValue="" value={data.mes} onChange={(e) => setData({...data, mes: e.target.value})}>
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
            </select>
            <select name="ano" defaultValue="" value={data.ano} onChange={(e) => setData({...data, ano: e.target.value})}>
              <option value="" disabled hidden>Ano</option>
              {Array.from({ length: 107 }, (_, i) => {const ano = 2026 - i; return <option key={ano} value={ano}>{ano}</option>;})}
            </select>
          </div>
          {erros.data && <span className={styles.mensagemErro}>{erros.data}</span>}
        </div>
        ) : (
          <div className={styles.secaoData}>
          <div className={styles.data}>
            <h3>Idade</h3>
            <button type="button" className={styles.botaoAjuda} onClick={handleAjuda}><Icones.Ajuda size={25} /></button>
            {activeTooltip && (<p className={styles.balao}>Confirmar sua idade</p>)}
            <a href="#data" className={styles.link} onClick={() => setMostrarCampoIdade(!mostrarCampoIdade)}>Usar data de nascimento</a>
          </div>
          <div className={styles.selecao}>
            <input className={erros.idade ? styles.inputErro : styles.input} type="number" placeholder="Sua idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
            {idade.length > 0 && (
              <button type="button" className="x" onClick={() => handleLimpar('idade')}><Icones.X size={25}/></button>
            )}
          </div>
          {erros.idade && <span className={styles.mensagemErro}><Icones.Alerta size={18} className={styles.iconeAlerta} />{erros.idade}</span>}
          </div>
        )}
        <h3>Nome</h3>
        <div className={styles.selecao}>
          <input type="text" placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} className={styles.input} />
          {nome.length > 0 && (
            <button type="button" className="x" onClick={() => handleLimpar('nome')}><Icones.X size={25}/></button>
          )}
        </div>
        <h3>Nome de usuário</h3>
        <div className={styles.selecao}>
          <input type="text" placeholder="Nome de usuário" value={user} onChange={handleUser} className={erros.user ? styles.inputErro : styles.inputUser} />
          {user.length > 0 && (
            user.toLowerCase() === 'admin' ? (
              <button type="button" className="x" onClick={() => handleLimpar('user')}><Icones.X size={25}/></button>
            ) : (
              <Icones.Verificado size={25} className="verificado"/>
            )
          )}
        </div>
        {erros.user && <span className={styles.mensagemErro}><Icones.Alerta size={18} className={styles.iconeAlerta} />{erros.user}</span>}
        <p>As pessoas que usam nosso serviço podem ter carregado suas informações de contato no Instagram.&nbsp;<a href="#saiba" className={styles.link} onClick={handleSaibaMais}>Saiba mais</a>.</p>
        <p>Ao tocar em Enviar, você concorda em criar uma conta e em seguir os&nbsp;
          <a href="#termos" className={styles.link} onClick={handleTermos}>Termos</a>, a&nbsp;
          <a href="#privacidade" className={styles.link} onClick={handlePrivacidade}>Política de Privacidade</a>&nbsp;e a&nbsp;
          <a href="#cookies" className={styles.link} onClick={handleCookies}>Política de Cookies</a>&nbsp;do Instagram.</p>
        <p>A&nbsp;<a href="#privacidade2" className={styles.link} onClick={handlePrivacidade2}>Política de Privacidade</a>&nbsp;descreve como podemos usar as informações que coletamos quando você cria uma conta. Por exemplo, usamos essas informações para fornecer, personalizar e melhorar nossos produtos, incluindo anúncios.</p>
        <button className={styles.enviar} onClick={handleEnviar}>Enviar</button>
        <button className={styles.conta} onClick={handleTemConta}>Já tenho uma conta</button>
        <Toast exibir={exibirToast} mensagem={mensagemToast} aoFechar={() => setExibirToast(false)} />
      </div>
      <Footer />
    </div>
  );
}