import { useState, useEffect } from 'react';
import styles from './Login.module.css';
import { Icones } from '../../utils/icons';
import { GradienteInstagram } from '../../components/GradienteInstagram/GradienteInstagram';
import { Footer } from '../../components/Footer/Footer';
import { Toast } from '../../components/Toast/Toast';

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
    <div className={styles.telaCheia}>
      <div className={styles.containerPrincipal}>
        <div className={styles.cardInstagram}>
          <div className={styles.logo}>
            <GradienteInstagram /><Icones.Instagram size={88} style={{ fill: "url(#insta-gradient)" }} />
          </div>
          <p className={styles.propaganda}>Veja momentos do dia a dia dos seus amigos próximos.</p>
          <img className={styles.imgPropaganda} src="/img/img.png" alt="Imagem de propaganda do Instagram" />
        </div>
        <div className={styles.cardLogin}>
          <p className={styles.entrarText}>Entrar no Instagram</p>
          {mostrarErroLogin && (
            <div className={styles.containerLoginInvalido}>
              <Icones.Alerta size={20} className="iconeAlerta" />
              <div className={styles.loginInvalido}>
                <p>As informações de login que você inseriu estão incorretas.</p>
                <a href="#recuperar" onClick={handleLoginInvalido}>Encontre sua conta e faça login.</a>
              </div>
            </div>
          )}
          <input type="user" placeholder="Número de celular, nome de usuário ou email" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
          <div className={styles.senha}>
            <input type={mostrarSenha ? "text" : "password"} placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} className={styles.inputSenha}/>
            {senha.length > 0 && (
              <button type="button" className="botaoOlho" onClick={() => setMostrarSenha(!mostrarSenha)}>
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
            <Icones.Facebook size={14} className="iconeFacebook" />
            Entrar com o Facebook</button>
          <button className={styles.criar} onClick={() => navegarPara('registrar')}>Criar nova conta</button>
          <div className="meta"><Icones.Meta size={18} className="iconeMeta" /><p>Meta</p></div>
        </div>
        <Toast exibir={exibirToast} mensagem={mensagemToast} aoFechar={() => setExibirToast(false)} />
      </div>
      <Footer />
    </div>
  );
}
