import React from "react";
import cartoonBrowser from "./Static/marginalia-229.png";

const DownloadCVSection = () => {
  return (
    <section className="download-cv-section">
      <div className="cartoon-browser-container">
        <img
          id="cartoon-browser"
          src={cartoonBrowser}
          alt="Cartoon browser window with pastel pink border containing a download link Edith's CV. Vector from https://icons8.com/illustrations/style--marginalia"
        ></img>
      </div>
    </section>
  );
};

export default DownloadCVSection;
