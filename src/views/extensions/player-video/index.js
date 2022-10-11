// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import MediaPlayerVideo from '../react-player/MediaPlayerVideo'

// ** Custom Components
import ExtensionsHeader from '@components/extensions-header'

const PlayerVideo = props => {
  return (
    <Fragment>
      {/* <ExtensionsHeader
        title='React Player'
        subTitle='React Media Player'
        link='https://github.com/CookPete/react-player'
      /> */}
      <Row>
        <Col sm='12'>
          <MediaPlayerVideo title="Exemplo em Vídeo" url={props.url}/>
        </Col>
      </Row>
    </Fragment>
  )
}

export default PlayerVideo
