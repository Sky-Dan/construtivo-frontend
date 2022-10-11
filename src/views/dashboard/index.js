// import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
// import { ThemeColors } from '@src/utility/context/ThemeColors'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const AnalyticsDashboard = () => {
  // const { colors } = useContext(ThemeColors),
  //   trackBgColor = '#e9ecef'

  //   console.log(trackBgColor)

  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height'>
        <Col xl='12' md='12' xs='12'>
          <CardCongratulations />
        </Col>
      </Row>
    </div>
  )
}

export default AnalyticsDashboard
