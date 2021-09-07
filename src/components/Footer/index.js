import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";
import "./style.css";

export default function Footer() {
  return (
    <footer id="footerContainer">
      <p>Made by Rudy Sanchez Cisneros</p>
      <ul>
        <li className="footerIcons">
          <a href="https://github.com/Rudys212">
            {" "}
            Github <GitHubIcon />
          </a>
        </li>
        <li className="footerIcons">
          <a href="https://www.linkedin.com/in/rudy-sanchez-cisneros-a4955211b/">
            Linkedin <LinkedInIcon />
          </a>
        </li>
        <li className="footerIcons">
          <a href="tel:360-880-3231">
            Telephone <PhoneIphoneIcon />
          </a>
        </li>
        <li className="footerIcons">
          <a href="mailto:Rudys212@gmail.com">
            Email <EmailIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}
