import { useState } from "react";
import { useAuth } from "../store/auth";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [notun, setnotun] = useState(true);
  const { person } = useAuth();
  if (notun && person) {
    setContact({
      username: person.username,
      email: person.email,
      message: "",
    });
    setnotun(false);
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <>
      <section
        className="flex items-center justify-center min-h-screen py-12 bg-cover bg-center bg-fixed "
        style={{
          backgroundImage: `url('https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-laptop-helping-customer-service-pack-network-communication-illustrations-2912020.png') `,
        }}
      >
        <div className="bg-blue-400 bg-opacity-90 shadow-2xl rounded-lg overflow-hidden max-w-5xl w-full mx-4 md:mx-8 ">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                className="h-full w-full object-cover "
                src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-laptop-helping-customer-service-pack-network-communication-illustrations-2912020.png"
                alt="Contact Us"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center md:text-left">
                Contact Us
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="username"
                    className="block text-gray-700 mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="off"
                    required
                    value={contact.username}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    autoComplete="off"
                    required
                    value={contact.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={contact.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
