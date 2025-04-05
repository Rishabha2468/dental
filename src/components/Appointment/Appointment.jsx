import React, { useState } from "react";
import useServices from "../../useHook/useServices";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { db } from "../../Firebase/firebase.config";

const Appointment = () => {
  const [services] = useServices();
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection("appointments").add({
        ...form,
        createdAt: new Date(),
      });
      alert("Appointment submitted successfully!");
      setForm({ name: "", email: "", service: "", date: "", message: "" });
    } catch (err) {
      console.error("Error saving appointment:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Breadcrumbs title="Appointment" />
      <div className="container py-16">
        <h1 className="text-4xl text-center font-bold font-Roboto">
          Drop your <span className="text-primary">Appointment</span>
        </h1>
        <p className="text-gray-400 py-2 text-center">
          Have a question or just want to say hi? We'd love to hear from you.
        </p>
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
            <br />
            <br />
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
            <br />
            <br />
            <label htmlFor="service">Services:</label>
            <select
              name="service"
              id="service"
              className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Services</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            <br />
            <br />
            <label htmlFor="date">Date:</label>
            <input
              className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
              type="text"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea
              className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
              rows="4"
              cols="50"
              name="message"
              value={form.message}
              onChange={handleChange}
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
      </div>
    </>
  );
};

export default Appointment;
