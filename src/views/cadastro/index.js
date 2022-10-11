/* eslint-disable no-unused-vars */
import { useState, Fragment } from 'react';
import '@styles/base/pages/page-auth.scss';
import { useForm } from 'react-hook-form';
import InputPasswordToggle from '@components/input-password-toggle';
import CreatableSelect from 'react-select/creatable';
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
  // const [date, setDate] = useState('');

  async function onSubmit() {
    try {
      await api.post('/users', {
        name,
        email,
        password,
        role,
        school_id: '62e437521fc72c0ed1f9c752',
      });

      toast.success(
        <SuccessToast description="Professor criado com Sucesso!" />,
        {
          icon: false,
          hideProgressBar: true,
        }
      );
      history.push('/dash');
    } catch (error) {
      console.log(error);
      toast.error(<ErrorToast description="Error, there was an error " />, {
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
              Cadastre o Usuário
            </CardTitle>
            <CardText className="mb-2">
              Adicione os dados para cadastrar o usuário!
            </CardText>
            <Form className="auth-login-form mt-2">
              <FormGroup>
                <Label className="form-label" for="user-name">
                  Nome
                </Label>
                <Input
                  autoFocus
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
                  autoFocus
                  type="text"
                  value={register}
                  id="user-register"
                  name="user-register"
                  placeholder="000000"
                  onChange={(e) => setRegister(e.target.value)}
                />
                {/* <Label className="form-label mt-2" for="user-date">
                  Data
                </Label>
                <Input
                  autoFocus
                  type="text"
                  value={date}
                  id="user-date"
                  name="user-date"
                  placeholder="00/00/0000"
                  onChange={(e) => setDate(e.target.value)}
                /> */}
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
