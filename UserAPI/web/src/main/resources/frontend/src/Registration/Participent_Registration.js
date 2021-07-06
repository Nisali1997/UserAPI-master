import React from "react";
import axios from "axios";

class ParticipentRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    // this.onSubmit=this.onSubmit.bind(this);
    this.state = {
      pname: "",
      pemail: "",
      pnumber: "",
      ppassword: "",
      paymentMethod: "",
      amount: 0,
      conferenceId: "",
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e, id) {
    e.preventDefault();
    let Attendee = {
      name: this.state.pname,
      email: this.state.pemail,
      contactNumber: this.state.pnumber,
      password: this.state.ppassword,
      paymentMethod: this.state.paymentMethod,
      amount: this.state.amount,
      conferenceId: id,
    };

    axios
      .post("http://localhost:8080/userapi/registerForConference", Attendee)
      .then((response) => {
        alert("Data successfully inserted");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  render() {
    const { id } = this.props;
    return (
      <div className="container">
        <br></br>
        <br></br>
        <h3>Conference Participant Registration</h3>
        <form onSubmit={(e) => this.onSubmit(e, id)}>
          <div className="mb-3" style={{ width: "50%", marginLeft: "25%" }}>
            <label htmlFor="Type" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="Type"
              name="pname"
              value={this.state.pname}
              onChange={this.onChange}
              aria-describedby="emailHelp"
            />
          </div>

          <div class="mb-3" style={{ width: "50%", marginLeft: "25%" }}>
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              name="pemail"
              value={this.state.pemail}
              onChange={this.onChange}
            />
          </div>

          <div class="mb-3" style={{ width: "50%", marginLeft: "25%" }}>
            <label for="number" class="form-label">
              Contact Number
            </label>
            <input
              type="text"
              class="form-control"
              id="number"
              name="pnumber"
              value={this.state.pnumber}
              onChange={this.onChange}
            />
          </div>

          <div class="mb-3" style={{ width: "50%", marginLeft: "25%" }}>
            <label for="passt" class="form-label">
              Password
            </label>
            <input
              type="text"
              class="form-control"
              id="pass"
              name="ppassword"
              value={this.state.ppassword}
              onChange={this.onChange}
            />
          </div>

          <div class="mb-3" style={{ width: "50%", marginLeft: "25%" }}>
            <label for="passt" class="form-label">
              Payment Method
            </label>
            <input
              type="text"
              class="form-control"
              id="pass"
              name="paymentMethod"
              value={this.state.paymentMethod}
              onChange={this.onChange}
            />
          </div>

          <div class="mb-3" style={{ width: "50%", marginLeft: "25%" }}>
            <label for="passt" class="form-label">
              Amount
            </label>
            <input
              type="text"
              class="form-control"
              id="pass"
              name="amount"
              value={this.state.amount}
              onChange={this.onChange}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ParticipentRegistration;
