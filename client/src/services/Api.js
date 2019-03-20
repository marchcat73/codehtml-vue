import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:5000/api/`,
    withCredentials: true,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}