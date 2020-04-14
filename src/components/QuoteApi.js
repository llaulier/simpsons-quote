import React from "react";
import axios from "axios";
import "./DisplayQuote.js";
import "./QuoteApi.css";
import DisplayQuote from "./DisplayQuote";

const sampleQuotes = {
  quote: "Ha ha!",
  character: "Nelson Muntz",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection: "Left",
};
class QuoteApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: sampleQuotes,
    };
    this.getQuotes = this.getQuotes.bind(this);
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
        <DisplayQuote quotes={this.state.quotes} />
        <button type="button" className="button" onClick={this.getQuotes}>
          Random!
        </button>
      </div>
    );
  }
}

export default QuoteApi;
