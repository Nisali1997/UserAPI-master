import React from 'react';
import AdminViewAllActivities from './AdminViewAllActivities';
class Admin extends React.Component{
     constructor(props){
            super(props);
        }
    render(){
        return (
            <div> 
                <h1>View</h1>
                <AdminViewAllActivities/>
            </div>

        );

    }

}

export default Admin