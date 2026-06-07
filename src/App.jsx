import { useState } from 'react';
import './index.css';
import { Login } from './pages/Login/Login';
import { CriarConta } from './pages/CriarConta/CriarConta';

function App() {
  const [telaAtual, setTelaAtual] = useState('login'); 

  return (
    <>
      {telaAtual === 'login' && <Login navegarPara={setTelaAtual} />}
      {telaAtual === 'registrar' && <CriarConta navegarPara={setTelaAtual} />}
    </>
  );
}
export default App;