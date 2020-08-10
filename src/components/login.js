import React from 'react';
import axios from 'axios';

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            username:'',
            password:'',
            users:[]
            
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
        if(this.state.username===''||this.state.password===''){
            alert("Please enter username/password")
        }else{
            let i=0;
            let allUsers=this.state.users
            for(i=0;i<this.state.users.length;i++){
                if(JSON.stringify(this.state.username)===JSON.stringify(allUsers[i].username)&&
                JSON.stringify(this.state.password)===JSON.stringify(allUsers[i].password)){
                         this.props.history.push('/home')
                     }else{
                         alert("username/password incorrect")
                     }

            }

        }
    }

    render() { 
        return (
            <div>
                <form>
                <label>Username: </label>
                <input type='text' id="username" onChange={this.getUsername}></input>
                <br></br>
                <label>Password: </label>
                <input type='password' id="password" onChange={this.getPassword}></input>
                <br></br>
                <button onClick={this.validateUser}>Submit</button>
                </form>
            </div>
          );
    }
}
 
export default Login;