// !!! To refer back to when I want to use a Dropdown card

// import React, { Fragment, useState } from "react";

// import Expand from "react-expand-animated";

// import itadakimasuMobileHome from "./static/itadakimasu-mobile-home.png";

// import { RiDoubleQuotesL } from "react-icons/ri";
// import { RiDoubleQuotesR } from "react-icons/ri";

// // ! Global button content variable to change button icon depending in isOpen state
// let buttonContent;

// const ItadakimasuCard = (props) => {
//   //  State Hook - isOpen to open and close expandable area - original
//   const [isOpen, setIsOpen] = useState(false);

//   // Handle Toggle original function
//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   // ! Change button icon depending it expanded card area is open or closed
//   if (!isOpen) {
//     buttonContent = <props.MdOutlineExpandMore />;
//   } else {
//     buttonContent = <props.MdOutlineExpandLess />;
//   }

//   return (
//     <Fragment>
//       {/* // ? Main card */}
//       <div className="project-card-itadakimasu main-card">
//         <img
//           className="mobile-img-view"
//           src={itadakimasuMobileHome}
//           alt="Mobile view of site, 'Itadakimasu, to eat and receive' - a simple homepage with a search bar and a lantern illustration behind a glass card."
//         />

//         {/*  // !!! To Style */}
//         {/* Links and buttons live here */}
//         <div className="options-container">
//           <a
//             className="link-icon"
//             href="https://epic-hypatia-0d24fe.netlify.app/"
//             target="_blank"
//             rel="noreferrer noopener"
//           >
//             {/* Link Icon imported on Projects Component page */}

//             <props.BsLink45Deg />
//           </a>

//           <button className="more-button" onClick={handleToggle}>
//             {/* Button content variable - changes on state on isOpen state */}
//             {buttonContent}
//           </button>
//         </div>
//       </div>

//       {/* // ? Expanded section */}
//       <Expand open={isOpen}>
//         <div className="expanded-card-area">
//           <h2 className="expanded-card-heading">Itadakimasu</h2>
//           <p className="expanded-card-paragraph">
//             A simple React app utilising a recipe search API - with custom
//             parameters, conditions and styling, resulting in the user being able
//             to effortlessly search for their favourite Japanese dish.
//             <span className="itadakimasu-quote-span">
//               <RiDoubleQuotesL fontSize="2rem" />
//               <i> Itadakimasu! </i>
//               <RiDoubleQuotesR />
//             </span>
//           </p>

//           <a
//             className="website-written-link"
//             href="https://epic-hypatia-0d24fe.netlify.app/"
//             target="_blank"
//             rel="noreferrer noopener"
//           >
//             Link to site
//           </a>

//           {/* // ! Maybe for underline */}
//           <div className="expanded-card-underline"></div>
//         </div>
//       </Expand>
//     </Fragment>
//   );
// };

// export default ItadakimasuCard;

// // Icons
// // link icon
// import { BsLink45Deg } from "react-icons/bs";
// // less/more icons
// import { MdOutlineExpandMore } from "react-icons/md";
// import { MdOutlineExpandLess } from "react-icons/md";
