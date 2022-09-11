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
    console.log({ uname });
    console.log({ email });
    console.log({ message });
    setName(uname);
  };

  const handleClose = () => {
    setName("");
    reset();
  };

  return (
    <section className="contact">
      {name && <Popup title={`Thank you ${name} for you message!`} body="We will contact you as soon as possible." onClose={handleClose} />}
      <h1 className="contact__title">You can use the following form to reach out to us</h1>

      <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact__form__input">
          <label htmlFor="uname">Name:</label>
          <input type="text" id="uname" name="uname" autoFocus {...register("uname", { required: true, maxLength: 20 })} />

          {errors.uname && <p className="error">This field is required</p>}
        </div>

        <div className="contact__form__input">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            size="30"
            {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
          />

          {errors.email?.type === "required" && <p className="error">This field is required</p>}
          {errors.email?.type === "pattern" && <p className="error">Email address invalid</p>}
        </div>
        <div className="contact__form__textarea">
          <textarea
            id="msg"
            name="message"
            rows="10"
            placeholder="Write your message here..."
            {...register("message", { required: true, minLength: 20 })}
          />

          {errors.message?.type === "required" && <p className="error">This field is required</p>}
          {errors.message?.type === "minLength" && <p className="error">Minimum 20 characters required</p>}
        </div>
        <button className="preview-btn btn-form">Submit</button>
      </form>
      <section className="preview"></section>
    </section>
  );
};

export default Contact;
