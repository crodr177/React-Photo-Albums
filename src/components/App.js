import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/base.css'
import Albums from './Albums'
import Album from './Album'
import Picture from './Picture'

class App extends Component {
  render() {
    return (
      <Router>
        <div id="main-container">
          <div>
            <Route exact path="/" component={Albums}/>
            <Route exact path="/album/:id" component={Album}/>
            <Route exact path="/picture/:id" component={Picture}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
