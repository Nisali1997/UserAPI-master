import React from 'react';
import axios from 'axios';

class LoginFormWorkshopConductor extends React.Component{
     constructor(props){
         super(props);
         this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            Email:'',
            Pwd:''
        } 
 }

 onChange(e){
    this.setState({[e.target.name]: e.target.value })
}

onSubmit(e){
    e.preventDefault();
    let workshoppresenter={
      
        Email : this.state.Email,
        Password : this.state.Pwd,
    }

    axios.post('http://localhost:8080/authenticatorapi/login' , workshoppresenter)
    .then(response => {
        alert('Successfully logged in')
      })
      .catch(error => {
        console.log(error.message);
        alert(error.message)
      })
}
 render(){
     return(
        <div className = "container">
        <h1>Sign In</h1>

        <form onSubmit={this.onSubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email :</label>
            <input 
             type="text" 
             className="form-control" 
             id="email" 
             name = "Email" 
             value={this.state.Email} 
             onChange={this.onChange}/>
            
        </div>

        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
             type="password" 
             className="form-control" 
             id="password"  
             name = "Pwd" 
             value={this.state.Pwd} 
             onChange={this.onChange}/>
        </div>

        <button type="submit" className="btn btn-primary">Login</button>

        </form>
    </div>
        )
 
     }
    }
 export default LoginFormWorkshopConductor