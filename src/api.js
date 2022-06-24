import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';


axios.defaults.baseURL = API_URL;
export function getUsers() {
  return axios.get(`/users`);
}