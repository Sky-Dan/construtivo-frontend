import { Table, Label, Input } from 'reactstrap';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';

const notasUsers = () => {
  const { stage } = useParams();
  const [notas, setNotas] = useState([]);
  const [name, setName] = useState('');

  const handleResults = async () => {
    try {
      const results = await api.get(`/results/stage/${stage}?name=${name}`);
      setNotas(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleResults();
  }, [notas]);


  return (
    <>
      <div className="mt-5">
        <Label>Nome do aluno</Label>
        <Input
          className="mb-2"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <h1>Etapa {stage}</h1>
      {!notas ? null : (
        <Table responsive>
          <thead>
            <tr>
              <th>REGISTRO</th>
              <th>NOME</th>
              <th>ACERTOS</th>
              <th>DATA DE AVALIAÇÃO</th>
              <th>DATA DE SINCRONIZAÇÃO</th>
            </tr>
          </thead>
          <tbody>
            {notas.map((nota) => (
              <tr>
                <td>
                  <span className="align-middle">{nota.registration}</span>
                </td>
                <td>
                  <span className='align-middle'>{nota.name}</span>
                </td>
                <td>
                  <span className="align-middle">{nota.grade}</span>
                </td>
                <td>
                  <span className='align-middle'>{new Date(nota.avaliation_date).toLocaleString('pt-BR')}</span>
                </td>
                <td>
                  <span className='align-middle'>{new Date(nota.created_at).toLocaleString('pt-BR')}</span>
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
