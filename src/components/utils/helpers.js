import { toast } from 'react-toastify'
import { http } from './httpService'
import validateEditedInfo from './editedInfoValidation'
import validateInputs from './validation'
import { success } from './successful'

export function setDark (setIsdark, isDark) {
  return () => {
    setIsdark(!isDark)
  }
}

export function handleCaretClick (setShowCaretDown, showCaretDown) {
  return () => {
    setShowCaretDown(!showCaretDown)
  }
}

export function handlePassword (setRegisterPassword, setLoginPassword) {
  return (e, page) => {
    if (page === 'register') {
      setRegisterPassword(e.target.value)
    } else {
      setLoginPassword(e.target.value)
    }
  }
}

export function logout (
  setIsAuthenticated,
  setShowCaretDown,
  setUserData,
  showCaretDown,
  setRegisterEmail,
  setRegisterPassword,
  setLoginEmail,
  setLoginPassword
) {
  return () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    setShowCaretDown(!showCaretDown)
    setRegisterEmail('')
    setRegisterPassword('')
    setLoginEmail('')
    setLoginPassword('')
    setUserData({
      name: '',
      photo: '',
      email: '',
      phone: '',
      bio: ''
    })
  }
}

export function handleEmail (
  setRegisterEmail,
  setLoginEmail,
  setEditedName,
  setEditedBio,
  setEditedPhone,
  setEditedEmail,
  setEditedPassword
) {
  return (e, page) => {
    if (page === 'register') {
      setRegisterEmail(e.target.value)
    } else if (page === 'login') {
      setLoginEmail(e.target.value)
    } else if (page === 'editName') {
      setEditedName(e.target.value)
    } else if (page === 'editBio') {
      setEditedBio(e.target.value)
    } else if (page === 'editPhone') {
      setEditedPhone(e.target.value)
    } else if (page === 'editEmail') {
      setEditedEmail(e.target.value)
    } else if (page === 'editPassword') {
      setEditedPassword(e.target.value)
    }
  }
}

export function handleFile (setLoading, setUserData, userData) {
  return async e => {
    setLoading(true)
    const token = localStorage.getItem('token')
    const fd = new FormData()
    if (e.target.files[0]) {
      fd.append('avatar', e.target.files[0], e.target.files[0].name)
      try {
        const { data } = await http.post(
          import.meta.env.VITE_url + 'uploadImage',
          fd,
          {
            headers: {
              'x-auth-token': token
            }
          }
        )
        setUserData({ ...userData, photo: data })
        setLoading(false)
      } catch (err) {
        toast.error('Something failed!')
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }
}

export function handledataEdit (
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
) {
  return async () => {
    const valueChanged =
      editedName || editedBio || editedPassword || editedPhone || editedEmail
    if (valueChanged) {
      if (
        validateEditedInfo(
          editedName,
          editedBio,
          editedPhone,
          editedEmail,
          editedPassword
        )
      ) {
        const token = localStorage.getItem('token')
        setLoading(true)
        const editedData = {
          name: editedName,
          bio: editedBio,
          password: editedPassword,
          phone: editedPhone,
          email: editedEmail
        }
        if (token) {
          try {
            const { data } = await http.post(
              import.meta.env.VITE_url + 'updateUser',
              editedData,
              {
                headers: {
                  'x-auth-token': token
                }
              }
            )
            setUserData(data)
            setLoading(false)
            toast.success('Updated')
            navigate('/profile', { replace: true })
            setEditedName('')
            setEditedBio('')
            setEditedPhone('')
            setEditedEmail('')
            setEditedPassword('')
          } catch (err) {
            toast.error(err.response.data)
            setLoading(false)
          }
        } else {
          toast.error('Something failed')
          setLoading(false)
        }
      }
    }
  }
}

export function handleSubmit (
  registerPassword,
  registerEmail,
  setUserData,
  setIsAuthenticated,
  setLoading,
  loginEmail,
  loginPassword
) {
  return async (e, page) => {
    e.preventDefault()

    if (page === 'register') {
      const { error } = validateInputs(registerEmail, registerPassword)
      if (error) {
        toast.error('Invalid Email or Password!')
      } else {
        try {
          const result = await http.post(
            import.meta.env.VITE_url + 'register',
            {
              email: registerEmail,
              password: registerPassword
            }
          )
          success(setUserData, setIsAuthenticated, setLoading, result)
        } catch (err) {
          toast.error(err.response.data)
        }
      }
    } else if (page === 'login') {
      const { error } = validateInputs(loginEmail, loginPassword)
      if (error) {
        toast.error('Invalid Email or Password!')
      } else {
        try {
          const result = await http.post(import.meta.env.VITE_url + 'login', {
            email: loginEmail,
            password: loginPassword
          })
          success(setUserData, setIsAuthenticated, setLoading, result)
        } catch (err) {
          toast.error(err.response.data)
        }
      }
    }
  }
}
