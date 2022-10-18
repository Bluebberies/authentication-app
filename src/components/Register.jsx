import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Socials from "./socials";

const Register = ({
  isDark,
  handleEmail,
  handlePassword,
  registerEmail,
  registerPassword,
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
      <div className="card">
        {" "}
        <h1 className={`headline ${darkMode()}`}>
          Join thousands of learners from around the world
        </h1>
        <p className={`sub-headline ${darkMode()}`}>
          Master web development by making real life projects. There are
          multiple paths for you to choose
        </p>
        <form onSubmit={(e) => handleSubmit(e, "register")}>
          <div className="inputs">
            <i className="fa-solid fa-envelope"></i>
            <input
              className={darkMode()}
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => handleEmail(e, "register")}
              value={registerEmail}
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
              onChange={(e) => handlePassword(e, "register")}
              value={registerPassword}
              minLength={5}
              required
            />
          </div>
          <button type="submit">Start coding now</button>
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
            Already a member? <Link to="/login">Login</Link>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
