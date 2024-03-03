import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import emailjs from "@emailjs/browser";
import {Link} from "react-router-dom";
import Impressum from "./pages/Impressum";

function Footer() {
  const templateParams = {
    from_name: "",
    from_email: "",
    message: "Hello",
  };

  const service_id = "bepixeled_contact";
  const template_id = "bepi_port";
  const public_key = "2rOO5C4180eEMWeNy";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, public_key).then(
      (result) => {
        console.log("Success:", result.text);
      },
      (error) => {
        console.log("Error:", error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div className="flex-col flex ">
      <div
        id="contact"
        className="w-full h-auto bg-rich_black-300 flex flex-col-reverse md:flex-row justify-around items-center text-rich_black-800 p-8"
      >
        <div className="my-8 md:mb-0 flex flex-col justify-between gap-8">
          <div>
          <h2 className="text-2xl font-bold mb-4">Where to find me</h2>
          <div className="flex gap-4">
            <a
              href="
                https://www.linkedin.com/in/bepixeled/
              "
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <Unicons.UilLinkedin />
            </a>
            <a
              href="https://github.com/Bepixeled"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <Unicons.UilGithub />
            </a>
            <a
              href="https://twitter.com/bepixeled_dev"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <Unicons.UilTwitter />
            </a>
          </div>
          </div>
          <div className="text-xs"><Link to="/impressum">Impressum</Link></div>
        </div>

        <div>
          <form
            action="submit"
            className="flex flex-col gap-2 w-96"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              id="name"
              placeholder="Name"
              autoComplete="name"
              className="bg-transparent border border-rich_black-600 shadow-lg shadow-black text-white p-2 focus:outline-none rounded"
            />
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              id="email"
              placeholder="Email"
              autoComplete="email"
              
              className="bg-transparent border border-rich_black-600 shadow-lg shadow-black text-white p-2 focus:outline-none rounded"
            />
            <label htmlFor="message" className="text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="bg-transparent border border-rich_black-600 shadow-lg shadow-black text-white p-2 focus:outline-none rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-transparent text-white p-2 border-2 border-rich_black-600 w-fit flex gap-2"
            >
              Submit <Unicons.UilTelegramAlt />
            </button>
          </form>
        </div>
      </div>
      <p className="text-center text-xs text-rich_black-800 py-1">
        Made with 🖤 by Bepixeled © 2024
      </p>
    </div>
  );
}

export default Footer;
