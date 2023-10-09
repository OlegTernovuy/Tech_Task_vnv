import { useState } from "react";
import "./ContactForm.scss";

export const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    moc: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    // Next Some function to push data (contactData) on back
    setContactData({
      name: "",
      moc: "",
      contact: "",
      message: "",
    });
    console.log(contactData);
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <h1 className="contactForm-title">Send Us a Message</h1>
      <div className="contactForm-inputs">
        <input
          className="contactForm-input"
          type="text"
          placeholder="Name"
          required
          name="name"
          onChange={handleChange}
        />
        <select
          className="contactForm-select"
          placeholder="Method of communication"
          required
          name="moc"
          onChange={handleChange}
        >
          <option value="">Method of communication</option>
          <option value="email">Email</option>
          <option value="tel">Phone number</option>
          <option value="telegram">Telegram</option>
        </select>

        <input
          className="contactForm-input"
          type={contactData.moc}
          pattern={
            contactData.moc === "tel" ? "[0-9]{3} [0-9]{3} [0-9]{4}" : "{3,26}"
          }
          placeholder={
            contactData.moc === "tel" ? "098 345 4556" : "Your contact"
          }
          required
          name="contact"
          onChange={handleChange}
        />
        <textarea
          className="contactForm-textarea"
          placeholder="Message"
          cols="30"
          rows="5"
          required
          name="message"
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="contactForm-button" type="submit">
        Send a Message
      </button>
    </form>
  );
};
