import axiosLibrary from 'axios';
import { getUserData } from '../../utility/Utils';

const user = getUserData();

export const api = axiosLibrary.create({
  baseURL: process.env.REACT_APP_API_URL,
});

if (user) {
    api.get('/sessions/', {
      headers: {
        authorization : `Bearer ${user.token}`
      }
    }).then(() => {
      api.defaults.headers.common['authorization'] = `Bearer ${user.token}`;
    }).catch(() => {
      localStorage.removeItem('@ajinomotoSafeLife:userData');
    })

}
