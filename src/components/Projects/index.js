import "./style.css";
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import Vics from "../../assets/images/vics.png";
import Aata from "../../assets/images/aata.png";
import Team from "../../assets/images/cards.png";
import CooknBrew from "../../assets/images/cookNbrew.png";
import Blog from "../../assets/images/techBlog.png";
import ReadmeGen from "../../assets/images/terminalPrompts.png";
import Grid from "@material-ui/core/Grid";

function Projects() {
  return (
    <div id="myworksection">
      <h2 id="myworktitle">My Work</h2>
      <Grid
        container
        spacing={2}
        className="workCardSec"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className="cardOne cards" spacing={3}>
          <img
            src={Vics}
            alt="Cook-N-Brew screenshot of app"
            className="cardImages"
          ></img>
          <div className="cardBody">
            <h3 className="card-title cardTitles">Vinette's Ice Cream Shop</h3>
            <p className="card-text">
              Front end developer on this MERN full stack application
            </p>
            <a
              href="https://github.com/vinetteg/vinettesicecreamshop"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
            <br></br>
            <a
              href="https://cryptic-castle-30551.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Link
            </a>
          </div>
        </Grid>

        <Grid className="cardTwo cards" spacing={3} item>
          <img
            src={CooknBrew}
            alt="Cook-N-Brew screenshot of app"
            className="cardImages"
          ></img>
          <div className="cardBody">
            <h3 className="card-title cardTitles"></h3>
            <p className="card-text">
              Front end developer on this team-built full-stack application
            </p>
            <a
              href="https://github.com/CMartin1336/Cook-N-Brew"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
            <br></br>
            <a
              href="https://cmartin1336.github.io/Cook-N-Brew/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Deployed Link{" "}
            </a>
          </div>
        </Grid>

        <Grid className="cardThree cards" spacing={3} item xs={3}>
          <img
            src={Aata}
            alt="Cook-N-Brew screenshot of app"
            className="cardImages"
          ></img>
          <div className="cardBody">
            <h3 className="card-title cardTitles">All About That Art</h3>
            <p className="card-text">A team-built full-stack application</p>
            <a
              href="https://github.com/CMartin1336/Cook-N-Brew"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
            <br></br>
            <a
              href="https://cmartin1336.github.io/Cook-N-Brew/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Deployed Link{" "}
            </a>
          </div>
        </Grid>

        <Grid className="cardFour cards" spacing={3} item xs={3}>
          <img
            src={Team}
            alt="Cook-N-Brew screenshot of app"
            className="cardImages"
          ></img>
          <div className="cardBody">
            <h3 className="card-title cardTitles">Team Profile Generator</h3>
            <p className="card-text">A node application</p>
            <a
              href="https://github.com/Rudys212/team-profile-generator"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
            <br></br>
          </div>
        </Grid>

        <Grid spacing={3} className="cardFive cards" item>
          <img
            src={ReadmeGen}
            alt="Cook-N-Brew screenshot of app"
            className="cardImages"
          ></img>
          <div className="cardBody">
            <h3 className="card-title cardTitles">README.md Generator</h3>
            <p className="card-text">A node application</p>
            <a
              href="https://github.com/Rudys212/readme-generator"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
            <br></br>
          </div>
        </Grid>

        <Grid spacing={3} className="cardSix cards" item>
          <img
            src={Blog}
            alt="Cook-N-Brew screenshot of app"
            className="cardImages"
          ></img>
          <div className="cardBody">
            <h3 className="card-title cardTitles">The Tech Blog</h3>
            <p className="card-text">
              A full-stack application made with MySQL, Express and Handlebars
            </p>
            <a
              href="https://github.com/Rudys212/the-tech-blog"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
            <br></br>
            <a
              href="https://blooming-beach-93674.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Deployed Link{" "}
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
