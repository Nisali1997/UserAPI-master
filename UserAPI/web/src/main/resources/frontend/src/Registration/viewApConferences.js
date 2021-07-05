import React from "react";
import axios from "axios";
import ParticipentRegistration from "./Participent_Registration";

class viewApConferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conferences: [],
      id: "",
      conferenceName: "",
      date: "",
      venue: "",
      startTime: "",
      duration: "",
    };
  }

  componentWillMount() {
    axios.get("http://localhost:8080/userapi/viewAllConference").then((res) => {
      this.setState({
        conferences: res.data,
        id: "",
        name: "",
      });
    });
  }

  register(id) {
    this.setState({
      id: id,
    });
  }

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
        <h3 className="mt-4 mb-2">All conferences</h3>
        <div className="col s6">
          <table>
            <thead>
              <tr>
                <th>Conference</th>
                <th>Date</th>
                <th>Venue</th>
                <th>StartTime</th>
                <th>Duration</th>
                <th>Register</th>
              </tr>
            </thead>

            <tbody>
              {this.state.conferences.map((conference) => (
                <tr key={conference.id}>
                  <td>{conference.conferenceName}</td>
                  <td>{conference.date}</td>
                  <td>{conference.venue}</td>
                  <td>{conference.startTime}</td>
                  <td>{conference.duration}</td>
                  <td>
                    <button
                      onClick={(e) => this.register(conference.id)}
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
          {this.state.id ? <ParticipentRegistration id={this.state.id} /> : ""}

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

export default viewApConferences;
