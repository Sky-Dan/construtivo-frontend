import { useState } from 'react';
import { Input, Button, Label } from 'reactstrap';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast } from '../components/toasts/Error';

const start = () => {
  const [register, setRegister] = useState('');

  const postRegister = async () => {
    try {
      await api.post(`/activity/start/${register}`);

      toast.success(
        <SuccessToast description="Registro enviado!" />,
        {
          icon: false,
          hideProgressBar: true,
        }
      );
    } catch (error) {
      console.log(error);
      toast.error(<ErrorToast description="Registrado inválido!" />, {
        icon: false,
        hideProgressBar: true,
      });
    }
  };

  return (
    <>
      <h1>Iniciar atividade</h1>
      <p>Digite o registro do aluno que irá iniciar a atividade.</p>
      <div className='mt-5'>
        <Label>Registro do Aluno</Label>
        <Input className="mb-2" type="text" onChange={(e) => setRegister(e.target.value)}/>
        <Button color="primary" onClick={() => postRegister()}>Iniciar</Button>
      </div>
    </>
  );
};

export default start;
