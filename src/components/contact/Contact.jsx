import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BsDiscord, BsLinkedin } from "react-icons/bs";

import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0muyqjs",
        "template_oyu0jfw",
        form.current,
        "Ugun6oUPgBg-QjP6l"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    alert("Message Sent Successfully.");
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rajayush1310@gmail.com</h5>
            <a href="mailto:rajayush1310@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            {/* <h5>linkedin.com/in/theayushraj/</h5> */}
            <a href="mailto:rajayush1310@gmail.com">Let's Connect Here</a>
          </article>
          <article className="contact__option">
            <BsDiscord className="contact__option-icon" />
            <h4>Discord</h4>
            <h5>ayushraj_1310</h5>
            <a href="https://discord.com/channels/@me">Ping Here</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
