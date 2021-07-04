import React, {Component} from 'react';
import axios from 'axios';


class Home extends Component{
    
    constructor(props){
        super(props);
        this.state={
            conference:[]
         }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/editorapi/viewApprovedConferences')
        .then(response=>{
            this.setState({conference: response.data.data})
        })
    }

    navigateAllConferences(e, conferenceId){
        window.location=`/${conferenceId}`
    }


    render(){
        return(
            <div>
                
                <br></br> <br></br> <br></br><br></br>
                <div> 
                    <h1 >ICAF 2021</h1>
                  
                   <h3>International Conference on Application Frameworks</h3>
                   <h4>organized by</h4>
                   <h4>Software Engineering Department of SLIIT</h4>
                   <br></br>
                   <div class="p-3 mb-2 bg-primary text-white"><p class="h1">SEP 20 - SEP 27, 2021</p></div>
                
                </div>
                  
                    <br></br><br></br> <br></br> <br></br><br></br><br></br> <br></br> 
                   <div className="container">
                   
                    <h3>All Conferences</h3>
                       <span class="badge rounded-pill bg-primary">Approved Conferences</span>
                       {this.state.conference.length>0 && this.state.conference.map((item,index)=>(
                        <div key={index} className="card border-primary mb-3">
                        <div className="p-3">
                            <div class="card-header">{item.conferenceId}</div>
                            <h5>{item.ConferenceName}</h5>
                            <h5>Date : {item.Date}</h5>
                            <h5>Venue : {item.Venue}</h5>
                            <h5>Start Time : {item.StartTime}</h5>
                            </div>

                    </div>
                ))}


                       
                    </div>
            </div>


        )
    }
}

export default Home;