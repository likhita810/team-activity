import React from "react";
import axios from "axios";
import './page5.css'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            details: [],
            uname: '',
            pswd: '',
            confirmPassword: '',
            uno: '',
            unameErr: '',
            pswdErr: '',
            unoErr: '',
            isId: '',
            err: ''
        }
    }

    handleValidation = (e, keyword) => {
        if (keyword === 'username') {
            if(e.target.value) {
                this.setState({uname: e.target.value})
            } else {
                this.setState({unameErr: 'please enter username'})
            }
        } 
        if (keyword === 'password') {
            if(e.target.value) {
                this.setState({pswd: e.target.value})
            } else {
                this.setState({pswdErr: 'please enter username'})
            }
        }
        if (keyword === 'confirmPassword') {
            if(e.target.value) {
                this.setState({confirmPassword: e.target.value})
            } else {
                this.setState({pswdErr: 'please enter username'})
            }
        }
        if (keyword === 'Number') {
            if(e.target.value) {
                this.setState({uno: e.target.value})
            } else {
                this.setState({unoErr: 'please enter username'})
            }
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const {navigate} = this.props.nav
        if (this.state.pswd !== this.state.confirmPassword) {
            this.setState({err: "password is not matching"})
            console.log('pswd check')
        } else {
            axios.post('http://localhost:3001/adminCredentials', {
                username: this.state.uname,
                uno: this.state.uno,
                password: this.state.pswd
            }).then((res) => {
                console.log(res.data)
                navigate('/adminlogin')
            })
            console.log('post block')
        }

    }

    render() {
        return(
            <div className="adminSignin">
                <h1 className="aH1">Please Sign In here!</h1>
                <form className="aForm">
                    <div className="aFormDiv">
                    <p>User name:</p> 
                    <input type="text" onBlur={(e) => this.handleValidation(e, 'username')}></input>
                    <p style={{color: 'red'}}>{this.state.unameErr}</p>
                    </div>

                    <div className="aFormDiv">
                    <p>Number:</p> <input type="text" onBlur={(e) => this.handleValidation(e, 'Number')}></input>
                    <p style={{color: 'red'}}>{this.state.roleErr}</p>
                    </div>

                    <div className="aFormDiv">
                    <p>Password:</p> <input type="password" onBlur={(e) => this.handleValidation(e, 'password')}></input>
                    <p style={{color: 'red'}}>{this.state.pswdErr}</p>
                    </div>

                    <div className="aFormDiv">
                    <p>Confirm Password:</p> <input type="password" onBlur={(e) => this.handleValidation(e, 'confirmPassword')}></input>
                    <p style={{color: 'red'}}>{this.state.pswdErr}</p>
                    </div>

                    <p style={{color: 'red'}}>{this.state.err}</p>
                    <button className="aSigninSubmit" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default SignIn