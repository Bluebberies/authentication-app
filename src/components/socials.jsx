import React, { useEffect } from "react";
import LoginGithub from "react-login-github";
import { http } from "./utils/httpService";

const Socials = ({
  handleGithubSigninClick,
  ongithubSuccess,
  ongithubFailure,
  handleGoogleSignin,
  handleTwitter,
  signInWithFacebook,
}) => {
  const google_clientId =
  import.meta.env.VITE_google_clientId;

  const github_client_id = import.meta.env.VITE_github_client_id;

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: google_clientId,
      callback: handleGoogleSignin,
    });

    google.accounts.id.renderButton(document.getElementById("goog"), {
      type: "icon",
      shape: "circle",
      width: "100px",
    });
  }, []);

  return (
    <div className="socials">
      <div id="goog"></div>
      <img src="/images/Twitter.svg" onClick={handleTwitter} alt="twitter" />
      <img
        src="/images/Facebook.svg"
        onClick={signInWithFacebook}
        alt="facebook"
      />
      <LoginGithub
        clientId={github_client_id}
        className="github-img"
        buttonText={<img src="/images/Gihub.svg" alt="github" />}
        render={(renderProps) => (
          <img
            onClick={() => handleGithubSigninClick(renderProps)}
            disabled={renderProps.disabled}
            src="/images/Gihub.svg"
            alt="github"
          />
        )}
        onSuccess={ongithubSuccess}
        onFailure={ongithubFailure}
      />
    </div>

  );
};

export default Socials;
