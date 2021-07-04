import React from 'react';
import axios from 'axios';

class Researcher extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            rname:'',
            remail:'',
            rnumber:'',
            rpassword:'' ,
            filename:''//awl
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        let researcher={
            Name : this.state.rname,
            Email : this.state.remail,
            ContactNumber : this.state.rnumber,
            Password : this.state.rpassword,
            researchPaperId : this.state.filename
        }

        axios.post('http://localhost:8080/userapi/researcher' , researcher)// Not implemented yet
        .then(response => {
            alert('Data successfully inserted')
          })
          .catch(error => {
            console.log(error.message);
            alert(error.message)
          })
    }

    render(){
        return(
            <div className="container">
              <br></br><br></br>
                <h3>Registration</h3>
                <form onSubmit={this.onSubmit}>
  <div className="mb-3">
    <label htmlFor="Type" class="form-label">Name</label>
    <input type="text" class="form-control" id="Type" name="rname" value={this.state.rname} onChange={this.onChange} aria-describedby="emailHelp"/>
  </div>


  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="text" class="form-control" id="email" name="remail" value={this.state.remail} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="number" class="form-label">Contact Number</label>
    <input type="text" class="form-control" id="number" name="rnumber" value={this.state.rnumber} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="passt" class="form-label">Password</label>
    <input type="text" class="form-control" id="pass" name="rpassword" value={this.state.rpassword} onChange={this.onChange} />
  </div>

  <div class="mb-3"  >
    <label for="passt" class="form-label">Upload Document</label><br></br>
    <input type="file" id="myFile" class="form-control" name="filename" value={this.state.filename} onChange={this.onChange} />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
       


)
    }
}

export default Researcher