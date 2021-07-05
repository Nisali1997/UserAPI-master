import React from "react";
import "./Registration_Type.css";

class RegistrationType extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <br></br>
        <h2>Registration</h2>
        <br></br>

        <div
          style={{
            position: "center",
            textAlign: "left",
            backgroundColor: "#EBF5FB",
            padding: "7px",
            margin: "5px",
            border: "1px solid black",
            borderRadius: "8px",
          }}
        >
          <h5 style={{ fontWeight: "bold" }}>Instructions</h5>
          <ul>
            <li>
              To register as a Workshop Presenter,
              <ul>
                <li>
                  First, you must upload a worskhop proposal and wait for
                  approval
                </li>
                <li>
                  Next, you can register as a workshop presenter from the
                  following section, where it displays whether your proposal is
                  approved or not.
                </li>
              </ul>
            </li>
            <li>
              To register as a Researcher,
              <ul>
                <li>
                  First, you must upload a research paper and wait for the
                  approval
                </li>
                <li>
                  Next, you can register as a researcher from the following
                  section, where it displays whether your research paper is
                  approved or not.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mt-3 pt-3 mb-3">
          <h5 style={{ textAlign: "left" }}>Document uploads by the users</h5>
          <div
            class="table-responsive"
            className="col-md-8"
            style={{ border: "1px solid black", marginTop: "5px" }}
          >
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">User Options</th>
                  <th scope="col">Material Type(pdf)</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Workshop Presenter</th>
                  <td>Workshop Proposal </td>

                  <td>
                    <a href="/workshop" class="btn btn-info" role="button">
                      Upload
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Researcher</th>
                  <td>Research Paper </td>

                  <td>
                    <a href="/researcher" class="btn btn-info" role="button">
                      Upload
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 mb-4"></div>
        <h3 className="mt-4 pt-4">User Registration</h3>

        <hr></hr>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
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
                  <td>40,000.00 </td>

                  <td>
                    Paper Presentation up-to one paper Access to all the
                    technical sessions and workshops Conference
                    kitNon-transferable and non- refundable
                  </td>
                  <td>
                    {/* <a className="nav-link" href="/ws_presenter">
            <input type="radio"  class="btn-check" name="btnradio"  id="btnradio1" autocomplete="off"
            onChange={e => this.props.history.push('newRoute') || (window.location.href = "/ws_presenter") }/>
            <label class="btn btn-outline-primary" for="btnradio1">Register</label>
            </a> */}
                    <a href="/ws_presenter" class="btn btn-info" role="button">
                      Register
                    </a>
                  </td>
                </tr>

                <tr class="align-bottom">
                  <th scope="row">Guest</th>
                  <td>10,000.00 </td>
                  <td>
                    Access to all technical sessions including workshops on a
                    selected day
                  </td>
                  <td>
                    {/* <a className="nav-link" href="/participent">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
          onChange={e => this.props.history.push('newRoute') || (window.location.href = "/participent") }/>
          <label class="btn btn-outline-primary" for="btnradio2">Register </label>
          </a> */}
                    <a href="/participent" class="btn btn-info" role="button">
                      Register
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">Researcher</th>
                  <td>5,000.00</td>
                  <td>
                    Access to all technical sessions and keynote speeches and No
                    workshop participation
                  </td>
                  <td>
                    {/* <a className="nav-link" href="/researcher">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
        onChange={e => this.props.history.push('newRoute') || (window.location.href = "/researcher") }/>
        <label class="btn btn-outline-primary" for="btnradio2">Register</label>
        </a> */}
                    <a href="/researcher" class="btn btn-info" role="button">
                      Register
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">Workshop Presenter</th>
                  <td></td>
                  <td>Register for approved workshop proposals</td>
                  <td>
                    {/* <a className="nav-link" href="/workshop">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
        onChange={e => this.props.history.push('newRoute') || (window.location.href = "/workshop") }/>
        <label class="btn btn-outline-primary" for="btnradio2">Register</label>
        </a> */}
                    <a
                      href="/viewWorkshopProposals"
                      class="btn btn-info"
                      role="button"
                    >
                      Register
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">Researcher</th>
                  <td>7,000.00</td>
                  <td>Register for approved research papers</td>
                  <td>
                    {/* <a className="nav-link" href="/workshop">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
        onChange={e => this.props.history.push('newRoute') || (window.location.href = "/workshop") }/>
        <label class="btn btn-outline-primary" for="btnradio2">Register</label>
        </a> */}
                    <a
                      href="/viewResearchPapers"
                      class="btn btn-info"
                      role="button"
                    >
                      Register
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <a href="/adminNavbar" class="btn btn-info" role="button">
              Other
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationType;
