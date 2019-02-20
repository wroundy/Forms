import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
  state= {
    firstName: "",
    lastName: "",
    Age: "",
    Email: "",
    userName: "",
    psw: "",
    pswRepeat: "",
}

handleSubmit = event => {
    event.preventDefault()
    if( this.state.psw === this.state.pswRepeat ){
      console.log(this.state) 
    }
    else {
      alert( 'passwords fo not match' )
    }
    
    
}
    render() {
        return(
          <fieldset>
            <legend>Register</legend>
            <form onSubmit = {this.handleSubmit}>
            <div className="container">
              <p>Please fill in this form to create an account.</p>
              <hr/>
      
              <label for="firstName"><b>First Name</b></label>
              <input type="text" placeholder="Enter First Name" name="firstName" required
                    value = {this.state.firstName} 
                    onChange = { (event) => this.setState ({firstName : event.target.value }) } />
              
              <label for="lastName"><b>Last Name</b></label>
              <input type="text" placeholder="Enter Last Name" name="LastName" required
                    value = {this.state.lastName} 
                    onChange = { (event) => this.setState ({lastName : event.target.value }) } />
                <hr />

              <label for="Age"><b>Date of Birth</b></label>
              <input type="date" placeholder="Date of Birth" name="DateofBirth" required
                    value = {this.state.Age} 
                    onChange = { (event) => this.setState ({Age : event.target.value }) } />
                <hr />

              <label for="Email"><b>Email</b></label>
              <input type="text" placeholder="Email" name="email" required
                    value = {this.state.Email} 
                    onChange = { (event) => this.setState ({Email : event.target.value }) } />
                <hr />

              <label for="userName"><b>User Name</b></label>
              <input type="text" placeholder="User Name" name="userName" required
                    value = {this.state.userName} 
                    onChange = { (event) => this.setState ({userName : event.target.value }) } />
                <hr />  

              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required
                    value = {this.state.psw} 
                    onChange = { (event) => this.setState ({psw : event.target.value }) } />
                
              <label for="pswRepeat"><b>Password Confirmation</b></label>
              <input type="password" placeholder="Password Confirmation" name="pswRepeat" required
                    value = {this.state.pswRepeat} 
                    onChange = { (event) => this.setState ({pswRepeat : event.target.value }) } />
      
              <hr/>
          
              <button type="submit" class="registerbtn">Register</button>
            </div>
          
            <div className="container signin">
              <p>Already have an account? <Link to="/logIn">LogIn</Link>.</p>
            </div>
          </form>
      </fieldset>
        )
    }

}
 

  

export default Register;