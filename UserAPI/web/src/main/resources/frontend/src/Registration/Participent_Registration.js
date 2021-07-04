import React from 'react';
import axios from 'axios';

class ParticipentRegistration extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            pname:'',
            pemail:'',
            pnumber:'',
            ppassword:''
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        let Attendee={
            Name : this.state.pname,
            Email : this.state.pemail,
            ContactNumber : this.state.pnumber,
            Password : this.state.ppassword
        }

        axios.post('http://localhost:8080/userapi/registerForConference', Attendee)
        .then(response => {
            alert('Data successfully inserted')
          })
          .catch(error => {
            console.log(error.message);
            alert(error.message)
          })
    }

    render(){
        return (
            <div className="container">
              <br></br><br></br>
                <h3>Registration</h3>
                <form onSubmit={this.onSubmit}>
  <div className="mb-3">
    <label htmlFor="Type" class="form-label">Name</label>
    <input type="text" class="form-control" id="Type" name="pname" value={this.state.pname} onChange={this.onChange} aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="text" class="form-control" id="email" name="pemail" value={this.state.pemail} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="number" class="form-label">Contact Number</label>
    <input type="text" class="form-control" id="number" name="pnumber" value={this.state.pnumber} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="passt" class="form-label">Password</label>
    <input type="text" class="form-control" id="pass" name="ppassword" value={this.state.ppassword} onChange={this.onChange} />
  </div>

  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
        )
    }
}

export default ParticipentRegistration

