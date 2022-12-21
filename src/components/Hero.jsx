import React, { Component } from 'react'

export class Hero extends Component {
  render() {
    return (
      <div>
        <img 
        src={require("../images/hero-desktop.jpg")} 
        alt="hero" 
        className='img-fluid' 
        style={{height: "100vh", width: "100%"}}/>
      </div>
    )
  }
}

export default Hero