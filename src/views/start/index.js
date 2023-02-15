import { useState } from 'react';
import { Input, Button, Label } from 'reactstrap';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast, WarningToast} from '../components/toasts/Error';

const start = () => {
  const [register, setRegister] = useState('');

  const check = () => {
    api.get('/sessions').catch(() => {
          localStorage.removeItem('@ajinomotoSafeLife:userData');
          toast.warning(<WarningToast description= 'Sessão Expirada' />, {
            icon: false,
            hideProgressBar: true,
          })
          window.location.reload();
        }
      );
  }

  check();

  const postBriefing = async (avaliation) => {
    try {

      if (register !== '') {
    
        await api.post(`/results/`, {
          stage: 7,
          registration: register,
          grade: avaliation,
        });

        toast.success(<SuccessToast description="Avalição enviada!" />, {
          icon: false,
          hideProgressBar: true,
        });
      }
    } catch {
      console.log(error);
      toast.error(<ErrorToast description="Avaliação inválida!" />, {
        icon: false,
        hideProgressBar: true,
      });
      window.location.reload()
    }
  };

  return (
    <>
      <h1>Etapa de KYT</h1>
      <p>Digite o registro do aluno que irá ser avaliado na etapa de KYT.</p>
      <div className="mt-5">
        <Label>Registro do Aluno</Label>
        <Input
          className="mb-2"
          type="text"
          onChange={(e) => setRegister(e.target.value)}
        />
        <div className="m-5 text-center">
        <Button
          className="m-4 mt-3"
          color="primary"
          onClick={() => postBriefing('O briefing está de acordo')}
        >
          Satisfatório
        </Button>
        <Button
          className="m-4 mt-3"
          color="primary"
          onClick={() => postBriefing('O briefing não está de acordo')}
        >
          Não Satisfatório
        </Button>
        </div>
      </div>
    </>
  );
};

export default start;
