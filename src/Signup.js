import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

class Signup extends React.Component
{
    constructor()
    {
        super()
        this.state={
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(){
        fetch('http://localhost:3000/signup', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
        })
        .then(response => console.log('Success:', 'Succeess'))
        .catch(error => console.error('Error:', error));
    }
    render(){
        return(
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form">
                        <span className="login100-form-title">
                            Sign Up 
                        </span>
                        <input 
                        className="input100" 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name" 
                        onChange={this.handleChange}
                        />
                        <input 
                        className="input100" 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name" 
                        onChange={this.handleChange}
                        />
                        <input 
                        className="input100" 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        onChange={this.handleChange}
                        />
                        <input 
                        className="input100" 
                        type="text" 
                        name="password" 
                        placeholder="Password" 
                        onChange={this.handleChange}
                        />
                        <div className="wrap-button">
                            <Link to="/">
                            <div className="login100-form-bgbtn">
                                <button className="login100-form-btn"type="submit" onClick={this.handleSubmit}>Create User</button>
                            </div>
                            </Link>
                        </div> 
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup