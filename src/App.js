import React, { useState } from "react";
import Header from "./components/Header/Header";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <RegistrationForm />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
