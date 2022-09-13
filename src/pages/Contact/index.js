import "./styles.css";
import { useForm } from "react-hook-form";
import Popup from "../../components/Popup";
import { useState } from "react";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [name, setName] = useState("");

  const onSubmit = (data) => {
    const { uname, email, message } = data;
    console.log("Name:", uname);
    console.log("Email:", email);
    console.log("Message:", message);
    setName(uname);
  };

  const handleClose = () => {
    setName("");
    reset();
  };

  const formatName = (name) => {
    return name
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase().concat(word.substring(1));
      })
      .join(" ");
  };

  return (
    <section className="contact">
      {name && (
        <Popup
          title={`Thank you for your message, ${formatName(name)}!`}
          body="We will contact you as soon as possible."
          onClose={handleClose}
        />
      )}
      <h1 className="contact__title">
        You can use the following form to reach out to us
      </h1>

      <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact__form__input">
          <label htmlFor="uname">Name:</label>
          <input
            type="text"
            id="uname"
            name="uname"
            autoComplete="off"
            autoFocus
            {...register("uname", {
              required: true,
              maxLength: 40,
              pattern: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
            })}
          />

          {errors.uname?.type === "required" && (
            <p className="error">This field is required</p>
          )}
          {errors.uname?.type === "pattern" && (
            <p className="error">Hmm… that name doesn't look valid</p>
          )}
          {errors.uname?.type === "maxLength" && (
            <p className="error">
              Hmm… that name has a lot characters. Try less
            </p>
          )}
        </div>

        <div className="contact__form__input">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            autoComplete="off"
            size="30"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />

          {errors.email?.type === "required" && (
            <p className="error">This field is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="error">Hmm… that email doesn't look valid</p>
          )}
        </div>
        <div className="contact__form__textarea">
          <textarea
            id="msg"
            name="message"
            rows="10"
            placeholder="Write your message here..."
            {...register("message", { required: true, minLength: 20 })}
          />

          {errors.message?.type === "required" && (
            <p className="error">This field is required</p>
          )}
          {errors.message?.type === "minLength" && (
            <p className="error">Minimum 20 characters required</p>
          )}
        </div>
        <button className="preview-btn btn-form">Submit</button>
      </form>
      <section className="preview"></section>
    </section>
  );
};

export default Contact;
