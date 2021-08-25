import React, { useState } from "react";

import { validateEmail } from "../utility/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     console.log("Submit Form", formState);
  //   }
  // };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };
{/* onSubmit={handleSubmit}  <--- this should be in place of the action, method, and encType*/} 
  return (
    <section>
       <h1 data-testid="h1tag" id="contact-me-h1">If you have any questions at all, I will be happy to help. Feel free to contact me by telephone at : 541-797-8292, send an email to <a href="mailto:blake.austin.dev@gmail.com" id="contact-email">blake.austin.dev@gmail.com</a> by clicking the link, or you may fill out the form below. I will get back you as soon as possible. Thank you.</h1>
      <form id="contact-form" action="mailto:blake.austin.dev@gmail.com" method="post" encType="text/plain"> 
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
