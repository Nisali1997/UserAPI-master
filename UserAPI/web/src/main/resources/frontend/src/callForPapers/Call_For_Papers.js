import React, {Component} from 'react';
import axios from 'axios';

class CallForPapers extends Component{

    constructor(props){
        super(props);
        this.state = {
            researchPaper: [] 
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/reviewerapi/viewAllConferenceResearchPapers')
        .then(response => {
           this.setState({researchPaper: response.data.data})
        })
    }

    navigateCallForPapersPage(e, cfpId){
        window.location=`/${cfpId}`
    }

    render(){
        return(
            <div className="container">
                <h1>Call For Papers</h1>
                {this.state.researchPaper.length>0 && this.state.researchPaper.map((item,index)=>(
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                            <h5>{item.cfpId}</h5>
                            </div>

                    </div>
                ))}

            </div>
        )
    }


}

export default CallForPapers;