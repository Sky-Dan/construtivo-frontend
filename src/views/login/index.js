import { useState, Fragment } from 'react';
import Avatar from '@components/avatar';
import themeConfig from '@configs/themeConfig';
//import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import InputPasswordToggle from '@components/input-password-toggle';
//import { isObjEmpty } from '@utils'
import { Coffee } from 'react-feather';
import {
  CardTitle,
  CardBody,
  Card,
  Form,
  Input,
  FormGroup,
  Label,
  Button,
} from 'reactstrap';

//import api from '../../services/api/'

import './index.css';
import { handleConnect } from '../../redux/auth';

const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className="toastify-header">
      <div className="title-wrapper">
        <Avatar size="sm" color="success" icon={<Coffee size={12} />} />
        <h6 className="toast-title font-weight-bold">Welcome, {name}</h6>
      </div>
    </div>
    <div className="toastify-body">
      <span>
        You have successfully logged in as an {role} user to Vuexy. Now you can
        start to explore. Enjoy!
      </span>
    </div>
  </Fragment>
);

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    dispatch(
      handleConnect({
        userData: {
          email,
          password,
          kind: 'defaultUser',
        },
      })
    );
  };

  return (
    <div className="auth-wrapper auth-basic px-2">
      <div className="auth-inner my-3">
        <Card>
          <CardBody>
            <div className="title">
              <img src={themeConfig.app.appLogoImage} width="160" height="30" />
            </div>
            <div className="title">
              <CardTitle tag="h4" className="mb-1">
                Login
              </CardTitle>
            </div>
            <Form
              className="auth-login-form mt-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormGroup>
                <Label className="form-label" for="login-email">
                  Email
                </Label>
                <Input
                  autoFocus
                  type="email"
                  value={email}
                  id="login-email"
                  name="login-email"
                  placeholder="john@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Password
                  </Label>
                </div>
                <InputPasswordToggle
                  value={password}
                  id="login-password"
                  name="login-password"
                  className="input-group-merge"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button.Ripple type="submit" color="primary" block>
                Login
              </Button.Ripple>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;
