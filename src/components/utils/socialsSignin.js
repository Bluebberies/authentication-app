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
    console.log('success:', res.credential)
    try {
      const { data } = await http.get(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${res.credential}`
      )
      console.log(data)
      const result = await http.post(
        'https://evening-journey-52428.herokuapp.com/google-signin',
        data
      )
      // https://evening-journey-52428.herokuapp.com/
      // http://localhost:3030/google-signin
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
    console.log('hello')
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
      console.log(res.code)
      const result = await http.post('http://localhost:3030/github-signin', res)
      success(setUserData, setIsAuthenticated, setLoading, result)
    } catch (error) {
      setLoading(false)
      console.log(error)
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
        'http://localhost:3030/twitter-signin',
        _tokenResponse
      )
      console.log(res)
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
        'http://localhost:3030/facebook-signin',
        _tokenResponse
      )
      console.log(res)
      success(setUserData, setIsAuthenticated, setLoading, res)
    } catch (err) {
      toast.warn(
        'An error occured, Please check your internet connection or Try signin by another means:)'
      )
      console.log(err)
    }
  }
}
