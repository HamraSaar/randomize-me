import axios from 'axios'

const BASE_URL = ''
const TIME_OUT = 20000

export const ApiEndpoints = {
  getContact: () => `https://randomuser.me/api/`
}

const Api = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: {
    'Content-Type': 'application/json',
  }
})

export default Api
