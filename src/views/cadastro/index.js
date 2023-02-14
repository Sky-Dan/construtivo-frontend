import { useState } from 'react';
import '@styles/base/pages/page-auth.scss';
import DateTimePicker from 'react-datetime-picker';
import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast } from '../components/toasts/Error';
import { api } from '../../services/api';
import { useHistory, Link } from 'react-router-dom';

import {
  CardTitle,
  CardBody,
  CardText,
  Card,
  Form,
  Input,
  FormGroup,
  Label,
  Button,
} from 'reactstrap';

const createUser = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [register, setRegister] = useState('');
  const [picker, setPicker] = useState(new Date());
  console.log(setPicker);

  async function onSubmit() {
    try {
      await api.post('/students', {
        name,
        registration: register,
        avaliation_date: picker,
      });

      toast.success(<SuccessToast description="User criado com Sucesso!" />, {
        icon: false,
        hideProgressBar: true,
      });
      history.push('/dash');
    } catch (error) {
      console.log(error);
      toast.error(<ErrorToast description="Erro: Usuário não criado!" />, {
        icon: false,
        hideProgressBar: true,
      });
    }
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Card className="mb-0">
          <CardBody>
            <CardTitle tag="h4" className="mb-1">
              Cadastre o Aluno
            </CardTitle>
            <CardText className="mb-2">
              Adicione os dados para cadastrar o aluno!
            </CardText>
            <Form className="auth-login-form mt-2">
              <FormGroup>
                <Label className="form-label" for="user-name">
                  Nome
                </Label>
                <Input
                  type="text"
                  value={name}
                  id="user-name"
                  name="user-name"
                  placeholder="John Doe"
                  onChange={(e) => setName(e.target.value)}
                />
                <Label className="form-label mt-2" for="user-register">
                  Registro
                </Label>
                <Input
                  type="text"
                  value={register}
                  id="user-register"
                  name="user-register"
                  placeholder="000000"
                  onChange={(e) => setRegister(e.target.value)}
                />
                <Label className="form-label mt-2" for="date-time-picker">
                  Data da Avaliação
                </Label>
                <div>
                  <DateTimePicker
                    disableClock={true}
                    locale='pt-BR'
                    value={picker}
                    onChange={(date) => setPicker(date)}
                  />
                </div>
              </FormGroup>
              <Button color="primary" onClick={() => onSubmit()}>
                Cadastrar
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default createUser;
