import React, { Component } from 'react'

class ContactUs extends Component {
  constructor(props){
    super(props)

    this.state={
       firstname: ""
    }
  }

  handleSubmit = (event ) =>{
      alert(`First Name: ${this.state.firstname} 
      Last Name: ${this.state.lastname} 
      Email: ${this.state.email} 
      Password: ${this.state.password} 
      Feed Back: ${this.state.feedback}`)
  }

  handaleFirstname = (event) =>{
          this.setState({
            firstname: event.target.value
          })
  }

  handaleLastname = (event) =>{
    this.setState({
      lastname: event.target.value
    })
}

handaleEmail = (event) =>{
  this.setState({
    email: event.target.value
  })
}

handalePassword = (event) =>{
  this.setState({
    password: event.target.value
  })
}

handaleFeedback = (event) =>{
  this.setState({
    feedback: event.target.value
  })
}

  render() {
    return (
      <div>
        <h1 style={{color:"blue" , marginTop:"75px" , marginLeft:"575px"}}>Sorceo Tech</h1><br></br>
          <form onSubmit={this.handleSubmit} className="container" style={{border:"1px solid black" , width:"450px" , height:"375px"}}>
                  <h2 style={{color:"green"}}>Contact Us</h2><br/>
                  <label><h3> First Name</h3></label> &nbsp; &nbsp; &nbsp;
                  <input type='text' value={this.state.firstname} onChange={this.handaleFirstname} required></input><br/>
                  <label><h3>Last Name</h3></label> &nbsp; &nbsp; &nbsp;
                  <input type='text' value={this.state.lasttname} onChange={this.handaleLastname} required></input><br/>
                  <label><h3>Email</h3></label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <input type='email' value={this.state.email} onChange={this.handaleEmail} required></input><br/>
                  <label><h3>Password</h3></label> &nbsp; &nbsp; &nbsp; &nbsp;
                  <input type='password' value={this.state.password} onChange={this.handalePassword} required></input><br/>
                  <label><h3>Feed Back</h3></label> &nbsp;
                  <textarea value={this.state.feedback} onChange={this.handaleFeedback} required></textarea><br/><br/>
                  <button type='submit' style={{background:'green', color:'white', borderRadius:'1em'}}>Send</button>
          </form>
      </div>
    )
  }
}

export default ContactUs
