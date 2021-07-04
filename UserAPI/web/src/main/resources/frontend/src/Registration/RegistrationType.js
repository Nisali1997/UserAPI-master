import React from 'react';

class RegistrationType extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    render(){
        return(
            <div>
                <br></br>
<h2>Registration</h2>
<br></br>

<h3>Registration Fees</h3>

<hr></hr>
<div class="btn-group" role="group" aria-label="Basic radio toggle button group">

<div class="table-responsive">
  <table class="table align-middle">
    <thead>
      <tr>
         <th scope="col">Registration Options</th>
      <th scope="col">Registration fee Local (LKR)</th>
      <th scope="col">Includes</th>
      <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Full conference (Presenter)</th>
        <td>40,000.00	</td>
        
        <td>Paper Presentation up-to one paper Access to all the technical sessions and workshops Conference kitNon-transferable and non- refundable</td>
        <td>
            {/* <a className="nav-link" href="/ws_presenter">
            <input type="radio"  class="btn-check" name="btnradio"  id="btnradio1" autocomplete="off"
            onChange={e => this.props.history.push('newRoute') || (window.location.href = "/ws_presenter") }/>
            <label class="btn btn-outline-primary" for="btnradio1">Register</label>
            </a> */}
              <a href="/ws_presenter" class="btn btn-info" role="button">Register</a>
        </td>
      </tr>
      
      <tr class="align-bottom">
        <th scope="row">Guest</th>
        <td>10,000.00	</td>
        <td>Access to all technical sessions including workshops on a selected day</td>
        <td>
          {/* <a className="nav-link" href="/participent">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
          onChange={e => this.props.history.push('newRoute') || (window.location.href = "/participent") }/>
          <label class="btn btn-outline-primary" for="btnradio2">Register </label>
          </a> */}
          <a href="/participent" class="btn btn-info" role="button">Register</a>
        </td>
      </tr>
      
      <tr>
      <th scope="row">Researcher</th>
        <td>5,000.00</td>
        <td>Access to all technical sessions and keynote speeches and No workshop participation</td>
        <td>
          {/* <a className="nav-link" href="/researcher">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
        onChange={e => this.props.history.push('newRoute') || (window.location.href = "/researcher") }/>
        <label class="btn btn-outline-primary" for="btnradio2">Register</label>
        </a> */}
        <a href="/researcher" class="btn btn-info" role="button">Register</a>
        </td>
      </tr>


      <tr>
    <th scope="row">Workshop Only</th>
    <td>7,000.00</td>
        <td>All Workshops</td>
        <td>
          {/* <a className="nav-link" href="/workshop">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
        onChange={e => this.props.history.push('newRoute') || (window.location.href = "/workshop") }/>
        <label class="btn btn-outline-primary" for="btnradio2">Register</label>
        </a> */}
        <a href="/workshop" class="btn btn-info" role="button">Register</a>
  </td>
      </tr>

      <tr>
    <th scope="row">Research Activities Only</th>
    <td>7,000.00</td>
        <td>All Research Activities</td>
        <td>
          {/* <a className="nav-link" href="/workshop">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
        onChange={e => this.props.history.push('newRoute') || (window.location.href = "/workshop") }/>
        <label class="btn btn-outline-primary" for="btnradio2">Register</label>
        </a> */}
        <a href="/ractivities" class="btn btn-info" role="button">Register</a>
  </td>
      </tr>

      

    </tbody>
  </table>
</div>
{/* <a className="nav-link" href="/ws_presenter">
  <input type="radio"  class="btn-check" name="btnradio"  id="btnradio1" autocomplete="off"
  onChange={e => this.props.history.push('newRoute') || (window.location.href = "/ws_presenter") }/>
  <label class="btn btn-outline-primary" for="btnradio1">Full conference (Presenter)</label>
  </a>
  

 <a className="nav-link" href="/participent">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
  onChange={e => this.props.history.push('newRoute') || (window.location.href = "/participent") }/>
  <label class="btn btn-outline-primary" for="btnradio2">Participant </label>
  </a>

  <a className="nav-link" href="/researcher">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
  onChange={e => this.props.history.push('newRoute') || (window.location.href = "/researcher") }/>
  <label class="btn btn-outline-primary" for="btnradio2">Researcher</label>
  </a>

  <a className="nav-link" href="/workshop">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
  onChange={e => this.props.history.push('newRoute') || (window.location.href = "/workshop") }/>
  <label class="btn btn-outline-primary" for="btnradio2">Workshop Only</label>
  </a>


  <a className="nav-link" href="/other">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"
  onChange={e => this.props.history.push('newRoute') || (window.location.href = "/other")}/>
  <label class="btn btn-outline-primary" for="btnradio3">Other</label>
  </a> */}
</div>

            </div>
        )
    }
}

export default RegistrationType