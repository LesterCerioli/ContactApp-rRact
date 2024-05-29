import React, { useState } from 'react';
import Switch from 'react-switch';
import './App.css';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isMale, setIsMale] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    alert(`Nome: ${name}\nTelefone: ${phone}\nGênero: ${isMale ? 'Masculino' : 'Feminino'}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Telefone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
      </div>
      <div className="gender-switch">
        <span>Masculino</span>
        <Switch
          checked={!isMale}
          onChange={() => setIsMale(!isMale)}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
        />
        <span>Feminino</span>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Formulário de Contato</h1>
        <Form />
      </header>
    </div>
  );
}

export default App;
