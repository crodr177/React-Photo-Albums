import React, { Component } from 'react'
import { getPicture } from './imagedata'
import { Link } from 'react-router-dom'

class Picture extends Component {
  state = {
    picture: '',
    name: ''
  }

  selectedImage = (id) => {
    getPicture(id).then(pictureData => {
      this.setState({
        picture: pictureData.url,
        name: pictureData.name
      })
    })
  }

  componentDidMount() {
    this.selectedImage(this.props.match.params.id)
  }

  componentWillReceiveProps(newprops) {
    if(newprops.match.params.id !== this.props.match.params.id) {
      this.getPicture(newprops.match.params.id)
    }
  }

  render(){
    return (
      <div>
        <h2 className="header">{this.state.name}</h2>
        <Link to='/'><button className="back">Back</button></Link>
        <img className="big-image" src={this.state.picture}/>
    </div> 
    )
  }
}
export default Picture