import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class AdminViewAllActivities extends React.Component{
     constructor(props){
            super(props);
            this.state={
              activity:[]
           }
        }
        componentDidMount(){
          axios.get('http://localhost:8080/adminapi//viewAllActivities')
          .then(response=>{
              this.setState({activity: response.data})
          })
      }
    render(){
        return (
            <div>
            <h1>Activties</h1>
            {this.state.activity.length>0 && this.state.activity.map((item,index)=>(
                <div key={index} className="card border-primary mb-3">
                    <div>
                    <h4>Activity Type : {item.type}</h4>
                    <h5>Date : {item.date}</h5>
                    <h5>Description : {item.description}</h5>
                    <h5>User ID : {item.userId}</h5>
                    </div>
                </div>
            ))}
        </div>

        );

    }

}

export default AdminViewAllActivities