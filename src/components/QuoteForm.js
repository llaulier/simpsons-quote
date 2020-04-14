import React, { Component } from "react";
import "./QuoteForm.css";

class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ character: event.target.value });
  }

  render() {
    return (
      <form className="QuoteForm" onSubmit={this.handleSubmit}>
        <label htmlFor="character">Character:</label>
        <input
          id="name"
          name="character"
          type="text"
          value={this.state.character}
          onChange={this.handleChange}
        />
        <p>
          You typed: <strong>{this.state.character}</strong>
        </p>
      </form>
    );
  }
}

export default QuoteForm;
