import React, { useState } from "react";
import { AiOutlinePhone, AiOutlineMail, AiOutlineHome } from "react-icons/ai";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.phone || !/^\d{10,}$/.test(formData.phone)) {
      newErrors.phone =
        "Phone must be at least 10 digits and contain only numbers.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
    setErrors(validationErrors);
  };

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {/* Left Section */}
          <div className="relative group overflow-hidden">
            <img
              src="/contact.jpg"
              alt="ContactUs Section"
              className="w-full h-full rounded object-cover overflow-hidden"
            />
            <div className="absolute inset-0 bg-indigo-700 opacity-30 group-hover:opacity-40 transition-all"></div>
            <div className="absolute bottom-0 p-6 lg:p-11">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <ContactInfo />
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="bg-white p-6 lg:p-11 rounded-2xl shadow-lg">
            <h2 className="text-indigo-600 font-bold text-4xl mb-8">
              Send Us A Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full h-12 text-gray-700 placeholder-gray-400 bg-gray-50 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-full shadow-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none pl-4`}
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full h-12 text-gray-700 placeholder-gray-400 bg-gray-50 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-full shadow-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none pl-4`}
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full h-12 text-gray-700 placeholder-gray-400 bg-gray-50 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-full shadow-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none pl-4`}
                  placeholder="Phone"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="mb-5">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full h-24 text-gray-700 placeholder-gray-400 bg-gray-50 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none pl-4 pt-2`}
                  placeholder="Message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-indigo-600 text-white font-bold rounded-full shadow-md hover:bg-indigo-800 transition-all"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Info Component
const ContactInfo = () => {
  const contacts = [
    {
      icon: <AiOutlinePhone size={24} />,
      text: "470-601-1911",
    },
    {
      icon: <AiOutlineMail size={24} />,
      text: "https://veilmail.io/irish-geoff",
    },
    {
      icon: <AiOutlineHome size={24} />,
      text: "654 Sycamore Avenue, Meadowville, WA 76543",
    },
  ];

  return (
    <div>
      {contacts.map((contact, index) => (
        <a
          href="#"
          key={index}
          className="flex items-center space-x-4 hover:bg-indigo-50 transition-colors rounded-lg p-3"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full shadow-md">
            {contact.icon}
          </div>
          <h5 className="text-gray-700 text-base font-medium leading-6">
            {contact.text}
          </h5>
        </a>
      ))}
    </div>
  );
};

export default ContactSection;
