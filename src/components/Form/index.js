import React from "react";
import TextField from "@material-ui/core/TextField";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Send a Message</h2>
        <form
          onSubmit={this.handleSubmit}
          noValidate
          autoComplete="off"
          className="formContainer"
        >
          <div className="formSec">
            <TextField
              required
              id="outlined-basic first"
              label="required"
              helperText="First Name"
              variant="outlined"
              spacing={3}
            >
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </TextField>

            <TextField
              required
              id="outlined-basic last"
              label="required"
              helperText="Last Name"
              variant="outlined"
            >
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </TextField>
            <br></br>
            <TextField
              required
              id="outlined-basic email"
              label="required"
              helperText="Email"
              variant="outlined"
            >
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </TextField>

            <br></br>
            <TextField
              id="outlined-textarea msg"
              label="required"
              placeholder="Placeholder"
              multiline
              helperText="Enter Your Message"
              variant="outlined"
            />
            <input
              type="submit"
              value="Submit"
              id="submitBtn"
              variant="outlined"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
