import React from "react";
import Calculator from "./Calculator";
import NavBar from "../../Components/NavBar/NavBar";
// import axios from "axios";

// import MobileNavigation from "../../Components/NavBar/MobileNavigation";
// import { motion } from "framer-motion";

const WebApps = () => {
  // ! Axios test with coffee API..
  // const [image, setImage] = useState("");

  // useEffect(() => {
  //   console.log("Test!");
  //   axios.get("http://localhost:5000/").then(function (response) {
  //     console.log(response.data);
  //     setImage(response.data);
  //   });
  // }, []);

  return (
    <>
      <NavBar />

      {/* rename page-container */}
      <main className="web-apps-page-container">
        <div className="apps-container">
          {/* // ! Axios test with coffee API.. */}
          {/* <img src={image} /> */}

          <Calculator />
        </div>
      </main>
    </>
  );
};

export default WebApps;
