import React from "react";
import axios from "axios";
import './page3.css'

class AdminLogClass extends React.Component{
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
        axios.get(`http://localhost:3001/adminCredentials?username=${this.state.username}`).
        then((res) => {
            const response = res.data[0]
            // console.log(res)
            console.log(response)
            if (!response) {
                navigate("/adminsignin")
                console.log('adminsignin')
            }
             else if (response.password === this.state.password) {
                // navigate(`/dashboard/${this.state.username}/${response.role}`)
                navigate(`/display`)
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
            <div className="adminLogin">
                <h1 className="adminH1">Login here to resolve the tickets..</h1>
                <form className="adminForm">
                    <div className="div">
                    <p>Username:</p> 
                    <input type="text" onBlur={(e)=>this.handleValidation(e,"username")}></input>
                    <p style={{color:"red"}}>{this.state.unameErr}</p>
                    </div>

                    <div className="div">
                    <p>Password:</p>  
                    <input type="text" onBlur={(e)=>this.handleValidation(e,"password")}></input>
                    <p style={{color:"red"}}>{this.state.passwordErr}</p>
                    </div>

                    <button className="aSubmit" onClick={(e)=>this.handleSubmit(e) }>Submit</button>
                </form>
            </div>
        )
    }
}
export default AdminLogClass