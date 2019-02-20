import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class login extends Component {
    state= {
        userName: "",
        Psw: "",
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        
    }

    render() {
        return (
        <fieldset>
            <legend>Log In</legend>
            <form >
                <div class="container">

                    <label for="userName"><b>User Name</b></label>
                    <input type="text" placeholder="User Name" name="userName" required 
                    value = {this.state.userName} 
                    onChange = { (event) => this.setState ({userName : event.target.value }) } />

                    <br />
                    <label for="Psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required 
                    value = {this.state.Psw} 
                    onChange = { (event) => this.setState ({psw : event.target.value }) } />
                   
                    <br />
                    <button type="submit" class="submitbtn">Sign in</button>

                    <div class="container forgotPassword">
                      <p>Forgot your Password? <Link to="/forgotPassword">Forgot Password</Link></p>
                    </div>
                </div>
            </form>
        
        </fieldset>
        )
    }
}
export default login;