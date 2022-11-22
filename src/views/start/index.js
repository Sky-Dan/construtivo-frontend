import { useEffect, useState } from 'react';
import { Input, Button, Label } from 'reactstrap';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast } from '../components/toasts/Error';

const start = () => {
  const [register, setRegister] = useState('');
  const [grades, setGrades] = useState([]);
  const [situation, setSituation] = useState(false);
  const [available, setAvailable] = useState();
  const [canceled, setCanceled] = useState();

  const postRegister = async () => {
    try {
      await api.post(`/activity/start/${register}`);

      setCanceled(false);

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

  const postBriefing = async (avaliation) => {
    try {
      const student = await api.get('/activity/actual');

      await api.post(`/results/`, {
        stage: 7,
        registration: student.data.actual_student.registration,
        grade: avaliation,
      });

      toast.success(<SuccessToast description="Avalição enviada!" />, {
        icon: false,
        hideProgressBar: true,
      });
    } catch {
      console.log(error);
      toast.error(<ErrorToast description="Avaliação inválida!" />, {
        icon: false,
        hideProgressBar: true,
      });
    }
  };

  const cancelActivity = () => {
    setCanceled(true);
    setAvailable(false);
    setSituation(false);
  }

  const getGrades = async () => {
    try {
      const student = await api.get('/activity/actual');
      const results = await api.get(
        `/results/student/${student.data.actual_student.registration}`
      );
      setGrades(results.data.results);

      if (grades.length > 0 && grades.length < 7) {
        if (canceled === false) {
          setAvailable(false)
        }
      }

      if (grades.length > 0 && grades.length < 6) {
        setSituation(false);
      }

      grades.forEach((grade) => {
        if (grade.stage === 6) {
          if (canceled === false) {
            setSituation(true)
          }
        }

        if (grade.stage === 7) {
          setSituation(false);
          setAvailable(true);
        }
      });
    } catch (error) {
      console.log(error);
      toast.error(<ErrorToast description={error} />, {
        icon: false,
        hideProgressBar: true,
      });
    }
  };

  useEffect(() => {
    getGrades();
  }, [grades]);

  return available === true ? (
    <>
      <h1>Iniciar atividade</h1>
      <p>Digite o registro do aluno que irá iniciar a atividade.</p>
      <div className="mt-5">
        <Label>Registro do Aluno</Label>
        <Input
          className="mb-2"
          type="text"
          onChange={(e) => setRegister(e.target.value)}
        />
        <Button
          color="primary"
          onClick={() => {
            postRegister();
            setAvailable(false);
          }}
        >
          Iniciar
        </Button>
      </div>
    </>
  ) : situation === true ? (
    <>
      <div className="m-5 text-center">
        <h1>O briefing está de acordo?</h1>
        <Button
          className="m-4 mt-3"
          color="primary"
          onClick={() => postBriefing('O briefing está de acordo')}
        >
          Sim
        </Button>
        <Button
          className="m-4 mt-3"
          color="primary"
          onClick={() => postBriefing('O briefing não está de acordo')}
        >
          Não
        </Button>
      </div>
      <div className='m-5 text-center'>
        <Button className="m-4 mt-3" color="primary" onClick={
          () => cancelActivity()
          }
        >Cancelar Atividade</Button>
      </div>
    </>
  ) : (
    <>
      <h1>Aguardando Colaborador Iniciar Etapa de KYT</h1>
      <p>
        Quando o aluno terminar a etapa 6, disponibilizaremos a opção de
        avaliação.
      </p>
      <div className='m-5 text-center'>
        <Button className="m-4 mt-3" color="primary" onClick={
          () => cancelActivity()
          }
        >Cancelar Atividade</Button>
      </div>
    </>
  );
};

export default start;
