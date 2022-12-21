import React, { Component } from 'react'
import "./Submit.scss"

class Submit extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       value: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event){
    console.log(this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div className='Submit mr-5'>
        <form onSubmit={this.handleSubmit}>
          <div class="mr-5">
            <input 
            type="text" 
            class="form-control" 
            id="email" 
            aria-describedby="emailHelp"
            placeholder='email address'
            value={this.state.value}
            onChange={this.handleChange}>
            </input>
          </div>
        </form>
      </div>
    )
  }
}

export default Submit