import "./styles.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact__title">You can use the following form to reach out to us</h1>

      <form className="contact__form" method="post" action="mailto:camilavictoriastefano@gmail.com">
        <div className="contact__form__input">
          <label for="uname">Name:</label>
          <input type="text" id="uname" name="uname" required autofocus />
          <p className="input-error"></p>
        </div>
        <div className="contact__form__input">
          <label for="email">Email:</label>
          <input type="email" id="email" size="30" minlength="3" maxlength="64" required />
          <p className="input-error"></p>
        </div>
        <div className="contact__form__textarea">
          <textarea id="msg" name="message" rows="10" minlength="10" maxlength="1500" required placeholder="Write your message here..."></textarea>
          <p className="input-error"></p>
        </div>
        <button className="preview-btn btn-form">Preview your message</button>
        <input className="btn-form submit" type="submit" value="Submit" />
      </form>
      <section className="preview"></section>
    </section>
  );
};

export default Contact;
