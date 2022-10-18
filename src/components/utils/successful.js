export const success = (setUserData, setIsAuthenticated, setLoading, res) => {
  const token = res.headers.get('x-auth-token')
  localStorage.setItem('token', token)
  setUserData(res.data)
  setIsAuthenticated(true)
  setLoading(false)
}
