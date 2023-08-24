import React from 'react';
import { useHistory } from 'react-router-dom';

export default function RegistrationForm() {
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      ></link>
      
      <div className="container-fluid bg-dark text-light py-3">
        <header className="text-center">
          <h1 className="display-6">Welcome to BJSTS Cadastre-se</h1>
        </header>
      </div>
      <section className="container my-2 bg-dark w-50 text-light p-2">
        <form className="row g-3 p-3">
          <div className="col-md-4">
            <label htmlFor="validationDefault01" className="form-label">Primeiro nome</label>
            <input type="text" className="form-control" id="validationDefault01" value="Mark" required />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault02" className="form-label">Ultimo nome</label>
            <input type="text" className="form-control" id="validationDefault02" value="Otto" required />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">@</span>
              <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">Cep</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
      </section>
    </div>
  );
}