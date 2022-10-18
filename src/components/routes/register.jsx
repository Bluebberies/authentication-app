import Register from "../Register";

export function registerRoute(
  isDark,
  handleEmail,
  setRegisterEmail,
  setLoginEmail,
  setEditedName,
  setEditedBio,
  setEditedPhone,
  setEditedEmail,
  setEditedPassword,
  registerPassword,
  registerEmail,
  setUserData,
  setIsAuthenticated,
  setLoading,
  loginEmail,
  loginPassword,
  setRegisterPassword,
  setLoginPassword,
  handlePassword,
  signInWithFacebook,
  handleTwitter,
  handleSubmit,
  handleGoogleSignin,
  handleGithubSigninClick,
  ongithubFailure,
  ongithubSuccess,
) {
  return (
    <Register
      isDark={isDark}
      handleEmail={handleEmail(
        setRegisterEmail,
        setLoginEmail,
        setEditedName,
        setEditedBio,
        setEditedPhone,
        setEditedEmail,
        setEditedPassword
      )}
      handlePassword={handlePassword(setRegisterPassword, setLoginPassword)}
      registerEmail={registerEmail}
      registerPassword={registerPassword}
      handleSubmit={handleSubmit(
        registerPassword,
        registerEmail,
        setUserData,
        setIsAuthenticated,
        setLoading,
        loginEmail,
        loginPassword
      )}
      handleGoogleSignin={handleGoogleSignin(
        setUserData,
        setIsAuthenticated,
        setLoading
      )}
      handleGithubSigninClick={handleGithubSigninClick(setLoading)}
      ongithubSuccess={ongithubSuccess(
        setLoading,
        setUserData,
        setIsAuthenticated
      )}
      ongithubFailure={ongithubFailure(setLoading)}
      handleTwitter={handleTwitter(setUserData, setIsAuthenticated, setLoading)}
      signInWithFacebook={signInWithFacebook(
        setUserData,
        setIsAuthenticated,
        setLoading
      )}
    />
  );
}
