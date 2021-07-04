import React from 'react';
import axios from 'axios';

class Login extends React.Component{
     constructor(props){
         super(props);
        
 }

render(){
    return(
            <div className="container">
                <br></br><br></br>
                <h2>Sign In</h2>
                <br></br><br></br>
            
            <table class="table">
 
            <tbody>
                <tr>
                
                <td>Login as a Attendee</td>
                <td> <a href="/loginFormAttendee" class="btn btn-info btn-primary btn-lg" role="button">Register</a>
</td>
                
                </tr>
                <tr>
                <td>Login as a Researcher</td>
                <td><a href="/loginFormResearcher" class="btn btn-info btn-primary btn-lg" role="button">Register</a>
</td>
                </tr>
                <tr>
                <td>Login as a Workshop conductor</td>
                <td><a href="/loginFormWorkshopConductor" class="btn btn-info btn-primary btn-lg" role="button" >Register</a></td>
                </tr>
            </tbody>
            </table>

    
            


            </div>
           
    )
}
}

export default Login