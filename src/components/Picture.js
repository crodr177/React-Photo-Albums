import React, { Component } from 'react'
import { getPicture, getPrevNext } from './imagedata'
import { Link } from 'react-router-dom'

class Picture extends Component {
  state = {
    picture: '',
    name: '',
    albumId: null,
    prev: null,
    next: null
  }

  selectedImage = (id) => {
    getPicture(id).then(pictureData => {
      const albumId = pictureData.albumId
      this.setState({
        picture: pictureData.url,
        name: pictureData.name,
        albumId: pictureData.albumId,
      })

      getPrevNext(albumId).then(data => {
        const currentIndex = data.findIndex(img => img.id === Number(id))

        let prev, next

        if(currentIndex === 0){
          next = data[currentIndex + 1].id
          prev = data[data.length - 1].id
        }
        else if(currentIndex === data.length - 1){
          prev = data[currentIndex - 1].id
          next = data[0].id
        }
        else {
          prev = data[currentIndex - 1].id
          next = data[currentIndex + 1].id
        }
        this.setState({
          prev, next
        })
      })
    })
  }

  componentWillReceiveProps(newprops) {
    if(newprops.match.params.id !== this.props.match.params.id) {
      this.getPicture(newprops.match.params.id)
    }
  }

  componentDidMount() {
    this.selectedImage(this.props.match.params.id)
  }

  render(){
    return (
      <div>
        <h2 className="header">{this.state.name}</h2>
        <Link to={'/album/' + this.state.albumId}><button className="back">Back</button></Link>
        <div className="image-view">
          <Link to={'/picture/' + this.state.prev}><button className="arrow">&#8592;</button></Link>
          <img className="big-image" src={this.state.picture}/>
          <Link to={'/picture/' + this.state.next}><button className="arrow">&#8594;</button></Link>
        </div>
    </div> 
    )
  }
}
export default Picture