import React, { useState } from 'react';
import './ContactForm.modules.css'

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name.length <= 5 || !emailIsValid(email)) {
      setErrorMessage('Por favor verifique su información nuevamente');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage(`Gracias ${name}, te contactaremos pronto vía email`);
      console.log('Datos enviados:', { name, email });
    }
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className='form'>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleFormSubmit}>
        <label>
          Nombre:  
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
