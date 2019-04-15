import React, { Component } from 'react'
import { getAlbums } from './imagedata'
import { Link } from 'react-router-dom'

class AlbumsContainer extends Component {
  state = {
    albums: [],
  }

  componentDidMount() {
    getAlbums().then(albums => {
      this.setState({
        albums: albums
      })
    })
  }
  render(){
    return(
      <div className="albums-images-layout">
        {
          this.state.albums.map(image => (
            <Link to={"/album/"+image.id}><button className="item-box" key={"album-" + image.id}>{image.name } <br /> <span className="album">{"Album " + image.id}</span></button></Link>
          ))
        }
      </div>
    )
  }
}
export default AlbumsContainer
