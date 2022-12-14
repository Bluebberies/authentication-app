import axios from 'axios'
import { toast } from 'react-toastify'

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500

  if (!expectedError) {
    toast.error('An unexpected error occurrred')
  }

  return Promise.reject(error)
})

export const http = {
  post: axios.post,
  get: axios.get
}
