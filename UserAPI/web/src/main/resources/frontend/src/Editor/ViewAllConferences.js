import React from 'react';
import axios from 'axios';

class ViewConferences extends React.Component{
    constructor(props){
        super(props);
        this.state={
           conference:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/editorapi/viewAllConference')
        .then(responce=>{
            
            this.setState({conference: responce.data})
        })
    }

    navigateConferencePage(e, conferenceId){
        window.location=`/${conferenceId}`
    }

    render() {
        return (
             <div className="container">
                 <h1>Conferences</h1>
                 {this.state.conference.length>0 && this.state.conference.map((item,index)=>(
                     <div key={index} className="card mb-3">
                         <div className="p-3" onClick={e=>this.navigateConferencePage(e,item._id)} >
                         <h4>Conference Name : {item.conferenceName}</h4>
                         <h5>Date : {item.date}</h5>
                         <h5>Venue : {item.venue}</h5>
                         <h5>Start Time : {item.startTime}</h5>
                            <h5>Duration : {item.duration}</h5>
                            <h5>Number of Attendees : {item.numberOfAttendees}</h5>
                            <h5>Maximum Number of Attendees :{item.maximumAttendees}</h5>
                        <button onClick={e=>this.navigateConferencePage(e,item._id)}>Edit</button>
                         </div>
                     </div>
                 ))}
             </div>
        );
    }
}

export default ViewConferences