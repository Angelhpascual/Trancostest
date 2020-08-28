import React, { useState } from "react";
import Error from "../Error/Error";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./RegistrationForm.css";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../constants/apiConstants";

const RegistrationForm = (props) => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
  });

  //State for an Error
  const [error, setError] = useState(false);

  //Function that handles onChange event to access the .target.value
  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  //Function that handles the submit button
  const handleSubmitClick = (e) => {
    e.preventDefault();

    //Validate the form
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError(true);
      return;
    }
    //If the form passes the validation
    setError(false);
    if (password === confirmPassword) {
      sendDataToServer();
    } else {
      setError(true);
      return;
    }
  };
  const redirectToLogin = () => {
    props.history.push("/login");
  };

  //Function that handles the send data to DB
  const sendDataToServer = () => {
    if (email.length && password.length) {
      const payload = {
        email: { email },
        password: { password },
      };
      console.log(payload);
    }
  };

  //Extracting the values
  const { email, password, confirmPassword, successMessage } = register;

  return (
    <div className="container">
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form onSubmit={handleSubmitClick}>
          <div className="form-group text-left mt-2 ">
            <label>Dirección Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Introduzca Email..."
              name="email"
              value={email}
              onChange={handleChange}
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group text-left">
            <label>Contraseña:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left">
            <label>Confirmación contraseña:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirmar Contraseña"
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-2"
            onClick={() => handleSubmitClick}
          >
            Registrar
          </button>
        </form>
        {error ? (
          <Error message="* Las contraseñas no coinciden *" />
        ) : (
          <Error message="Todos los campos son obligatorios" />
        )}
      </div>
      <div className="mt-2">
        <span>Already have an account? </span>
        <span className="loginText" onClick={() => redirectToLogin()}>
          Login here
        </span>
      </div>
    </div>
  );
};

export default withRouter(RegistrationForm);
