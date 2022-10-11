import { Table } from 'reactstrap';
// import { useState, useEffect } from 'react';
// import { api } from '../../services/api';
import { useParams } from 'react-router-dom';

const notasUsers = () => {
  const { id } = useParams();
  //   const [students, setStudents] = useState([]);
  //   const { id } = useParams();
  //   const handleResults = async () => {
  //     try {
  //       const results = await api.get(`/results/activity/${id}`);

  //       setStudents(results.data.results);
  //       console.log(students);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     handleResults();
  //   }, []);
  return (
    <>
      <h1>Etapa {id}</h1>
      {/* {!students ? null : ( */}
      <Table responsive>
        <thead>
          <tr>
            <th>REGISTER NUMBER</th>
            <th>ACERTOS</th>
            <th>DATA</th>
          </tr>
        </thead>
        <tbody>
          {/* {students.map((student) => ( */}
          <tr>
            <td>
              <span className="align-middle">0</span>
            </td>
            <td>
              <span className="align-middle">10</span>
            </td>
            <td>
              <span className="align-middle">10/10/2010</span>
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </Table>
      {/* )} */}
    </>
  );
};

export default notasUsers;
