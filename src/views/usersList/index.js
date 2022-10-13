import { Table } from 'reactstrap';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { formatDateHour } from '../../utility/Utils';
// import { useParams } from 'react-router-dom';
const usersList = () => {
  //   const { id } = useParams();
  const [students, setStudents] = useState([]);

  const handleResults = async () => {
    try {
      const results = await api.get(`/students`);

      setStudents(results.data.students);
      console.log(students);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleResults();
  }, []);
  return (
    <>
      <h1>Lista de Usuários</h1>
      {!students ? null : (
        <Table responsive>
          <thead>
            <tr>
              <th>REGISTER NUMBER</th>
              <th>NOME</th>
              <th>DATA DA AVALIAÇÃO</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr>
                <td>
                  <span className="align-middle">{student.registration}</span>
                </td>
                <td>
                  <span className="align-middle">{student.name}</span>
                </td>
                <td>
                  <span className="align-middle">
                    {formatDateHour(student.avaliation_date)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default usersList;
