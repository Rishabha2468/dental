import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { db } from "../../Firebase/firebase.config"; // same as appointment.js

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection("contacts").add({
        ...form,
        createdAt: new Date(),
      });
      alert("Message submitted successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error saving contact:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <Breadcrumbs title="Contact us" />
      <div className="container py-16">
        <div className="pb-8">
          <h1 className="text-4xl font-bold font-Roboto">
            Drop a <span className="text-primary">Message</span>
          </h1>
          <p className="text-gray-400 py-2">
            Have a question or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-2 justify-between">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="name">First name:</label>
              <input
                className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <br /><br />
              <label htmlFor="email">Email:</label>
              <input
                className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <br /><br />
              <label htmlFor="message">Message:</label>
              <textarea
                className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
                rows="4"
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <br />
              <button
                type="submit"
                className="bg-white mt-4 border border-primary text-black py-3 px-6 rounded-md hover:bg-transparent hover:bg-primary hover:text-white transition"
              >
                Submit
              </button>
            </fieldset>
          </form>

          <div className="inset-0 lg:px-16 px-8">
            <h1 className="text-4xl py-2 font-Poppins font-semibold">
              Get In <span className="text-primary"> Touch</span>
            </h1>
            <div className="flex py-4">
              <i className="fas fa-map-marker-alt text-3xl text-secondary"></i>
              <div className="px-8">
                <p>Chandigarh lil bro</p>
              </div>
            </div>
            <div className="flex py-4">
              <i className="far fa-envelope text-3xl text-secondary"></i>
              <div className="px-8">
                <p>info@adc.com</p>
                <p>support@adc.com</p>
              </div>
            </div>
            <div className="flex py-4">
              <i className="fas fa-phone text-3xl text-secondary"></i>
              <div className="px-8 font-bold">
                <p>+91 9191 123 567</p>
                <p>+91 5678 546 8975</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-0 mt-10">
          <iframe
            className="w-full h-96"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.3613688339683!2d76.77941781459848!3d30.733314881642768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0a828b7b65%3A0xdaa5c722e5ffdb8!2sChandigarh!5e0!3m2!1sen!2sin!4v1712345678901!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
