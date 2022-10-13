import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';

const notasUsers = () => {
  const { stage } = useParams();
  const [notas, setNotas] = useState([]);

  const handleResults = async () => {
    try {
      const results = await api.get(`/results/stage/${stage}`);
      setNotas(results.data.results);
      console.log(notas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleResults();
  }, []);

  useEffect(() => {
    console.log(notas);
  }, [notas]);

  return (
    <>
      <h1>Etapa {stage}</h1>
      {!notas ? null : (
        <Table responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>ACERTOS</th>
            </tr>
          </thead>
          <tbody>
            {notas.map((nota) => (
              <tr>
                <td>
                  <span className="align-middle">{nota.student_id}</span>
                </td>
                <td>
                  <span className="align-middle">{nota.grade}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default notasUsers;
