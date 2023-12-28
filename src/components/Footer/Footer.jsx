import "./Footer.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
function Footer() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_imd0v0m",
        "template_2i9htj4",
        form.current,
        "7MnnwsExOvKHfAHojet1G"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="program-header">
        <span className="stroke-text">Give </span>
        <span>Feedback </span>
      </div>
      <div className="form">
        <form className="emailfooter" onSubmit={sendEmail} ref={form}>
          <div className="emailinput">
            <span>Enter Your Name:</span>
            <input type="text" placeholder="Enter your name" name="from_name" />
          </div>
          <div className="emailinput">
            <span>Enter Your Email:</span>
            <input type="text" placeholder="Enter your Email" name="to_name" />
          </div>
          <div className="emailinput">
            <span>Give Feedback:</span>
            <textarea name="" id="" cols="20" rows="2"></textarea>
          </div>
          <div className="emailinput">
            <span>Submit:</span>
            <input type="Submit" placeholder="Submit" className="btn" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Footer;
