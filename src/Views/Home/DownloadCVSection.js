import React from "react";
import cartoonBrowser from "./Static/marginalia-229.png";

import Axios from "axios";
import fileDownload from "js-file-download";

const DownloadCVSection = () => {
  // Download function using fileDownload package manager - CV sent from backend
  const download = (event) => {
    event.preventDefault();
    Axios({
      url: process.env.REACT_APP_BACKEND_URL,
      method: "GET",
      // Binary Large Object
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      fileDownload(res.data, "CV-Edith-Heidmann.pdf");
    });
  };

  return (
    <section className="download-cv-section">
      <div className="cartoon-browser-container">
        <img
          id="cartoon-browser"
          src={cartoonBrowser}
          alt="Cartoon browser window with pastel pink border containing a download link Edith's CV. Vector from https://icons8.com/illustrations/style--marginalia"
        ></img>

        <button
          className="download-cv-button"
          onClick={(event) => download(event)}
        >
          Download
        </button>
      </div>
    </section>
  );
};

export default DownloadCVSection;
