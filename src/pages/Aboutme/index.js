import React from "react";
import "./style.css";
import ProfilePic from "../../assets/images/Profile pic.jpg";

export default function Aboutme() {
  return (
    <div>
      <div text fluid className="aboutmesection">
        <h1 id="aboutmetitle">Hi there, my name is Rudy Sanchez Cisneros!</h1>
        <img
          className="headshot"
          src={ProfilePic}
          alt="my very professional headshot"
        />
        <h2 id="aboutMeHeader"> About Me:</h2>
        <div id="aboutme">
          <p id="paraTxtOne">
            I am a Front-End web developer with a background in Food and
            Nutrition science. Currently, completing a full stack web
            development program at the University of Washington. Experience
            working in teams or individually to meet goals. Have worked with
            HTML, CSS and JavaScript to build full-stack applications that are
            efficient and interactive.
          </p>
          <br />
          <p id="paraTxtTwo">
            I create and develop web applications with the user in mind. I like
            my designs to be easy to use and navigate as well as having a clean
            UI. I believe in creating projects that will meet both, my clients'
            needs and those of their users.
          </p>
        </div>
        <br />
      </div>
    </div>
  );
}
