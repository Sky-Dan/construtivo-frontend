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

  // const getResults = async () => {
  //   try {
  //     const student = await api.get('/activity/actual');
  //     const results = await api.get(`/results/student/${student.registration}`);

  //     results.array.forEach(result => {
  //       if (result.stage === 7) {
  //         return true;
  //       }        
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(<ErrorToast description={error}/>, {
  //       icon: false,
  //       hideProgressBar: true,
  //     });
  //   }
  // };

  // if (getResults()) {
  //   return (
  //     <>
  //       <div className='m-5'>
  //       <h1>O briefing está de acordo?</h1>

  //       </div>
  //     </>
  //   )
  // }
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
