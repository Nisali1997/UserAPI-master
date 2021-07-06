import React from "react";
import axios from "axios";

class PresenterRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.onChangeProposalID = this.onChangeProposalID.bind(this);
    this.state = {
      pname: "",
      pemail: "",
      pnumber: "",
      ppassword: "",
      workshopProposalId: "",
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //   onChangeProposalID(e) {
  //     this.setState({
  //       workshopProposalId: e.target.workshopProposalId,
  //     });
  //   }

  onSubmit(e, workshopProposalId) {
    e.preventDefault();
    let WorkshopPresenter = {
      name: this.state.pname,
      email: this.state.pemail,
      contactNumber: this.state.pnumber,
      password: this.state.ppassword,
      workshopProposalId: workshopProposalId,
    };

    axios
      .post(
        "http://localhost:8080/userapi/workshoppresenter",
        WorkshopPresenter
      )
      .then((response) => {
        alert("Data successfully inserted");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  render() {
    const { workshopProposalId } = this.props;
    return (
      <div className="container">
        <br></br>
        <br></br>
        <h3>Workshop Presenter Registration</h3>
        <form onSubmit={(e) => this.onSubmit(e, workshopProposalId)}>
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

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PresenterRegistration;
