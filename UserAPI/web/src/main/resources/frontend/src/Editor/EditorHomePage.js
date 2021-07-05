import React from 'react';
import { Link } from "react-router-dom";
import './EditorHomePage.css'

class EditorHomePage extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    render() {
        return (
            //  <div className="container">
                 <div className="editor">
                 <h1>Welcome</h1>
                 <table className="table">
                     <tr>
                 <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                 <a href="/editorView" class="btn btn-info" role="button">View All Conferences</a>
                 </div>
                 </tr>
<br></br>
                 <tr>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                 <a href="/editorCreate" class="btn btn-info" role="button">Create a New Conference</a>
                 </div>
                 </tr>
                 </table>
                 </div>
            //  </div>
        );
    }
}

export default EditorHomePage