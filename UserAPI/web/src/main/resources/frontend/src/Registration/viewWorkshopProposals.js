import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PresenterRegistration from "./Presenter_Registration";

class viewWorkshopProposals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proposals: [],
      workshopProposalId: "",
      workshopProposalName: "",
      ApprovedStatus: false,
      TBDStatus: false,
      id: "",
      name: "",
    };
  }

  componentWillMount() {
    axios
      .get("http://localhost:8080/userapi/viewAllWorkshopProposals")
      .then((res) => {
        this.setState({
          proposals: res.data,
          id: "",
          name: "",
        });
      });
  }

  register(workshopProposalId, workshopProposalName) {
    // let file = e.target.files[0];

    this.setState({
      workshopProposalId: workshopProposalId,
      workshopProposalName: workshopProposalName,
    });

    // this.setState({ [e.target.name]: e.target.value });

    // console.log(e.target.files, "$$$$");
    // console.log(e.target.files[0], "$$$$");
  }

  viewpdf(workshopProposalId) {
    axios({
      url: "http://localhost:8080/file/download/" + workshopProposalId,
      method: "GET",
      responseType: "blob", //Force to receive data in a Blob Format
    })
      .then((response) => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], { type: "application/pdf" });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //   function Approved(props) {
  //     return <h1>Please sign up.</h1>;
  //   }

  render() {
    function Approved(props) {
      return <td>{"Approved"}</td>;
    }
    function Declined(props) {
      return <td>{"Declined"}</td>;
    }
    function StatusChecking(props) {
      const approvedOrNot = props.approvedOrNot;
      if (approvedOrNot) {
        return <Approved />;
      }
      return <Declined />;
    }
    return (
      <div className="container">
        <h3 className="mt-4 mb-2">Workshop Proposals</h3>
        <div className="col s6">
          <table>
            <thead>
              <tr>
                <th>Workshop Proposal</th>
                <th>Approved Status</th>
                <th>View</th>
                <th>Register</th>
              </tr>
            </thead>

            <tbody>
              {this.state.proposals.map((proposal) => (
                <tr key={proposal.id}>
                  <td>{proposal.workshopProposalName}</td>
                  <StatusChecking approvedOrNot={proposal.ApprovedStatus} />
                  <td>
                    <button
                      onClick={(e) => this.viewpdf(proposal.workshopProposalId)}
                      className="btn waves-effect waves-light"
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) =>
                        this.register(
                          proposal.workshopProposalId,
                          proposal.workshopProposalName
                        )
                      }
                      className="btn waves-effect waves-light"
                    >
                      Register
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col s6">
          {this.state.workshopProposalId ? (
            <PresenterRegistration
              workshopProposalId={this.state.workshopProposalId}
            />
          ) : (
            ""
          )}

          {/* <Router>
            <Route path="/presenterRegistration">
              <PresenterRegistration />
            </Route>
            <Link
              to={{
                pathname: "/presenterRegistration",
                //   state: { proposalID: proposal.id },
              }}
            >
              Register
            </Link>
          </Router> */}
        </div>
      </div>
    );
  }
}

export default viewWorkshopProposals;
