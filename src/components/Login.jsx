import React from "react";
import Socials from "./socials";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Login = ({
  isDark,
  handleEmail,
  handlePassword,
  loginEmail,
  loginPassword,
  handleSubmit,
  handleGithubSigninClick,
  handleGoogleSignin,
  ongithubSuccess,
  ongithubFailure,
  handleTwitter,
  signInWithFacebook,
}) => {
  function darkMode() {
    return isDark ? "dark" : "";
  }

  return (
    <div className={`App ${darkMode()}`}>
      <div className="card login">
        {" "}
        <h1 className={`headline ${darkMode()}`}>Login</h1>
        <form onSubmit={(e) => handleSubmit(e, "login")}>
          <div className="inputs">
            <i className="fa-solid fa-envelope"></i>
            <input
              className={darkMode()}
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => handleEmail(e, "login")}
              value={loginEmail}
              required
            />
          </div>
          <div className="inputs">
            <i className="fa-solid fa-lock"></i>
            <input
              className={darkMode()}
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => handlePassword(e, "login")}
              value={loginPassword}
              minLength={5}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="alt-login">
          <p>or continue with these social profile</p>
          <Socials
            handleGoogleSignin={handleGoogleSignin}
            ongithubFailure={ongithubFailure}
            ongithubSuccess={ongithubSuccess}
            handleGithubSigninClick={handleGithubSigninClick}
            handleTwitter={handleTwitter}
            signInWithFacebook={signInWithFacebook}
          />
          <p className="login">
            Don’t have an account yet? <Link to="/">Register</Link>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
