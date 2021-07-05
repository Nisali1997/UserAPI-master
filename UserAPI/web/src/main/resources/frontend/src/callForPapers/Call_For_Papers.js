import React, {Component} from 'react';
import axios from 'axios';
import './Call_For_Papers.css';


class CallForPapers extends Component{

    constructor(props){
        super(props);
        this.state = {
            researchPapers: [] 
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/reviewerapi/viewAllConferenceResearchPapers')
        .then(response => {
           this.setState({researchPapers: response.data})
        })
    }

    navigateCallForPapersPage(e, cfpId){
        window.location=`/${cfpId}`
    }

    render(){
        return(
            <div className="editor">
                <br></br><br></br>
                <h1>Call For Papers</h1>
                {this.state.researchPapers.length>0 && this.state.researchPapers.map((item,index)=>(
                    <div key={index} className="card border-primary mb-3">
                        <div className="p-3">
                            <h5>Name : {item.researchPaperName}</h5>
                            <h6>ID :{item.researchPaperId}</h6>
                            </div>

                    </div>
                ))}

            </div>
        )
    }


}

export default CallForPapers;