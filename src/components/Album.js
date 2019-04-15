import React, { Component } from 'react'
import { getAlbum } from './imagedata'
import { getAlbums } from './imagedata'
import { Link } from 'react-router-dom'

class AlbumContainer extends Component {

  getImage = (id) => {
    getAlbum(id).then(imageData => {
      this.setState({
        images: imageData.images
      })
    })
  }

  state = {
    images: [],
    albums: []
  }

  componentDidMount() {
    this.getImage(this.props.match.params.id)
    getAlbums().then(albums => {
      this.setState({
        albums: albums
      })
    })
  }

  componentWillReceiveProps(newprops) {
    if(newprops.match.params.id !== this.props.match.params.id) {
      this.getImage(newprops.match.params.id)
    }
  }

  render(){
    return (
      <div className="albums-images-layout">
        <div className="heading">
          <h2 className="header-2">{'Album ' + this.props.match.params.id}</h2>
          <div className="subtitles">
            {
              this.state.albums.map(album => (
                <Link className="back-albums" to={"/album/"+album.id}><p>{"Album " + album.id}</p></Link>
              ))
            }
          </div>
        </div>
        {
          this.state.images.map(item => (
            <div className="caption">
              <Link to={"/picture/"+item.id}>
                <img className="images" src={item.url}/>
              </Link>
              <p className="name">{item.name}</p>
              <p className="photographer">{"By: " + item.photographer}</p>
            </div>
          ))
        }
    </div> 
    )
  }
}
export default AlbumContainer