import React from 'react';
import axios from 'axios';

class ViewWorkshops extends React.Component{
    constructor(props){
        super(props);
        this.state={
            workshopProposal:[]
         }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/reviewerapi/viewWorkshops')
        .then(response=>{
            this.setState({workshopProposal: response.data.data})
        })
    }

    navigateWorkshopPage(e, workshopProposalId){
        window.location=`/${workshopProposalId}`
    }


    render(){
        return(
            <div className="container">
                {this.state.workshopProposal.length>0 && this.state.workshopProposal.map((item,index)=>(
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                            <h5>{item.workshopProposalId}</h5>
                            </div>

                    </div>
                ))}

            </div>
        )
    }
}