import React from "react";
import "./ContactForm.scss";
import Button from "../shared/Button";

const ContactForm = () => {
  return (
    <form className="form">
      <input
        type="text"
        placeholder="your name"
        required
        className="form-field"
      />

      <input
        type="email"
        placeholder="e-mail"
        required
        className="form-field"
      />

      <input
        type="tel"
        placeholder="phone number"
        required
        className="form-field"
      />

      <textarea
        placeholder="your message"
        className="form-field form-textarea"
      ></textarea>

      <Button title="send a message" type="submit" />
    </form>
  );
};

export default ContactForm;
