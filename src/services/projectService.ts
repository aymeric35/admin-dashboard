import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getPosts() {
    return apiClient.get('/posts')
  },
}
