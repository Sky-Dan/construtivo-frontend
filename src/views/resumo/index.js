import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

const notasUsersResume = () => {
  const [registrations, setRegistrations] = useState([]);
  const [registration, setRegistration] = useState([]);
  const [group, setGroup] = useState([]);
  // const [briefing, setBriefing] = useState([]);

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
            grade: Number(registro.grade) ? Number(registro.grade) : 0,
            briefing: Number(registro.grade) ? null : registro.grade
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
  }, []);

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
              <th>SOMA DOS ACERTOS</th>
              <th>BRIEFING</th>
            </tr>
          </thead>
          <tbody>
            {group.map((regi) => (
              <tr>
                <td>
                  <span className="align-middle">{regi.registration}</span>
                </td>
                <td>
                  <span className="align-middle">{regi.grade}</span>
                </td>
                <td>
                  <span className="align-middle">{regi.briefing}</span>
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
