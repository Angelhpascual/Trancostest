import React, { useState } from "react";

const LoginForm = () => {
  //State has email password and successMessage
  const [login, setLogin] = useState({
    email: "",
    password: "",
    successMessage: null,
  });

  //Element destrubtion
  const { email, password, successMessage } = login;

  //Function for handleChange

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Ingrese su email"
            value={email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-check"></div>
        <button
          type="submit"
          className="btn btn-primary"
          //onClick={handleSubmitClick}
        >
          Log In
        </button>
      </form>
      <div
        className="alert alert-success mt-2"
        style={{ display: successMessage ? "block" : "none" }}
        role="alert"
      >
        {successMessage}
      </div>
      <div className="registerMessage">
        <span>Dont have an account? </span>
        <span
          className="loginText"
          //onClick={() => redirectToRegister()}
        >
          Register
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
