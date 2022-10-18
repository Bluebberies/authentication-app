import UserInfo from "../UserInfo";

export function profileRoute(
  handleCaretClick,
  showCaretDown,
  isDark,
  setShowCaretDown,
  userData,
  logout,
  setIsAuthenticated,
  setUserData,
  setRegisterEmail,
  setRegisterPassword,
  setLoginEmail,
  setLoginPassword
) {
  return (
    <UserInfo
      handleCaretClick={handleCaretClick(setShowCaretDown, showCaretDown)}
      showCaretDown={showCaretDown}
      isDark={isDark}
      userData={userData}
      logout={logout(
        setIsAuthenticated,
        setShowCaretDown,
        setUserData,
        showCaretDown,
        setRegisterEmail,
        setRegisterPassword,
        setLoginEmail,
        setLoginPassword
      )}
    />
  );
}
