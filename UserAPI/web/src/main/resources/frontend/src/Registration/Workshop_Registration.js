import React from "react";
import axios from "axios";

class Workshop extends React.Component {
  state = {
    file: null,
  };

  handleFile(e) {
    let file = e.target.files[0];

    this.setState({ file: file });

    // console.log(e.target.files, "$$$$");
    // console.log(e.target.files[0], "$$$$");
  }

  handleWorkshopProposalUpload(e) {
    // console.log(this.state, "The state ---$$$");

    let file = this.state.file;

    let formData = new FormData();

    formData.append("file", file);

    formData.append("name", "Workshop proposal");

    axios({
      url: `http://localhost:8080/file/upload/workshopProposal`,
      method: "POST",
      // headers: {
      //     authorization: your token
      // },
      data: formData,
    }).then(
      (res) => {},
      (err) => {}
    );
  }

  render() {
    return (
      <div className="container">
        <br></br>
        <br></br>
        <h3>Workshop Proposal</h3>
        <br></br>
        <br></br>
        <form>
          <div class="mb-3">
            <label for="passt" class="form-label">
              Upload Document
            </label>
            <br></br>
            <input
              type="file"
              class="form-control"
              name="file"
              onChange={(e) => this.handleFile(e)}
            />
          </div>

          <button
            type="button"
            class="btn btn-primary"
            onClick={(e) => this.handleWorkshopProposalUpload(e)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Workshop;
