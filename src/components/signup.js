import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            firstname:'',
            lastname:'',
            username:'',
            password:''
            
        }
    }

    getFirstName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({firstname: event.target.value})
    }

    getLastName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({lastname: event.target.value})
    }

    getEmail=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({username: event.target.value})
    }

    getPassword=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({password: event.target.value})
    }

    addUser=()=>{
        console.log('Add user via axios and post')
        let userRequestBody = {
            "firstname":this.state.firstname,
            "lastname": this.state.lastname,
            "username": this.state.username,
            "password": this.state.password
        }
        axios.post('http://localhost:3000/userdetails', userRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/')
                }, error=>{
                    console.error(error);
                })
    }

    render() { 
        return ( 
            <div className="signupForm">
            <h3>Sign up</h3>
            <form>
                <label className="formLabel">First Name </label>
                <input className="formInput" type='text' id="firstname" onChange={this.getFirstName}></input>
                <br></br>
                <label className="formLabel">Last Name </label>
                <input  className="formInput" type='text' id="lastname" onChange={this.getLastName}></input>
                <br></br>
                <label className="formLabel">Email</label>
                <input className="formInput" type='email' id="email" onChange={this.getEmail}></input>
                <br></br>
                <label className="formLabel">Password</label>
                <input className="lastformInput" type='password' id="password" onChange={this.getPassword}></input>
                <br></br>
                <div>
                <button type="button" className="loginBtn" onClick={this.addUser}>Sign Up</button>
                <br></br>
                </div>
            </form>
        </div>
         );
    }
}
 
export default SignUp;