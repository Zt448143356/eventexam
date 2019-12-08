import axios from "./axios";
export function Login(email,password) {
  return axios({
    url:'/login',
    method:'post',
    params:{
      email,
      password
    }
  })
}

export function Register(formData) {
  return axios({
    url:'/register',
    method: 'post',
    params:{
      email:formData.email,
      password:formData.pass,
      name:formData.name,
      headImg:formData.imageUrl
    }
  })
}

export function Logout(email) {
  return axios({
    url:'/logout',
    method:'post',
    params:{
      email
    }
  })
}
