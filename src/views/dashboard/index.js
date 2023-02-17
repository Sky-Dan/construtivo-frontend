import { Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import '@styles/react/libs/charts/apex-charts.scss';
import '@styles/base/pages/dashboard-ecommerce.scss';
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal';
import { Box } from 'react-feather';
import { WarningToast } from '../components/toasts/Error';

const AnalyticsDashboard = () => {
  const color = 'dark';
  const check = () => {
    api.get('/sessions').catch(() => {
          localStorage.removeItem('@ajinomotoSafeLife:userData');
          toast.warning(<WarningToast description= 'Sua Sessão foi encerrada. Por favor faça novamente o login.' />, {
            icon: false,
            hideProgressBar: true,
          })
          window.location.reload();
        }
      );
  }

  check();
  return (
    <div id="dashboard-ecommerce">
      <Row className="match-height">
        <Col xl="12" md="12" xs="12">
          <h1>Relatórios</h1>
        </Col>
      </Row>
      <Row className="match-height">
        <Col xl="3" md="3" xs="12">
          <Link to="/resumo">
            <StatsHorizontal
              icon={<Box size={21} />}
              color={color}
              stats="Resumo"
              // statTitle="Etapa"
            />
          </Link>
        </Col>
        <Col xl="3" md="3" xs="12">
          <Link to="/reports/1">
            <StatsHorizontal
              icon={<Box size={21} />}
              color={color}
              stats="1 Etapa"
            />
          </Link>
        </Col>
        <Col xl="3" md="3" xs="12">
          <Link to="/reports/2">
            <StatsHorizontal
              icon={<Box size={21} />}
              color={color}
              stats="2 Etapa"
            />
          </Link>
        </Col>
        <Col xl="3" md="3" xs="12">
          <Link to="/reports/3">
            <StatsHorizontal
              icon={<Box size={21} />}
              color={color}
              stats="3 Etapa"
            />
          </Link>
        </Col>
        <Col xl="3" md="3" xs="12">
          <Link to="/reports/4">
            <StatsHorizontal
              icon={<Box size={21} />}
              color={color}
              stats="4 Etapa"
            />
          </Link>
        </Col>
        <Col xl="3" md="3" xs="12">
          <Link to="/reports/5">
            <StatsHorizontal
              icon={<Box size={21} />}
              color={color}
              stats="5 Etapa"
            />
          </Link>
        </Col>
        <Col xl="3" md="3" xs="12">
          <Link to="/reports/6">
            <StatsHorizontal
              icon={<Box size={21} />}
              color={color}
              stats="6 Etapa"
            />
          </Link>
        </Col>
        <Col xl="3" md="3" xs="12">
          <Link to="/reports/7">
            <StatsHorizontal
              icon={<Box size={21} />}
              color={color}
              stats="7 Etapa"
              // statTitle="Etapa"
            />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default AnalyticsDashboard;
