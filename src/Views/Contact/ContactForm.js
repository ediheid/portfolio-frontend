import React from "react";

// ! Ready to deploy

const ContactForm = (props) => {
  return (
    <div className="content-container">
      <h2 data-aos="fade-down" className="contact-page-heading">
        Contact
      </h2>

      <p
        data-aos="fade-down"
        data-aos-duration="1200"
        className="contact-page-text"
      >
        Work together?
      </p>

      <p
        data-aos="fade-down"
        data-aos-duration="1200"
        className="contact-page-text"
      >
        Or just want to say hi!?{" "}
      </p>

      <p
        data-aos="fade-down"
        data-aos-duration="1200"
        className="contact-page-text"
      >
        Drop me a message down below..
      </p>

      <div data-aos="fade-down" className="form-container">
        {/* Form */}
        <form className="form" onSubmit={props.handleUserData}>
          <label className="form-labels" htmlFor="userName">
            Name
          </label>
          <input
            disabled={props.isDisabled}
            className="contact-form-input"
            name="userName"
            onChange={props.updateUserData}
            value={props.userName}
          ></input>

          <label className="form-labels" htmlFor="userSubject">
            Subject
          </label>
          <input
            disabled={props.isDisabled}
            className="contact-form-input"
            name="userSubject"
            onChange={props.updateUserData}
            value={props.userSubject}
          ></input>

          <label className="form-labels" htmlFor="userEmail">
            Your email address
          </label>
          <input
            disabled={props.isDisabled}
            className="contact-form-input"
            type="email"
            name="userEmail"
            onChange={props.updateUserData}
            value={props.userEmail}
          ></input>

          <label className="form-labels" htmlFor="userMessage">
            Your Message
          </label>
          <textarea
            disabled={props.isDisabled}
            id="client-message"
            name="userMessage"
            onChange={props.updateUserData}
            value={props.userMessage}
          ></textarea>

          <button
            disabled={props.isDisabled}
            className="submit-button"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
      <div className="my-email-container">
        {/* //!! add my host email once I get it.. */}
        <span className="my-email-spans">Or reach out to me at</span>
        <span className="my-email-spans">contact@edithsdev.com</span>
      </div>
    </div>
  );
};

export default ContactForm;
