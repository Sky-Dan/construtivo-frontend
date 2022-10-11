// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Card, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'

const CardDescAtiv = () => {

  return (
    <Fragment>
      <Row>
        <Col md='12' lg='12'>
          <Card className='mb-1'>
            <CardBody>
              <CardTitle tag='h4'>Descrição da Atividade</CardTitle>
              <CardText>
                <p>Essa atividade é muito legal para as crianças aprenderem brincando.</p>
                <p>Com ela você conseguirá criar exercícios.</p>
                <p>Essa atividade é muito legal para as crianças aprenderem brincando.</p>
                <p>Essa atividade é muito legal para as crianças aprenderem brincando.</p>
                <p>Essa atividade é muito legal para as crianças aprenderem brincando.</p>
                <p>Essa atividade é muito legal para as crianças aprenderem brincando.</p>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CardDescAtiv
