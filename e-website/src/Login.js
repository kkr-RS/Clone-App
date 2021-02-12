import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (Event) => {
    Event.preventDefault(); //this stop refresh!!
    //do login logic...

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in,redirect to homepage...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (Event) => {
    Event.preventDefault(); //this stop refresh!!
    //do register logic...

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user and logged in..,redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(Event) => setEmail(Event.target.value)}
            type="e-mail"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(Event) => setPassword(Event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign in
          </button>

          <p>
            By signing-in you agree to the condition of use and sale. Please see
            our Privacy Notice, our cookies notice and our internet-based ads
            notice.
          </p>

          <button onClick={register} className="login__registerButton">
            Create Your Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
