import React from "react";
import axios from "axios";
import './ReviewerHomePage.css'

class approveResearchPapers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      papers: [],
      researchPaperId: "",
      researchPaperName: "",
      approvedStatus: false,
      TBDStatus: false,
      id: "",
      name: "",
    };
  }

  componentWillMount() {
    axios
      .get("http://localhost:8080/userapi/viewAllResearchPapers")
      .then((res) => {
        this.setState({
          papers: res.data,
        });
      });
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/userapi/viewAllResearchPapers")
      .then((res) => {
        this.setState({
          papers: res.data,
        });
      });
  }

  approvePaper(id, researchPaperId, researchPaperName) {
    // this.setState({
    //   researchPaperId: researchPaperId,
    //   approvedStatus: true,
    //   TBDStatus: false,
    // });

    let ResearchPaper = {
      id: id,
      researchPaperName: researchPaperName,
      approvedStatus: true,
      tBDStatus: false,
      researchPaperId: researchPaperId,
    };

    axios
      .put(
        "http://localhost:8080/reviewerapi/approveDeclineConferenceResearchPaper",
        ResearchPaper
      )
      .then((response) => {
        alert("Data successfully inserted");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  declinePaper(id, researchPaperId, researchPaperName) {
    let ResearchPaper = {
      id: id,
      researchPaperName: researchPaperName,
      approvedStatus: false,
      tBDStatus: true,
      researchPaperId: researchPaperId,
    };

    axios
      .put(
        "http://localhost:8080/reviewerapi/approveDeclineConferenceResearchPaper",
        ResearchPaper
      )
      .then((response) => {
        alert("Data successfully inserted");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  viewpdf(researchPaperId) {
    axios({
      url: "http://localhost:8080/file/download/" + researchPaperId,
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
      <div className="background">
      <div className="container">
        <h2 className="mt-4 mb-2">Approve or Decline Research papers</h2>
        <br></br>
        <div className="col s6">
          <table class="table align-middle">
            <thead>
              <tr>
                <th>Research Paper</th>
                {/* <th>Approved Status</th> */}
                <th>View</th>
                <th>Approve</th>
                <th>Decline</th>
              </tr>
            </thead>

            <tbody>
              {this.state.papers.map((proposal) => (
                <tr key={proposal.id}>
                  <td>{proposal.researchPaperName}</td>
                  {/* <td>{proposal.approvedStatus} </td> */}
                  <td>
                    <button
                    className="btn btn-primary"
                      onClick={(e) => this.viewpdf(proposal.researchPaperId)}
                      // className="btn waves-effect waves-light"
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                    className="btn btn-primary"
                      onClick={(e) =>
                        this.approvePaper(
                          proposal.id,
                          proposal.researchPaperId,
                          proposal.researchPaperName
                        )
                      }
                      // className="btn waves-effect waves-light"
                    >
                      Approve
                    </button>
                  </td>
                  <td>
                    <button
                    className="btn btn-primary"
                      onClick={(e) =>
                        this.declinePaper(
                          proposal.id,
                          proposal.researchPaperId,
                          proposal.researchPaperName
                        )
                      }
                      // className="btn waves-effect waves-light"
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
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      </div>
    );
  }
}

export default approveResearchPapers;
