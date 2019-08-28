import React from 'react'
import {FaFoursquare, FaEye, FaEyeSlash} from 'react-icons/lib/fa'
import { Link } from 'react-router-dom'

class Login extends React.Component
{
    constructor()
    {
        super()
        this.state={
            isProtected: false,
            email: "",
            password: ""
        }
        this.handleChange=this.handleChange.bind(this)
        this.validate=this.validate.bind(this)
    }
    handleChange(e){
        (e.target.type==="text"||e.target.type==="password")?
        this.setState({
            [e.target.name]: e.target.value
        }):
        this.setState(prevState=>{
            return{
                isProtected: !prevState.isProtected
            }
        })
    }
    validate(e){
        const pass=this.state.password
        var len = pass.length

        var check= pass.substring(len, 3)
        console.log(check)
    }
    render(){
        return(
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form">
                         <span className="login100-form-title">
                            Welcome
                            <div>
                                <FaFoursquare size={50}/>
                            </div>  
                        </span>
                        <div className="wrap-input100">
                            <input 
                            className="input100" 
                            type="text" 
                            name="email" 
                            placeholder="Email" 
                            onChange={this.handleChange}/>
                        </div>
                        <div className="wrap-input100">
                            <button type="button" className="buttonEye" onClick={this.handleChange}> 
                                {this.state.isProtected?<FaEyeSlash className="eye" />:<FaEye className="eye" />}
                            </button>
                            <input 
                            className="input100" 
                            type={this.state.isProtected?"password":"text"} 
                            name="password" 
                            placeholder="Password" 
                            onChange={this.handleChange}/>
                        </div>
                        <div className="wrap-button">
                            <Link to="/Home">
                            <div className="login100-form-bgbtn">
                                <button className="login100-form-btn"type="submit" onClick={this.validate}>Login</button>
                            </div>
                            </Link>
                        </div> 
                    </form>
                    <div className="txt2">
                        <span>
                            Dont have an account?
                        </span>
                        <Link to="/Signup">
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login