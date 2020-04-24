import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiZWRnYXIiLCJpYXQiOjE1ODc3NDU1MTUsImV4cCI6MTU4Nzc0OTExNX0.2ezal3GkfVlvdb6TnT4AK4YHLxAYBisfYVoZ-BsamFE'

const apiClient = axios.create({
  baseURL: `http://localhost:3300/api/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'auth-token': token
  },
  timeout: 10000
})

export default {
  register(values) {
    return apiClient.post('/auth/register', values)
  },
  login(values) {
    return apiClient.post('/auth/login', values)
  },
  getJokes() {
    return apiClient.get('/jokes')
  }
}