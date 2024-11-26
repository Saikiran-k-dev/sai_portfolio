import React, { useState } from "react";
import styles from "../css/contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you can send the form data to a server or email API
    console.log(formData); // Logs form data for demonstration
  };

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Contact Me</h2>
      {isSubmitted ? (
        <div className={styles.successMessage}>
          <p>Thank you for your message! I will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
