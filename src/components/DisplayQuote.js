import React from "react";
import "./QuoteApi.js";

function DisplayQuote({ quotes }) {
  return (
    <div>
      <img src={quotes.image} alt={quotes.character} />
      <figcaption>
        <blockquote>{quotes.quote}</blockquote>
        <p>
          <cite>{quotes.character}</cite>
        </p>
      </figcaption>
    </div>
  );
}

export default DisplayQuote;
