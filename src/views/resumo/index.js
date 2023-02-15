import { Table, Input, Label } from 'reactstrap';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { toast } from 'react-toastify'
import { WarningToast } from '../components/toasts/Error';
// import { formatDateHour } from '../../utility/Utils';

const notasUsersResume = () => {
  const [registrations, setRegistrations] = useState([]);
  const [registration, setRegistration] = useState([]);
  const [group, setGroup] = useState([]);

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

  const handleResults = async () => {
    try {
      const results = await api.get(`/results`);
      setRegistrations([...results.data.results]);
    } catch (error) {
      console.log(error);
    }
  };

  function saveRegistro() {
    registrations.map((registro) => {
      if (
        registration.find((r) => r.registration === registro.registration) ===
        undefined
      ) {
        if (registro.registration) {
          registration.push({
            registration: registro.registration,
            name: Number(registro.name) ? null : String(registro.name),
            grade: Number(registro.grade) ? Number(registro.grade) : 0,
            briefing: Number(registro.grade) ? null : String(registro.grade),
            avaliation_date: String(new Date(registro.avaliation_date))
          });
        }
      } else {
        const index = registration.findIndex(
          (r) => r.registration === registro.registration
        );
        registration[index].grade += Number(registro.grade)
          ? Number(registro.grade)
          : 0;
      }
      setRegistration(registration);
      setGroup(registration);
    });
  }

  useEffect(() => {
    handleResults();
  }, [registration]);

  useEffect(() => {
    saveRegistro();
  }, [registrations]);
  return (
    <>

      <h1>Resumo</h1>
      {!group ? null : (
        <Table responsive>
          <thead>
            <tr>
              <th>REGISTRO</th>
              <th>NOME</th>
              <th>SOMA DOS ACERTOS</th>
              <th>BRIEFING</th>
              <th>DATA AVALIAÇÃO</th>
            </tr>
          </thead>
          <tbody>
            {group.map((regi) => (
              <tr>
                <td>
                  <span className="align-middle">{regi.registration}</span>
                </td>
                <td>
                  <span className="align-middle">{regi.name}</span>
                </td>
                <td>
                  <span className="align-middle">{regi.grade}</span>
                </td>
                <td>
                  <span className="align-middle">{regi.briefing}</span>
                </td>
                <td>
                  <span className="align-middle">{new Date(regi.avaliation_date).toLocaleString('pt-BR')}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default notasUsersResume;
