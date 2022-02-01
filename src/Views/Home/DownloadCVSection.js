import React from "react";
import cartoonBrowser from "./Static/marginalia-229.png";

//  file-download from backend again as firefox and safari no longer support download attribute
import Axios from "axios";
import fileDownload from "js-file-download";

// React Type Animation
import TypeAnimation from "react-type-animation";

// Toast Alerts
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

// ? Component
const DownloadCVSection = () => {
  // Toast alert for catch block in case server is down when trying to download CV
  const downloadFailedNotification = () => {
    toast.error("Ooops! Download not working, please try again later 😘", {
      draggable: false,
      position: "top-center",
    });
  };

  // Toast alert for try block to let user know CV is downloading in case it is slow..
  const downloadSuccessfulNotification = () => {
    toast.success("Downloading CV ⏰ 💫 ", {
      draggable: false,
      position: "top-center",
      autoClose: 3000,
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
        downloadSuccessfulNotification();
        // console.log(res);
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
        data-aos="fade-right"
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
        {/* <p className="cartoon-browser-text">
          You can.. <br /> download..
          <br /> my CV here...
        </p> */}

        {/* react-type-animation */}
        <TypeAnimation
          className="cartoon-browser-text"
          cursor={true}
          sequence={["Download..  my CV here...", 500, ""]}
          wrapper="div"
          repeat={Infinity}
        />

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
