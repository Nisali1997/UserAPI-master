import React from "react";
import axios from "axios";

class testRegistration extends React.Component {
  state = {
    file: null,
  };

  handleFile(e) {
    let file = e.target.files[0];

    this.setState({ file: file });

    // console.log(e.target.files, "$$$$");
    // console.log(e.target.files[0], "$$$$");
  }

  handleResearchPaperUpload(e) {
    // console.log(this.state, "The state ---$$$");

    let file = this.state.file;

    let formData = new FormData();

    formData.append("file", file);

    formData.append("name", "Research paper");

    axios({
      url: `http://localhost:8080/file/upload/researchPaper`,
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
        <h1>THe form</h1>

        <form>
          <div className="">
            <label>Select ResearchPaper</label>
            <input
              type="file"
              name="file"
              onChange={(e) => this.handleFile(e)}
            />
          </div>

          <button
            type="button"
            onClick={(e) => this.handleResearchPaperUpload(e)}
          >
            Upload
          </button>

          <div></div>

          <div className="">
            <label>Select Workshop Proposal</label>
            <input
              type="file"
              name="file"
              onChange={(e) => this.handleFile(e)}
            />
          </div>

          <button
            type="button"
            onClick={(e) => this.handleWorkshopProposalUpload(e)}
          >
            Upload
          </button>
        </form>
      </div>
    );
  }
}

export default testRegistration;
