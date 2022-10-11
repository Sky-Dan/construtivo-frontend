import { Row, Col } from 'reactstrap';
import '@styles/react/libs/charts/apex-charts.scss';
import '@styles/base/pages/dashboard-ecommerce.scss';
import TableNotas from '../../tables/reactstrap/TableNotas';

const GradesPonteHistory = () => {
  return (
    <div id="dashboard-ecommerce">
      <Row className="match-height">
        <Col xl="12" md="12" xs="12">
          <h3>Notas Ponte História:</h3>
        </Col>
      </Row>
      <Row className="match-height mt-3" id="labirinto">
        <Col xl="12" md="12" xs="12">
          <TableNotas />
        </Col>
      </Row>
    </div>
  );
};

export default GradesPonteHistory;
