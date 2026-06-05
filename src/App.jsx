import { useState, useEffect } from 'react';
import styles from './App.module.css';
import { Icones } from './utils/icons';
import { GradienteInstagram } from './components/GradienteInstagram';
import { Footer } from './components/Footer/Footer';
import imagemPropaganda from './assets/img.png';

function App() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [fraseAtual, setFraseAtual] = useState('');
  const [exibirBalao, setExibirBalao] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarErroLogin, setMostrarErroLogin] = useState(false);
  const botaoLiberado = usuario.length >= 1 && senha.length >= 6;
  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === 'admin' && senha === 'admin1') {
      alert('Login efetuado com sucesso!');
      setMostrarErroLogin(false);
      } else {
      setMostrarErroLogin(true);
    }
  };
  const handleEsqueceuSenha = (s) => {
    s.preventDefault();
    setFraseAtual('Não sou eu que vou te lembrar!');
    setExibirBalao(true);
    
  }
  const handleFacebook = (f) => {
    f.preventDefault();
    setFraseAtual('Login com Facebook indisponível no momento! Por favor, tente novamente mais tarde.');
    setExibirBalao(true);
  }
  const handleLoginInvalido = (l) => {
    l.preventDefault();
    setFraseAtual('Operação indisponível no momento! Por favor, tente novamente mais tarde.');
    setExibirBalao(true);
  }

  useEffect(() => {
    if (exibirBalao) {
      const timer = setTimeout(() => {
        setExibirBalao(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [exibirBalao, fraseAtual]);
  
  return (
    <div className={styles.telaCheia}>
      <div className={styles.containerPrincipal}>
        <div className={styles.cardInstagram}>
          <div className={styles.logo}>
            <GradienteInstagram /><Icones.Instagram size={87} style={{ fill: "url(#insta-gradient)" }} />
          </div>
          <p className={styles.propaganda}>Veja momentos do dia a dia dos seus amigos próximos.</p>
          <img className={styles.imgPropaganda} src={imagemPropaganda} alt="Imagem de propaganda do Instagram" />
        </div>
        <div className={styles.cardLogin}>
          <p className={styles.entrarText}>Entrar no Instagram</p>
          {mostrarErroLogin && (
            <div className={styles.containerLoginInvalido}>
              <Icones.Alerta size={20} className={styles.iconeAlerta} />
              <div className={styles.loginInvalido}>
                <p>As informações de login que você inseriu estão incorretas.</p>
                <a href="#recuperar" className={styles.loginInvalidoLink} onClick={handleLoginInvalido}>Encontre sua conta e faça login.</a>
              </div>
            </div>
          )}
          <input type="user" placeholder="Número de celular, nome de usuário ou email" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
          <div className={styles.senha}>
            <input type={mostrarSenha ? "text" : "password"} placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} className={styles.inputSenha}/>
            {senha.length > 0 && (
              <button type="button" className={styles.botaoOlho} onClick={() => setMostrarSenha(!mostrarSenha)}>
                {mostrarSenha ? (
                  <Icones.Visivel size={20} />
                ) : (
                  <Icones.Escondido size={20} />
                )}
              </button>
            )}
          </div>
          <button className={`${styles.entrar} ${botaoLiberado ? styles.entrarAtivo : ''}`} disabled={!botaoLiberado} onClick={handleLogin}>Entrar</button>
          <button onClick={handleEsqueceuSenha}>Esqueceu a senha?</button>
          <button className={styles.facebook} onClick={handleFacebook}>
            <Icones.Facebook size={14} className={styles.iconeFacebook} />
            Entrar com o Facebook</button>
          <button className={styles.criar}>Criar nova conta</button>
          <div className={styles.meta}>
            <Icones.Meta size={18} className={styles.iconeMeta} />
            <p>Meta</p>
          </div>
        </div>
        <div className={`${styles.toast} ${exibirBalao ? styles.show : ''}`}>
          <p>{fraseAtual}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App
