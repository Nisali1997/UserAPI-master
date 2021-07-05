import React from 'react';
import './ReviewerHomePage.css'

class ReviewerHomePage extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    render() {
        return (
             <div className="container">
                 <h1>Welcome</h1>
                 <table className="table">
                     <tr>
                 <div class="btn-group" >
                 <a href="/approveWorkshopProposals" class="btn btn-info" role="button">View All Workshops</a>
                 </div>
                 </tr>
                <br></br>
                <tr>
                 <div class="btn-group" >
                 <a href="/viewReseachePP" class="btn btn-info" role="button">View All Research Papers</a>
                 </div>
                 </tr>
                 </table>
                
             </div>
        );
    }
}

export default ReviewerHomePage