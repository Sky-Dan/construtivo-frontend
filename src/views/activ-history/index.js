import { Row, Col } from 'reactstrap';
import '@styles/react/libs/charts/apex-charts.scss';
import '@styles/base/pages/dashboard-ecommerce.scss';
import Ponte from './Ponte';
import Labirinto from './Labirinto';

const ActivitiesHistory = () => {
  return (
    <div id="dashboard-ecommerce">
      <Row className="match-height">
        <Col xl="12" md="12" xs="12">
          <h3>Atividades História:</h3>
        </Col>
      </Row>
      <Ponte />
      <Labirinto />
    </div>
  );
};

export default ActivitiesHistory;
