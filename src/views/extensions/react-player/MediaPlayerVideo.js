// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Third Party Components
import ReactPlayer from 'react-player'

const MediaPlayerVideo = props => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>{props.title}</CardTitle>
      </CardHeader>
      <CardBody>
        <ReactPlayer
          width='100%'
          controls={true}
          className='react-player-video'
          url={props.url}
        />
      </CardBody>
    </Card>
  )
}

export default MediaPlayerVideo
