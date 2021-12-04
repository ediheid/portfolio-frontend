import React, { useState } from "react";

const PasswordGenerator = () => {
  // Charset
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";

  // ? State Hooks
  // Password
  let [password, setPassword] = useState("");
  // length of password
  let [passwordLength, setPasswordLength] = useState();
  // Mixed Case
  let [mixedCase, setMixedCase] = useState(false);

  // ? Collect user input Data 'onChange' event
  const collectInput = (event) => {
    switch (event.target.name) {
      // Collect password length
      case "passwordLength":
        setPasswordLength(event.target.value);
        break;
      // ! If checkbox is checked then true - else false
      case "mixedCase":
        if (event.target.checked) {
          setMixedCase(true);
        } else {
          setMixedCase(false);
        }
        break;
      default:
        break;
    }
  };

  // Testing..
  console.log(passwordLength);
  console.log(mixedCase);

  // ? Define password function
  const definePassword = (event) => {
    event.preventDefault();

    let calculatingPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      let index = Math.floor(Math.random() * charset.length);

      if (mixedCase === true) {
        if (i > 0 && i % 3 === 0) {
          calculatingPassword += charset[index].toLocaleUpperCase();
        } else {
          calculatingPassword += charset[index];
        }
      } else {
        calculatingPassword += charset[index];
      }
    }

    // *  Default password length if no number is selected
    if (passwordLength < 1) {
      for (let i = 0; i < 20; i++) {
        let index = Math.floor(Math.random() * charset.length);

        if (mixedCase === true) {
          if (i > 0 && i % 3 === 0) {
            calculatingPassword += charset[index].toLocaleUpperCase();
          } else {
            calculatingPassword += charset[index];
          }
        } else {
          calculatingPassword += charset[index];
        }
      }
    }

    setPassword(calculatingPassword);
    // Reset input fields
    setPasswordLength("");

    // !!! Search how to 'uncheck' checkbox on form submit
    // setMixedCase();
  };

  // !!!

  return (
    <div className="password-generator-container">
      <h1 className="password-generator-heading">Random Password Generator</h1>

      <label className="password-subheadings new-password">
        Your new password:
      </label>
      <div className="output">{password}</div>

      <form className="password-form">
        <label className="password-subheadings">
          Choose password length (Default = 20 characters)
        </label>
        <input
          className="define-number-input"
          type="number"
          name="passwordLength"
          onChange={collectInput}
          value={passwordLength}
          placeholder="Password length.."
        ></input>

        <div className="checkbox-container">
          <span className="password-subheadings">Use mixed cases?</span>
          <input
            name="mixedCase"
            onChange={collectInput}
            id="checkbox"
            type="checkbox"
            //   checked="checked"
          />
        </div>
        <button className="generate-button" onClick={definePassword}>
          Generate Password
        </button>
      </form>
    </div>
  );
};

export default PasswordGenerator;
