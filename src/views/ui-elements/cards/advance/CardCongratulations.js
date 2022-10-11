// ** Icons Imports
import { Award } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardBody, CardText } from 'reactstrap'

// ** Images
// import decorationLeft from '@src/assets/images/elements/decore-left.png'
// import decorationRight from '@src/assets/images/elements/decore-right.png'

const CardCongratulations = () => {
  return (
    <Card className='card-congratulations'>
      <CardBody className='text-center'>
        {/* <img className='congratulations-img-left' src={decorationLeft} alt='decor-left' />
        <img className='congratulations-img-right' src={decorationRight} alt='decor-right' /> */}
        {/* <Avatar icon={<Award size={28} />} className='shadow' color='primary' size='xl' /> */}
        <div className='text-center'>
          <h1 className='mb-1 text-white'>Bem Vindo</h1>
          <CardText className='m-auto w-75'>
            <p>Em disciplinas você encontrará a sua e clicando nela abrirá a página para desenvolvimento das atividades.</p>
          </CardText>
        </div>
      </CardBody>
    </Card>
  )
}

export default CardCongratulations
