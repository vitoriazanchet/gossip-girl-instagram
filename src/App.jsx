import { useState } from 'react';
import './index.css';
import { Login } from './pages/Login/Login';
import { CriarConta } from './pages/CriarConta/CriarConta';
import { Feed } from './pages/Feed/Feed';

function App() {
  const [telaAtual, setTelaAtual] = useState('login'); 

  return (
    <>
      {telaAtual === 'login' && <Login navegarPara={setTelaAtual} />}
      {telaAtual === 'registrar' && <CriarConta navegarPara={setTelaAtual} />}
      {telaAtual === 'feed' && <Feed navegarPara={setTelaAtual} />}
    </>
  );
}
export default App;