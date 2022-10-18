import EditInfo from "../EditInfo";

export function editRoute(
  handleCaretClick,
  setShowCaretDown,
  showCaretDown,
  isDark,
  userData,
  logout,
  setIsAuthenticated,
  setUserData,
  setRegisterEmail,
  setRegisterPassword,
  setLoginEmail,
  setLoginPassword,
  handleEmail,
  setEditedName,
  setEditedBio,
  setEditedPhone,
  setEditedEmail,
  setEditedPassword,
  handleFile,
  setLoading,
  editedName,
  editedBio,
  editedPassword,
  editedPhone,
  editedEmail,
  handledataEdit,
  navigate
) {
  return (
    <EditInfo
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
      handleInputs={handleEmail(
        setRegisterEmail,
        setLoginEmail,
        setEditedName,
        setEditedBio,
        setEditedPhone,
        setEditedEmail,
        setEditedPassword
      )}
      handleFile={handleFile(setLoading, setUserData, userData)}
      handledataEdit={handledataEdit(
        editedName,
        editedBio,
        editedPassword,
        editedPhone,
        editedEmail,
        setLoading,
        setUserData,
        setEditedName,
        setEditedBio,
        setEditedPhone,
        setEditedEmail,
        setEditedPassword,
        navigate
      )}
    />
  );
}
