import { toast } from 'react-toastify'

export default function validateEditedInfo (name, bio, phone, email, password) {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (name.length > 0 && name.length < 5) {
    toast.error('Name shoule be at least 5 characters long')
    return false
  } else if (bio.length > 0 && bio.length < 10) {
    toast.error('Bio shoule be at least 10 characters long')
    return false
  } else if (phone.length && !phoneRegex.test(phone)) {
    toast.error('Invalid Phone Number')
    return false
  } else if (email.length && !mailRegex.test(email)) {
    toast.error('Invalid Email')
    return false
  } else if (password.length > 0 && password.length < 5) {
    toast.error('Password shoule be at least 5 characters long')
    return false
  } else {
    return true
  }
}
