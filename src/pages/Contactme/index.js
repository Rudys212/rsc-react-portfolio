import React from "react";
import "./style.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";
import Form from "../../components/Form/index";

export default function Contactme() {
  return (
    <section id="contact-me">
      <br></br>
      <h2 id="contact-me-title">Contact Me</h2>
      <div className="mylinks">
        <ul>
          <li className="linkTxt">
            <a href="https://github.com/Rudys212">
              {" "}
              Github <GitHubIcon />
            </a>
          </li>
          <li className="linkTxt">
            <a href="https://www.linkedin.com/in/rudy-sanchez-cisneros-a4955211b/">
              Linkedin <LinkedInIcon />
            </a>
          </li>
          <li className="linkTxt">
            <a href="tel:360-880-3231">
              Telephone <PhoneIphoneIcon />
            </a>
          </li>
          <li className="linkTxt">
            <a href="mailto:Rudys212@gmail.com">
              Email <EmailIcon />
            </a>
          </li>
        </ul>
      </div>
      <br></br>
      <div>
        <Form />
      </div>
    </section>
  );
}
