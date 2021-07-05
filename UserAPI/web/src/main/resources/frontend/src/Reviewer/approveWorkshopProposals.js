import React from "react";
import axios from "axios";
import './ReviewerHomePage.css';

class approveWorkshopProposals extends React.Component {
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
        });
      });
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/userapi/viewAllWorkshopProposals")
      .then((res) => {
        this.setState({
          proposals: res.data,
        });
      });
  }

  approveWorkshop(id, workshopProposalId, workshopProposalName) {
    // this.setState({
    //   workshopProposalId: workshopProposalId,
    //   ApprovedStatus: true,
    //   TBDStatus: false,
    // });

    let WorkshopProposal = {
      id: id,
      workshopProposalName: workshopProposalName,
      approvedStatus: true,
      tBDStatus: false,
      workshopProposalId: workshopProposalId,
    };

    axios
      .put(
        "http://localhost:8080/reviewerapi/approveDeclineWorkshop",
        WorkshopProposal
      )
      .then((response) => {
        alert("Data successfully inserted");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  declineWorkshop(id, workshopProposalId, workshopProposalName) {
    let WorkshopProposal = {
      id: id,
      workshopProposalName: workshopProposalName,
      approvedStatus: false,
      tBDStatus: true,
      workshopProposalId: workshopProposalId,
    };

    axios
      .put(
        "http://localhost:8080/reviewerapi/approveDeclineWorkshop",
        WorkshopProposal
      )
      .then((response) => {
        alert("Data successfully inserted");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
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
        <h3 className="mt-4 mb-2">Approve or Decline Workshop Proposals</h3>
        <div className="col s6">
          <table class="table align-middle">
            <thead>
              <tr>
                <th>Workshop Proposal</th>
                <th>Approved Status</th>
                <th> View</th>
                <th>Approve</th>
                <th>Decline</th>
              </tr>
            </thead>

            <tbody>
              {this.state.proposals.map((proposal) => (
                <tr key={proposal.id}>
                  <td>{proposal.workshopProposalName}</td>
                  <StatusChecking approvedOrNot={proposal.ApprovedStatus} />
                  <td>
                    <button
                    className="btn-table"
                      onClick={(e) => this.viewpdf(proposal.workshopProposalId)}
                      className="btn waves-effect waves-light"
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                    class="btn btn-info" role="button"
                      onClick={(e) =>
                        this.approveWorkshop(
                          proposal.id,
                          proposal.workshopProposalId,
                          proposal.workshopProposalName
                        )
                      }
                      className="btn waves-effect waves-light"
                    >
                      Approve
                    </button>
                  </td>
                  <td>
                    <button
                    class="btn btn-info" role="button"
                      onClick={(e) =>
                        this.declineWorkshop(
                          proposal.id,
                          proposal.workshopProposalId,
                          proposal.workshopProposalName
                        )
                      }
                      className="btn waves-effect waves-light"
                    >
                      Decline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default approveWorkshopProposals;
