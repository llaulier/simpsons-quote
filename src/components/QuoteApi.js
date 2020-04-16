import React from "react";
import axios from "axios";
import "./DisplayQuote.js";
import "./QuoteApi.css";
import DisplayQuote from "./DisplayQuote";

class QuoteApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: null,
    };
    this.getQuotes = this.getQuotes.bind(this);
  }
  componentDidMount() {
    this.getQuotes();
  }

  getQuotes = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes?count=num")
      /*.then((response) => this.setState({ quotes: response.data[0] }));*/
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        this.setState({
          quotes: data[0],
        });
      });
  };

  render() {
    return (
      <div className="Api">
        {this.state.quotes ? (
          <DisplayQuote quotes={this.state.quotes} />
        ) : (
          <p>On loading</p>
        )}

        <button type="button" className="button" onClick={this.getQuotes}>
          Click me!
        </button>
      </div>
    );
  }
}

export default QuoteApi;
