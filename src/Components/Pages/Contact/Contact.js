import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast  from "react-hot-toast";
const Contact = () => {
  const form = useRef();
  console.log(form);

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
          console.log(result.text);
          console.log(result);
          toast.success("Successfully Message Sent", {
            position: "top-center",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
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
        className="flex flex-col justify-center items-center mx-auto py-3 gap-5 border  lg:w-1/2"
      >
        <input
          name="user_email"
          type="email"
          placeholder="your Email"
          required
          className="input input-bordered w-full max-w-xs text-black"
        />
        <input
          name="user_name"
          type="text"
          placeholder=" your Name"
          required
          className="input input-bordered w-full max-w-xs text-black"
        />
        <textarea
          name="message"
          required
          className="textarea textarea-bordered w-80 text-black"
          placeholder="Message"
        ></textarea>
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
