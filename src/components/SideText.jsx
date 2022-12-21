import React, { Component } from 'react'
import "./SideText.scss"

class SideText extends Component {
  render() {
    return (
      <div className='SideText'>
          <div className='UpperText display-3'>
              <span style={{fontFamily : 'quicksand', fontSize: "3rem", color:"#BD9190"}}>WE'RE</span><br />
              COOMING<br />
              SOON
             
          </div>
          <div className='LowerText'>
            <p>
              Hello fellow shoppers! We're currently building our new<br />
              fashion store. Please submit  your email below to stay<br />
              up-to-date with our announcement and launch deals!  
            </p>
          </div>
      </div>
    )
  }
}

export default SideText