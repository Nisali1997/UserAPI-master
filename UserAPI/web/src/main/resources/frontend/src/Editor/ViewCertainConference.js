import React from 'react';
import axios from 'axios';

class ViewCetainConference extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            conferenceName:'',
            date:'',
            venue:'',
            startTime:'',
            duration:'',
            numberOfAttendees:'',
            maximumAttendees:''
           
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/editorapi/viewConference/${this.props.match.params.id}`)
        .then(responce=>{
            
            this.setState({conference: responce.data.conference})
        })
        .catch(error => {
            alert(error.message)
          })
    }

    render() {
        return (
             <div>
                 {this.state.conference.length > 0 && this.state.conference.map((item, index)=>(
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                            
                            <h2>Conference Name : {item.conferenceName}</h2>
                            <h4>Date : {item.date} </h4>
                            <h4>Venue : {item.venue} </h4>
                            <h4>Start Time : {item.startTime}</h4>
                            <h4>Duration : {item.duration}</h4>
                            <h4>Number of Attendees : {item.numberOfAttendees}</h4>
                            <h4>Maximum Number of Attendees :{item.maximumAttendees}</h4>
                        </div>
                    </div>
                ))}
             </div>
        );
    }
}

export default ViewCetainConference