import axios from 'axios';

const api = axios.create({
  baseURL: 'https://react-node-app-test.herokuapp.com'
})

export default api;
