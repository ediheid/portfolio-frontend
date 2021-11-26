import React from "react";
import cartoonBrowser from "./Static/marginalia-229.png";

import Axios from "axios";
import fileDownload from "js-file-download";

const DownloadCVSection = () => {
  // * As my personal CV is not sensitive data I have decided to run the download option through the frontend using anchor tag
  // Download function using fileDownload package manager - CV sent from backend
  // const download = (event) => {
  //   event.preventDefault();
  //   Axios({
  //     url: process.env.REACT_APP_BACKEND_URL,
  //     method: "GET",
  //     // Binary Large Object
  //     responseType: "blob",
  //   }).then((res) => {
  //     console.log(res);
  //     fileDownload(res.data, "CV-Edith-Heidmann.pdf");
  //   });
  // };

  return (
    <section className="download-cv-section">
      <h2
        data-aos="fade-left"
        data-aos-once="false"
        data-aos-duration="1000"
        className="bio-heading cv-heading"
      >
        CV
      </h2>

      <div
        className="cartoon-browser-container"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <img
          id="cartoon-browser"
          src={cartoonBrowser}
          alt="Cartoon browser window with pastel pink border containing a download link Edith's CV. Vector from https://icons8.com/illustrations/style--marginalia"
        ></img>
        <p className="cartoon-browser-text">
          You can.. <br /> download..
          <br /> my CV here...
        </p>

        {/*  // * As my personal CV is not sensitive data I have decided to run the
         // *download option through the frontend using anchor tag */}
        {/* Download button */}
        {/* <button
          className="download-cv-button"
          onClick={(event) => download(event)}
        >
          Download
        </button> */}

        {/* // ! Download button to style */}
        <div className="download-cv-button">
          <a href="./CV-Edith-Heidmann.pdf" download target="_blank">
            Click to download
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadCVSection;
