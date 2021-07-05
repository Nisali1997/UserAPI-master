import React from 'react';
import axios from 'axios';
import './addConference.css';

class CreateConference extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
          cconferenceName:'',
            cdate:'',
            cvenue:'',
            cstartTime:'',
            cduration:'',
            cnumberOfAttendees:'',
            cmaximumAttendees:'',
            capproved:''
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        let conference={
          conferenceName:this.state.cconferenceName,
            date: this.state.cdate,
            venue: this.state.cvenue,
            startTime: this.state.cstartTime,
            duration: this.state.cduration,
            numberOfAttendees: this.state.cnumberOfAttendees,
            maximumAttendees: this.state.cmaximumAttendees,
            approved: this.state.capproved

        }
        axios.post('http://localhost:8080/editorapi/addConference', conference)
        .then(response => {
            alert('Data successfully inserted')
          })
          .catch(error => {
            console.log(error.message);
            alert(error.message)
          })
    }

    render() {
        return (
             <div className="container">
                 <h1>Create Conference</h1>
                
                 <form onSubmit={this.onSubmit}  class="form-horizontal">

                 


   <div className="mb-3">
    <label htmlFor="Type" class="form-label">Conference Name</label>
    <input type="text" class="form-control" id="Type" name="cconferenceName" value={this.state.cconferenceName} onChange={this.onChange} aria-describedby="emailHelp"/>
  </div>



  <div className="mb-3">
    <label htmlFor="Type" class="form-label">Date</label>
    <input type="text" class="form-control" id="Type" name="cdate" value={this.state.cdate} onChange={this.onChange} aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <label for="categoryDuration" class="form-label">Venue</label>
    <input type="text" class="form-control" id="categoryDuration" name="cvenue" value={this.state.cvenue} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="categoryAmount" class="form-label">Start Time</label>
    <input type="text" class="form-control" id="categoryAmount" name="cstartTime" value={this.state.cstartTime} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="categoryAmount" class="form-label">Duration</label>
    <input type="text" class="form-control" id="categoryAmount" name="cduration" value={this.state.cduration} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="categoryAmount" class="form-label">Number of Attendees</label>
    <input type="Number" class="form-control" id="categoryAmount" name="cnumberOfAttendees" value={this.state.cnumberOfAttendees} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="categoryAmount" class="form-label">Maximum Number of Attendees</label>
    <input type="Number" class="form-control" id="categoryAmount" name="cmaximumAttendees" value={this.state.cmaximumAttendees} onChange={this.onChange} />
  </div> 

  

   {/* <div data-testid="button">{label}</div> */}
  <button type="submit" class="btn btn-primary">Submit</button>

  </form>

             </div>
        );
    }
}

export default CreateConference