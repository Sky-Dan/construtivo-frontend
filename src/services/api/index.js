import { toast } from 'react-toastify';
import axiosLibrary from 'axios';
import { getUserData } from '../../utility/Utils';
import { WarningToast } from '../../views/components/toasts/Error';


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
    toast.warning(<WarningToast description= 'Sua sessão foi encerrada. Por favor faça novamente login' />, {
      icon: false,
      hideProgressBar: true,
    });
  })
}
