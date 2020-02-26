import axios from 'axios';

export function getToken() {
  return localStorage.getItem("token")
}

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token');
  return axios.create({
    headers: {
      authorization: getToken()
    },
    baseURL: 'http://localhost:5000'
  });
};