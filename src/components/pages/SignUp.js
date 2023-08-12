import React from 'react';
import './SignUp.css'; // Importe seu arquivo de estilo personalizado (opcional)

export default function SignUpForm() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-image">
          <h2 className="card-heading">
            Login
            <br/>
            <small>Acesse sua conta</small>
          </h2>
        </div>
        <form className="card-form">
          <div className="input">
            <input
              type="text"
              className="input-field"
              defaultValue="Seu usuario"
              required
            />
            <label className="input-label">Usuario</label>
          </div>
          <div className="input">
            <input
              type="text"
              className="input-field"
              defaultValue="@gmail.com"
              required
            />
            <label className="input-label">Email</label>
          </div>
          <div className="input">
            <input
              type="password"
              className="input-field"
              required
            />
            <label className="input-label">Password</label>
          </div>
          <div className="action">
            <button className="action-button">Entrarr</button>
          </div>
        </form>
        <div className="card-info">
          <p>
            By signing up you are agreeing to our{' '}
            <a href="#">Terms and Conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
}