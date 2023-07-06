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
        uppercase text-[#818AA9] font-bold text-center my-14 "
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
          placeholder="your Email"
          required
          className="input input-bordered w-full my-4  text-black"
        />
         <input
          name="user_name"
          type="text"
          placeholder=" your Name"
          required
          className="input input-bordered w-full text-black"
        />
        </div>
        <textarea
          name="message"
          required
          className="textarea px-4 my-4 lg:my-0 textarea-bordered w-full text-black text-lg "
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
