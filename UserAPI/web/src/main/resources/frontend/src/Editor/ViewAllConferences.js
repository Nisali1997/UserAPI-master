import React from 'react';
import axios from 'axios';
import './ViewAllConference.css';

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
             <div className="editor">
                 <br></br><br></br>
                 <h1>Conferences</h1>
                 {this.state.conference.length>0 && this.state.conference.map((item,index)=>(
                     <div key={index} className="card border-primary mb-3 " style={{ width: "50%", marginLeft: "25%" }}>
                         <div className="p-3" onClick={e=>this.navigateConferencePage(e,item._id)} >
                         
                         <h5>Conference Name : {item.conferenceName}</h5>
                         <h6>Date : {item.date}</h6>
                         <h6>Venue : {item.venue}</h6>
                         <h6>Start Time : {item.startTime}</h6>
                            <h6>Duration : {item.duration}</h6>
                            <h6>Number of Attendees : {item.numberOfAttendees}</h6>
                            <h6>Maximum Number of Attendees :{item.maximumAttendees}</h6>
                            
                        {/* <button onClick={e=>this.navigateConferencePage(e,item._id)}>Edit</button> */}
                         </div>
                     </div>
                 ))}
             </div>
        );
    }
}

export default ViewConferences