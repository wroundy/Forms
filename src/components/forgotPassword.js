import React, { Component } from 'react'


class forgotPassword extends Component {
    state= {
        userName: "",
        Email: "",
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        
    }

    render() {
        return (
        <fieldset>
            <legend>Forgot Your Password?</legend>
            <form onSubmit = {this.handleSubmit}>
                <div className="container">

                    <input type="text" placeholder="User Name" 
                    value = {this.state.userName} 
                    onChange = { (event) => this.setState ({userName : event.target.value }) } />

                    <br />                    
                    <input type="email" placeholder= "Email"
                    value = {this.state.Email}
                    onChange = { (event) => this.setState ({Email : event.target.value }) } />

                    <hr />
                    <input type="password" placeholder="New Password"  
                    value = {this.state.newPassword}
                    onChange = { (event) => this.setState ({newPassword : event.target.value}) } />
                    <br />
                   
                    <input type="password" placeholder="Confirm Password"  
                    value = {this.state.confirmPassword}
                    onChange = { (event) => this.setState ({confirmPassword : event.target.value}) } />
                    <br />

                    <input type = "submit"/>
                </div>
            </form>
        
        </fieldset>
        )
    }
}
export default forgotPassword;