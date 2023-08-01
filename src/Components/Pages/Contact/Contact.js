import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast  from "react-hot-toast";
const Contact = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ngfj77",
        "template_p3lkooj",
        form.current,
        "8orPc_ggqysHnEuQV"
      )
      .then(
        (result) => {
          
          toast.success("Successfully Message Sent", {
            position: "top-center",
          });
          form.current.reset();
        },
        (error) => {
          
          toast.error('Something Is Wrong')
        }
      );
  };

  return (
    <div
      id="contact"
      className="lg:px-14 px-4 mb-10"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <h2
        className="lg:text-5xl text-3xl
        uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-700 font-bold text-center my-14 "
      >
        Contact
        <hr className="w-3/12  mx-auto mb-4" />
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center items-center mx-auto py-3 gap-5 border rounded-xl "
      >
        <div className="grid lg:grid-cols-2 mt-4 self-center">
        <div className="px-8 justify-self-start">
        <input
          name="user_email"
          type="email"
          placeholder="Your Email"
          required
          className="input input-bordered border-white w-full my-4 bgColor "
        />
         <input
          name="user_name"
          type="text"
          placeholder=" Your Name"
          required
          className="input bgColor border-white input-bordered w-full "
        />
        </div>
        <textarea
          name="message"
          required
          className="textarea lg:mx-0 mx-8 px-4 my-4 lg:my-0 textarea-bordered bgColor font-bold border-white   text-lg "
          placeholder="Message"
        ></textarea>
        </div>
        <button
          type="submit"
          value="Send"
          className="bgColor btn btn-outline px-8 text-xl mb-4 rounded-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
