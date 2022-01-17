import {Component} from 'react'
import {BackImage, Container} from './styledComponents'

class PlayList extends Component {
  render() {
    return (
      <Container>
        <BackImage>
          <h1>Ed Sheeran</h1>
          <p>Singer</p>
        </BackImage>
      </Container>
    )
  }
}

export default PlayList
