import React from "react";
import "./about.css";

function ClientForm({ formData, handleChange, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        id="full_name"
        type="text"
        name="full_name"
        placeholder="Your Name"
        required
        value={formData.full_name}
        onChange={handleChange}
      />
      <input
        className="form-input"
        id="mobile_number"
        type="text"
        name="mobile_number"
        placeholder="xxx-xxx-xxxx"
        required
        value={formData.mobile_number}
        onChange={handleChange}
      />
      <input
        className="form-input"
        id="email"
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        className="form-input"
        id="message"
        type="text"
        name="message"
        rows="1"
        placeholder="Looking For"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit" className="button">
        DONE
      </button>
    </form>
  );
}

export default ClientForm;
