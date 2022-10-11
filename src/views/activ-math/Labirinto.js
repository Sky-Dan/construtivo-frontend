import { useState } from 'react';
import { Row, Col, Button, Collapse } from 'reactstrap';
import '@styles/react/libs/charts/apex-charts.scss';
import '@styles/base/pages/dashboard-ecommerce.scss';
import PlayerVideo from '../extensions/player-video';
import CardDescAtiv from '../ui-elements/cards/basic/CardDescAtiv';
import PerguntasLabirinto3 from './forms/formQuestionsLabirinto3';
import PerguntasLabirinto6 from './forms/formQuestionsLabirinto6';
import PerguntasLabirinto10 from './forms/formQuestionsLabirinto10';

const LabirintoMath = () => {
  const [isOpenQtd, setIsOpenQtd] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);

  const toggleQtd = () => {
    setIsOpenQtd(!isOpenQtd);
    if (isOpen3 === true) {
      setIsOpen3(false);
    }
    if (isOpen6 === true) {
      setIsOpen6(false);
    }
    if (isOpen10 === true) {
      setIsOpen10(false);
    }
  };

  const toggle3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen6(false);
  };

  const toggle6 = () => {
    setIsOpen3(false);
    setIsOpen6(!isOpen6);
  };
  const toggle10 = () => {
    setIsOpen3(false);
    setIsOpen6(false);
    setIsOpen10(!isOpen10);
  };

  return (
    <div id="dashboard-ecommerce">
      <Row className="match-height mt-3" id="ponte">
        <Col xl="12" md="12" xs="12">
          <h1>Labirinto</h1>
        </Col>
      </Row>
      <Row className="match-height mt-2">
        <Col x1="8" md="8" xs="12">
          <PlayerVideo url="https://youtu.be/ssyYftnl9Jk" />
        </Col>
        <Col x1="4" md="4" xs="12">
          <CardDescAtiv />
          <Row>
            <Col xl="6" md="6" xs="6">
              <Button href="#qtdPerguntas" color="primary" onClick={toggleQtd}>
                Criar Atividade
              </Button>
            </Col>
            <Col xl="6" md="6" xs="6">
              <Button
                color="primary"
                href="/activ-history/grades-labirinto-history"
              >
                Ver Notas
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Collapse isOpen={isOpenQtd} id="qtdPerguntas">
        <Row className="match-height mt-3">
          <Col xl="6" md="6" xs="6" className="mt-1">
            <h4>Selecione a quantidade de perguntas que você deseja:</h4>
          </Col>
          <Col xl="2" md="2" xs="2">
            <Button color="warning" onClick={() => toggle3()} href="#3">
              3
            </Button>
          </Col>
          <Col xl="2" md="2" xs="2">
            <Button color="warning" onClick={() => toggle6()} href="#6">
              6
            </Button>
          </Col>
          <Col xl="2" md="2" xs="2">
            <Button color="warning" onClick={() => toggle10()} href="#10">
              10
            </Button>
          </Col>
        </Row>
      </Collapse>
      <Collapse isOpen={isOpen3}>
        <PerguntasLabirinto3 id="3" />
      </Collapse>
      <Collapse isOpen={isOpen6}>
        <PerguntasLabirinto6 id="6" />
      </Collapse>
      <Collapse isOpen={isOpen10}>
        <PerguntasLabirinto10 id="10" />
      </Collapse>
      <hr />
    </div>
  );
};

export default LabirintoMath;
