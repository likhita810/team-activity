import React from "react";
import axios from "axios";
import './page2.css'

class LoginCls extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            username:'',
            password:'',
            unameErr:"",
            passwordErr:'',
        }
    }
   
    handleSubmit=(e)=>{
        e.preventDefault()
        const {navigate} = this.props.nav
        axios.get(`http://localhost:3001/userCredentials?username=${this.state.username}`).
        then((res) => {
            console.log(res)
            const response = res.data[0]
            console.log(response)
            if (!response) {
                navigate("/signin")
                console.log('signin')
            }
             else if (response.password === this.state.password) {
                navigate(`/dashboard`)
            } else {
                this.setState({passwordErr: "Please enter correct password"})    
            }
        })
    }

    handleValidation=(e,keyword)=>{
        if(keyword==="username"){
            if(e.target.value){
                this.setState({username:e.target.value})
            }
            else{
                this.setState({unameErr:"please enter username"})
            }
        }
        if(keyword==="password"){
            if(e.target.value){
                this.setState({password:e.target.value})
            }
            else{
                this.setState({passwordErr:"please enter password"})
            }
        }
    }
    render(){
        return(
            <div className="login">
                <h1 className="h1">Please Login here to raise your ticket..</h1>
                <form className="form">

                    <div className="formDiv">
                        <p>Username:</p>  
                        <input type="text" onBlur={(e)=>this.handleValidation(e,"username")}></input>
                        <p style={{color:"red"}}>{this.state.unameErr}</p>
                    </div>

                    <div className="formDiv">
                        <p>Password:</p>  
                        <input type="text" onBlur={(e)=>this.handleValidation(e,"password")}></input>
                        <p style={{color:"red"}}>{this.state.passwordErr}</p>
                    </div>

                    <button className="submit" onClick={(e)=>this.handleSubmit(e) }>Submit</button>
                </form>
            </div>
        )
    }
}
export default LoginCls