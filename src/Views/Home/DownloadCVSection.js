import React from "react";
import cartoonBrowser from "./Static/marginalia-229.png";

//  file-download from backend again as firefox and safari no longer support download attribute
import Axios from "axios";
import fileDownload from "js-file-download";

// Toast Alerts
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

// ? Component
// Toast alert for catch block in case server is down when trying to download CV
const DownloadCVSection = () => {
  const downloadFailedNotification = () => {
    toast.error("Ooops! Download not working, please try again later 😘", {
      draggable: false,
      position: "top-center",
    });
  };

  // file-download from backend again as firefox and safari no longer support download attribute
  // Download function using fileDownload package manager - CV sent from backend
  const download = async (event) => {
    event.preventDefault();
    // async/await for error handling
    // try
    try {
      await Axios({
        url: process.env.REACT_APP_BACKEND_URL,
        method: "GET",
        // Binary Large Object
        responseType: "blob",
      }).then((res) => {
        console.log(res);
        fileDownload(res.data, "CV-Edith-Heidmann.pdf");
      });
    } catch (error) {
      // Catch error if server is down or for any other reason CV may not dowload
      console.log("!!!!", error);
      downloadFailedNotification();
    }
  };

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

        {/* Download button */}
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
