import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";
import "antd/dist/reset.css";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formref = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("cCYbNrevKyfsQD6ih");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.name && form.email && form.message) {
      try {
        await emailjs.send("service_y8wpbms", "template_e53ovls", {
          name: form.name,
          email: form.email,
          message: form.message,
        });

        setForm({ name: "", email: "", message: "" });
        formref.current.reset();
        message.success(
          "Thank you 😊 I will get back to you as soon as possible!"
        );
      } catch (error) {
        message.error("Failed to send message. Please try again later.");
      } finally {
        setLoading(false);
      }
    } else {
      message.warning("Yooooooo! Please fill all input fields");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-black-100 p-8 rounded-2xl md:w-[800px] w-[100%]">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formref}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
