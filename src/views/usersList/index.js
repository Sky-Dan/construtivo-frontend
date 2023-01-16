import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { formatDateHour } from '../../utility/Utils';
import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast } from '../components/toasts/Error';

const usersList = () => {
  const [students, setStudents] = useState([]);
  const [modale, setModale] = useState(false);
  const [exclude, setExclude] = useState();

  const handleResults = async () => {
    try {
      const results = await api.get(`/students`);

      setStudents(results.data.students);
      console.log(students);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (register) => {
    try {
      await api.delete(`/students/${register}`)
      setModale(false);
      handleResults();
      toast.success(<SuccessToast description= 'Excluído com sucesso' />, {
        icon: false,
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error(<ErrorToast description={error.message} />, {
        icon: false,
        hideProgressBar: true,
      });
    }
  }

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
              <th>NÚMERO DE REGISTRO</th>
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
                  <br></br>
                  <Button outline color="danger" size="sm" onClick={ () => {
                      setModale(true)
                      setExclude(student.registration)
                    } }>Excluir</Button>
                </td>
                <Modal isOpen={modale}>
                  <ModalHeader>Deseja prosseguir?</ModalHeader>
                  <ModalBody>
                    Ao continuar, o estudante e todos os seus registros serão excluídos.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onClick={ () => deleteStudent(exclude) }>Excluir</Button>{' '}
                    <Button color="success" onClick={ () => setModale(false) }>Cancelar</Button>
                  </ModalFooter>
                </Modal>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default usersList;
