import React from "react";
import "./QuoteApi.js";

function DisplayQuote({ quotes }) {
  return (
    <figure className="QuoteApi">
      <img src={quotes.image} alt={quotes.character} />
      <figcaption>
        <blockquote>{quotes.quote}</blockquote>
        <p>
          <cite>{quotes.character}</cite>
        </p>
      </figcaption>
    </figure>
  );
}

export default DisplayQuote;
