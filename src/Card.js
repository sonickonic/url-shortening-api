import React, { useState } from "react";

function Card({ card }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(`https://rel.ink/${card.hashId}`);
  };

  return (
    <div className="form__card">
      <p className="form__card-link">{card.url}</p>
      <div className="form__card-line"></div>
      <p className="form__card-url">{`https://rel.ink/${card.hashId}`}</p>
      <button
        onClick={handleCopy}
        className={`btn btn--rectangle btn--copy ${copied && "btn--clicked"}`}
        type="submit"
      >
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}

export default Card;