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
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState();

  const roleOptions = [
    { value: 'admin', label: 'admin' },
    { value: 'teacher', label: 'teacher' },
  ];

  // ** On form submit if there are no errors then go to next step
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
                <Label className="form-label" for="teacher-name">
                  Nome
                </Label>
                <Input
                  autoFocus
                  type="text"
                  value={name}
                  id="teacher-name"
                  name="teacher-name"
                  placeholder="John Doe"
                  onChange={(e) => setName(e.target.value)}
                />
                {/* <Label className="form-label mt-2" for="teacher-password">
                  Password
                </Label>
                <InputPasswordToggle
                  value={password}
                  id="teacher-password"
                  name="teacher-password"
                  className="input-group-merge"
                  onChange={(e) => setPassword(e.target.value)}
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
