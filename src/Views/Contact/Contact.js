import React, { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import ContactForm from "./ContactForm";

// import axios from "axios";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

// Toast Alerts
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

// process.env for server is saved in Vercel
let URL = process.env.REACT_APP_BACKEND_URL;

// ? Main Contact component
const Contact = () => {
  // State Hooks
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userSubject, setUserSubject] = useState("");
  // Will disable form after submit
  const [isDisabled, setIsDisabled] = useState(false);

  // AOS functionality
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  //  Toast alerts
  // Form not filled in properly alert
  const fillAllFieldsNotification = () => {
    toast.error("Please fill in all fields 👀 ", {
      position: "top-center",
      draggable: false,
    });
  };

  // ! incorrect email alert
  // const incorrectEmailAlert = () => {
  //   toast.error("Please enter a valid email address 📧 ", {
  //     position: "top-center",
  //     draggable: false,
  //   });
  // };

  // Message sent alert
  const messageSentNotification = () => {
    toast("Thanks for your message! 🎉 🌷 ", {
      position: "top-center",
      draggable: false,
    });
  };

  // Message failed alert (on catch error)
  const messageFailedNotification = () => {
    toast.error("Message failed to send 😔 ", {
      position: "top-center",
      draggable: false,
    });
  };

  // ? Function to get/update the user input via event.target.value
  const updateUserData = (event) => {
    // using switch statement to run through rather than making an individual handle function for each field - can add more if need be
    switch (event.target.name) {
      case "userName":
        setUserName(event.target.value);
        break;
      case "userEmail":
        setUserEmail(event.target.value);
        break;
      case "userMessage":
        setUserMessage(event.target.value);
        break;
      case "userSubject":
        setUserSubject(event.target.value);
        break;
      default:
        break;
    }
  };

  // ? Form validation
  // To check all fields are filled out correctly - condition to be passed inside  handleUserData()
  const handleErrorChecking = () => {
    // validation is set to false
    let validationSuccessful = false;

    // if all filed input conditions are met ..
    if (
      userName.length >= 1 &&
      userSubject.length >= 1 &&
      userMessage.length >= 2 &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail)
    ) {
      //.. validation is set to true
      validationSuccessful = true;
      // console.log("!!validation successful!!");
    }

    // !!! Come back and check this.. and comment out type="email" in form
    // ! Check for incorrect email..
    // if (userEmail !== /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail)) {
    //   validationSuccessful = false;
    //   incorrectEmailAlert();
    // }

    // Otherwise false and an error alert telling user to fill in all fields will be displayed
    else {
      validationSuccessful = false;
      // Toast error alert
      fillAllFieldsNotification();
    }
    return validationSuccessful;
  };

  // ? Handle user data -
  const handleUserData = async (event) => {
    // Prevent from from reloading before submitting
    event.preventDefault();

    // axios.post(`${URI}/send`, { test: "ok" });
    // If the form validation has been passed, create user data object..
    if (handleErrorChecking()) {
      // console.log(`!!!!!! name:`, userName);
      // console.log(`!!!!!! email:`, userEmail);
      // console.log(`!!!!!! message:`, userMessage);

      // Collect data
      let data = {
        name: userName,
        subject: userSubject,
        email: userEmail,
        message: userMessage,
      };
      // 'try' post fetch request..

      try {
        const response = await fetch(
          // ! URI is defined at top of page for dev or production
          `${URL}/send`,

          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        // Wait for the response and parse json data
        const res = await response.json();
        // console.log(response);
        // On successful fetch (passed backend conditions) - handled in onSubmit of form..
        // Alert user of success, reset the form and disable the form..
        if (res.status === "success") {
          // Toast message success notification
          messageSentNotification();
          // Reset form..
          setUserName("");
          setUserSubject("");
          setUserEmail("");
          setUserMessage("");
          // Disable form after successful submit
          setIsDisabled(true);
        }
        // console.log(res);
      } catch (error) {
        // Otherwise catch the error - will prevent the app from crashing even if the server is down..
        console.log("!!!!!", error);
        // Toast message letting user know that message sending failed
        messageFailedNotification();
      }
    }
  };

  return (
    <main className="contact-page-main-container">
      <ContactForm
        handleUserData={handleUserData}
        isDisabled={isDisabled}
        updateUserData={updateUserData}
        userName={userName}
        userSubject={userSubject}
        userEmail={userEmail}
        userMessage={userMessage}
      />
    </main>
  );
};

export default Contact;
