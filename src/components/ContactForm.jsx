import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
