import { Row, Col, Label, Input, Button, Form } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast } from '../../components/toasts/Error';

const QuestionsPonte6 = () => {
  const [data, setData] = useState({
    pergunta1: '',
    resposta1certa: '',
    resposta1errada: '',
    pergunta2: '',
    resposta2certa: '',
    resposta2errada: '',
    pergunta3: '',
    resposta3certa: '',
    resposta3errada: '',
    pergunta4: '',
    resposta4certa: '',
    resposta4errada: '',
    pergunta5: '',
    resposta5certa: '',
    resposta5errada: '',
    pergunta6: '',
    resposta6certa: '',
    resposta6errada: '',
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  async function submit(e) {
    e.preventDefault();
    try {
      axios.post('https://sky-escola-api.herokuapp.com/activities', {
        teacher_id: '62968757997e5340bbe8d101',
        questions: {
          ponte: {
            pergunta1: data.pergunta1,
            resposta1certa: data.resposta1certa,
            resposta1errada: data.resposta1errada,
            pergunta2: data.pergunta2,
            resposta2certa: data.resposta2certa,
            resposta2errada: data.resposta2errada,
            pergunta3: data.pergunta3,
            resposta3certa: data.resposta3certa,
            resposta3errada: data.resposta3errada,
            pergunta4: data.pergunta4,
            resposta4certa: data.resposta4certa,
            resposta4errada: data.resposta4errada,
            pergunta5: data.pergunta5,
            resposta5certa: data.resposta5certa,
            resposta5errada: data.resposta5errada,
            pergunta6: data.pergunta6,
            resposta6certa: data.resposta6certa,
            resposta6errada: data.resposta6errada,
          },
        },
      });
      toast.success(
        <SuccessToast description="Questions upload was successfully" />,
        {
          icon: false,
          hideProgressBar: true,
        }
      );
    } catch (error) {
      console.log(error);
      toast.error(<ErrorToast description="Error, there was an error " />, {
        icon: false,
        hideProgressBar: true,
      });
    }
  }

  return (
    <>
      <Form onSubmit={(e) => submit(e)}>
        <Row className="match-height mt-3">
          <Col xl="12" md="12" xs="12">
            <Row className="match-height">
              <Col xl="4" md="4" xs="12">
                <div className="mb-2">
                  <Label className="form-label" for="pergunta1">
                    Pergunta 1:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.pergunta1}
                    id="pergunta1"
                    type="text"
                    placeholder="Digite a 1 pergunta..."
                  />
                </div>
              </Col>
              <Col xl="4" md="4" xs="6">
                <div className="mb-2">
                  <Label
                    className="form-label text-success"
                    for="resposta1certa"
                  >
                    Resposta 1 Certa:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.resposta1certa}
                    type="text"
                    id="resposta1certa"
                    placeholder="Digite a 1 resposta certa..."
                  />
                </div>
              </Col>
              <Col xl="4" md="4" xs="6">
                <div className="mb-2">
                  <Label
                    className="form-label text-danger"
                    for="resposta1errada"
                  >
                    Resposta 1 Errada:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.resposta1errada}
                    type="text"
                    id="resposta1errada"
                    placeholder="Digite a 1 resposta errada..."
                  />
                </div>
              </Col>
            </Row>
            <hr />
            <Row className="match-height">
              <Col xl="4" md="4" xs="12">
                <div className="mb-2">
                  <Label className="form-label" for="pergunta2">
                    Pergunta 2:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.pergunta2}
                    type="text"
                    id="pergunta2"
                    placeholder="Digite a 2 pergunta..."
                  />
                </div>
              </Col>
              <Col xl="4" md="4" xs="6">
                <div className="mb-2">
                  <Label
                    className="form-label text-success"
                    for="resposta2certa"
                  >
                    Resposta 2 Certa:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.resposta2certa}
                    type="text"
                    id="resposta2certa"
                    placeholder="Digite a 2 resposta certa..."
                  />
                </div>
              </Col>
              <Col xl="4" md="4" xs="6">
                <div className="mb-2">
                  <Label
                    className="form-label text-danger"
                    for="resposta2errada"
                  >
                    Resposta 2 Errada:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.resposta2errada}
                    type="text"
                    id="resposta2errada"
                    placeholder="Digite a 2 resposta errada..."
                  />
                </div>
              </Col>
            </Row>
            <hr />
            <Row className="match-height">
              <Col xl="4" md="4" xs="12">
                <div className="mb-2">
                  <Label className="form-label" for="pergunta3">
                    Pergunta 3:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.pergunta3}
                    type="text"
                    id="pergunta3"
                    placeholder="Digite a 3 pergunta..."
                  />
                </div>
              </Col>
              <Col xl="4" md="4" xs="6">
                <div className="mb-2">
                  <Label
                    className="form-label text-success"
                    for="resposta3certa"
                  >
                    Resposta 3 Certa:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.resposta3certa}
                    type="text"
                    id="resposta3certa"
                    placeholder="Digite a 3 resposta certa..."
                  />
                </div>
              </Col>
              <Col xl="4" md="4" xs="6">
                <div className="mb-2">
                  <Label
                    className="form-label text-danger"
                    for="resposta3errada"
                  >
                    Resposta 3 Errada:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.resposta3errada}
                    type="text"
                    id="resposta3errada"
                    placeholder="Digite a 3 resposta errada..."
                  />
                </div>
              </Col>
            </Row>
            <Row className="match-height">
              <Col xl="4" md="4" xs="12">
                <div className="mb-2">
                  <Label className="form-label" for="pergunta4">
                    Pergunta 4:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.pergunta4}
                    type="text"
                    id="pergunta4"
                    placeholder="Digite a 4 pergunta..."
                  />
                </div>
              </Col>
              <Col xl="4" md="4" xs="6">
                <div className="mb-2">
                  <Label
                    className="form-label text-success"
                    for="resposta4certa"
                  >
                    Resposta 4 Certa:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.resposta4certa}
                    type="text"
                    id="resposta4certa"
                    placeholder="Digite a 4 resposta certa..."
                  />
                </div>
              </Col>
              <Col xl="4" md="4" xs="6">
                <div className="mb-2">
                  <Label
                    className="form-label text-danger"
                    for="resposta4errada"
                  >
                    Resposta 4 Errada:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.resposta4errada}
                    type="text"
                    id="resposta4errada"
                    placeholder="Digite a 4 resposta errada..."
                  />
                </div>
              </Col>
            </Row>
            <Row className="match-height">
              <Col xl="4" md="4" xs="12">
                <div className="mb-2">
                  <Label className="form-label" for="pergunta5">
                    Pergunta 5:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.pergunta5}
                    type="text"
                    id="pergunta5"
                    placeholder="Digite a 5 pergunta..."
                  />
                </div>
              </Col>
              <Col xl="4" md="4" xs="6">
                <div className="mb-2">
                  <Label
                    className="form-label text-success"
                    for="resposta5certa"
                  >
                    Resposta 5 Certa:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.resposta5certa}
                    type="text"
                    id="resposta5certa"
                    placeholder="Digite a 5 resposta certa..."
                  />
                </div>
              </Col>
              <Col xl="4" md="4" xs="6">
                <div className="mb-2">
                  <Label
                    className="form-label text-danger"
                    for="resposta5errada"
                  >
                    Resposta 5 Errada:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.resposta5errada}
                    type="text"
                    id="resposta5errada"
                    placeholder="Digite a 5 resposta errada..."
                  />
                </div>
              </Col>
            </Row>
            <Row className="match-height">
              <Col xl="4" md="4" xs="12">
                <div className="mb-2">
                  <Label className="form-label" for="pergunta6">
                    Pergunta 6:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.pergunta6}
                    type="text"
                    id="pergunta6"
                    placeholder="Digite a 6 pergunta..."
                  />
                </div>
              </Col>
              <Col xl="4" md="4" xs="6">
                <div className="mb-2">
                  <Label
                    className="form-label text-success"
                    for="resposta6certa"
                  >
                    Resposta 6 Certa:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.resposta6certa}
                    type="text"
                    id="resposta6certa"
                    placeholder="Digite a 6 resposta certa..."
                  />
                </div>
              </Col>
              <Col xl="4" md="4" xs="6">
                <div className="mb-2">
                  <Label
                    className="form-label text-danger"
                    for="resposta6errada"
                  >
                    Resposta 6 Errada:
                  </Label>
                  <Input
                    onChange={(e) => handle(e)}
                    value={data.resposta6errada}
                    type="text"
                    id="resposta6errada"
                    placeholder="Digite a 6 resposta errada..."
                  />
                </div>
              </Col>
            </Row>
            <Button color="success" type="submit">
              Concluir
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default QuestionsPonte6;
