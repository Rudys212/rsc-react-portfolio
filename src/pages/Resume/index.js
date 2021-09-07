import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import Pdf from "../../assets/pdfs/resume.pdf";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className="resumeContainer">
      <h2>Resume</h2>
      <h3>Skills</h3>
      <List>
        <ListItem alignItems="center">HTML</ListItem>
        <ListItem alignItems="center">CSS</ListItem>
        <ListItem alignItems="center">Javascript</ListItem>
        <ListItem alignItems="center">React</ListItem>
        <ListItem alignItems="center">Bootstrap</ListItem>
        <ListItem alignItems="center">Handlebars</ListItem>
        <ListItem alignItems="center">MySQL</ListItem>
        <ListItem alignItems="center">MongoDB</ListItem>
        <ListItem alignItems="center">Heroku</ListItem>
        <ListItem alignItems="center">GraphQL</ListItem>
        <ListItem alignItems="center">Express</ListItem>
      </List>
      <br></br>
      <div>
        <h2>View Resume</h2>
        <Link className="resumePdf">
          <a className="resumeBtn" target="_blank" href={Pdf} rel="noreferrer">
            Resume
          </a>
        </Link>
      </div>
    </div>
  );
}
