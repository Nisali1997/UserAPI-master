import React from "react";
import axios from "axios";

class viewPDFClass extends React.Component {
  //   state = {
  //     file: null,
  //   };

  //   handleFile(e) {
  //     let file = e.target.files[0];

  //     this.setState({ file: file });

  //     // console.log(e.target.files, "$$$$");
  //     // console.log(e.target.files[0], "$$$$");
  //   }

  handleUpload(e) {
    // console.log(this.state, "The state ---$$$");

    // let file = this.state.file;

    // let formData = new FormData();

    // formData.append("file", file);

    // formData.append("name", "Research paper");

    // axios({
    //   url: "http://localhost:8080/file/download/60e060467a67b34c278431b1", //your url
    //   method: "GET",
    //   responseType: "blob", // important
    // }).then((response) => {
    //   const url = window.URL.createObjectURL(new Blob([response.data]));
    //   const link = document.createElement("a");
    //   link.href = url;
    //   link.setAttribute("download", "file.pdf"); //or any other extension
    //   document.body.appendChild(link);
    //   link.click();
    // });

    axios({
      url: "http://localhost:8080/file/download/60e060467a67b34c278431b1",
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

    // axios({
    //   url: `http://localhost:8080/file/upload`,
    //   method: "POST",
    //   // headers: {
    //   //     authorization: your token
    //   // },
    //   data: formData,
    // }).then(
    //   (res) => {},
    //   (err) => {}
    // );
  }

  render() {
    return (
      <div className="container">
        <h1>THe form</h1>

        <form>
          <div className="">
            {/* <label>Select file</label>
            <input
              type="file"
              name="file"
              onChange={(e) => this.handleFile(e)}
            /> */}
          </div>

          <button type="button" onClick={(e) => this.handleUpload(e)}>
            View
          </button>
        </form>
      </div>
    );
  }
}

export default viewPDFClass;
