import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            username:'',
            password:'',
            users:[],
            uservalidate:true
            
        }
    }

    componentWillMount(){
        this.getAllUsers()
    }

    getAllUsers=()=>{
        axios.get('http://localhost:3000/userdetails')
                .then(response=>{
                    console.log(response);
                    console.log(response.data)
                    this.setState({users: response.data})
                    console.log(this.state.users);
                }, error=>{
                    console.error(error);
                })
    }

    getUsername=(event)=>{
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

    validateUser=()=>{
        if(JSON.stringify(this.state.username)===''||JSON.stringify(this.state.password)===''){
            alert("Please enter username/password")
        }else{
            let i=0;
            let allUsers=this.state.users
            for(i=0;i<this.state.users.length;i++){
                if(JSON.stringify(this.state.username)===JSON.stringify(allUsers[i].username)&&
                JSON.stringify(this.state.password)===JSON.stringify(allUsers[i].password)){
                         this.props.history.push('/home')
                     }else{
                         this.setState({uservalidate: false})
                           }

            }
            if(!this.state.uservalidate){
                alert("username/password incorrect")
            }

        }
    }

    render() { 
        return (
            <div className="loginForm">
                <form>
                <label className="formLabel">Username: </label>
                <input className="formInput" type='text' id="username" onChange={this.getUsername}></input>
                <br></br>
                <label className="formLabel">Password: </label>
                <input  className="formInput" type='password' id="password" onChange={this.getPassword}></input>
                <br></br>
                <button className="loginBtn"onClick={this.validateUser}>Submit</button>
                <br></br>
                <Link to='/signup'>Sign Up</Link>
                </form>
            </div>
          );
    }
}
 
export default Login;