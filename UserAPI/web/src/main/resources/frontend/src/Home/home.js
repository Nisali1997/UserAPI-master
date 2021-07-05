import React, {Component} from 'react';
import axios from 'axios';
import '../Home/home.css'


class Home extends Component{
    
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

    navigateAllConferences(e, conferenceId){
        window.location=`/${conferenceId}`
    }


    render(){
        return(
            <div className="home">
                <div styles={{ img: "url(/images/452059.png)" }}>
               
    </div>
                <br></br> <br></br> <br></br>
                <div> 
                    <h1 >ICAF 2021</h1>
                  
                   <h3>International Conference on Application Frameworks</h3>
                   <h4>organized by</h4>
                   <h4>Software Engineering Department of SLIIT</h4>
                   <br></br>
                   <div class="p-3 mb-2 bg-primary text-white"><p class="h1">SEP 20 - SEP 27, 2021</p></div>
                
                </div>
                  
                    <br></br><br></br> <br></br> <br></br>
                   <div className="container">
                   
                    <h3>All Conferences</h3>
                       <span class="badge rounded-pill bg-primary">Approved Conferences</span>
                       {/* {this.state.conference.length>0 && this.state.conference.map((item,index)=>(
                        <div key={index} className="card border-primary mb-3">
                        <div className="p-3">
                            <div class="card-header">{item.conferenceId}</div>
                            <h5>{item.conferenceName}</h5>
                            <h5>Date : {item.date}</h5>
                            <h5>Venue : {item.venue}</h5>
                            <h5>Start Time : {item.startTime}</h5>
                            </div>

                    </div>
                ))} */}
                 {this.state.conference.length>0 && this.state.conference.map((item,index)=>(
                     <div key={index} className="card mb-3">
                         <div className="p-3" onClick={e=>this.navigateConferencePage(e,item._id)} >
                         <h4>Conference Name : {item.conferenceName}</h4>
                         <h5>Date : {item.date}</h5>
                         <h5>Venue : {item.venue}</h5>
                        
                         </div>
                     </div>
                 ))}


                       
                    </div>
            </div>


        )
    }
}

export default Home;