import {
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { toast } from 'react-toastify'
import { authentication } from '../../firebase-config'
import { http } from './httpService'
import { success } from './successful'

export const handleGoogleSignin = (
  setUserData,
  setIsAuthenticated,
  setLoading
) => {
  return async res => {
    setLoading(true)
    try {
      const { data } = await http.get(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${res.credential}`
      )
      const result = await http.post(
        import.meta.env.VITE_url + 'google-signin',
        data
      )
      success(setUserData, setIsAuthenticated, setLoading, result)
    } catch (err) {
      toast.error(
        'Something failed with google auth or User with this email already exist! Try login with passord instead.'
      )
      setLoading(false)
    }
  }
}

export function handleGithubSigninClick (setLoading) {
  return renderProps => {
    setLoading(true)
    renderProps.onClick()
  }
}

export const ongithubSuccess = (
  setLoading,
  setUserData,
  setIsAuthenticated
) => {
  return async res => {
    setLoading(true)
    try {
      const result = await http.post(import.meta.env.VITE_url + 'github-signin', res)
      success(setUserData, setIsAuthenticated, setLoading, result)
    } catch (error) {
      setLoading(false)
      toast.warn('Access not granted!. Try login instead')
    }
  }
}

export const ongithubFailure = setLoading => {
  return res => {
    setLoading(false)
  }
}

export const handleTwitter = (setUserData, setIsAuthenticated, setLoading) => {
  return async () => {
    const provider = new TwitterAuthProvider()
    setLoading(true)
    try {
      const { _tokenResponse } = await signInWithPopup(authentication, provider)
      const res = await http.post(
        import.meta.env.VITE_url + 'twitter-signin',
        _tokenResponse
      )
      success(setUserData, setIsAuthenticated, setLoading, res)
    } catch (err) {
      setLoading(false)
      toast.warn(
        'An error occured, Please check your internet connection or Try signin by another means:)'
      )
    }
  }
}

export const signInWithFacebook = (
  setUserData,
  setIsAuthenticated,
  setLoading
) => {
  return async () => {
    const provider = new FacebookAuthProvider()
    try {
      const { _tokenResponse } = await signInWithPopup(authentication, provider)
      const res = await http.post(
        import.meta.env.VITE_url + 'facebook-signin',
        _tokenResponse
      )
      success(setUserData, setIsAuthenticated, setLoading, res)
    } catch (err) {
      toast.warn(
        'An error occured, Please check your internet connection or Try signin by another means:)'
      )
    }
  }
}
