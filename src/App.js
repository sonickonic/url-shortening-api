import React, { useState } from "react";

function Form({ url, handleChange, handleClick, error }) {
  return (
    <div className={error ? "form form--error" : "form"}>
      <input
        className={error ? "form__input form__input--error" : "form__input"}
        type="text"
        aria-label="URL"
        placeholder="Sharten a link here..."
        value={url}
        onChange={handleChange}
      />
      {error && <p className="form--error-message">{error}</p>}   
      <button onClick={handleClick} className="btn btn--rectangle">
        Shorten It!
      </button>   
    </div>
  );
}

function Card({ card, handleClick}) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="form__card">
      <p className="form__card-link">{card.url}</p>
      <div className="form__card-line"></div>
      <p className="form__card-url">{`https://rel.ink/${card.hashId}`}</p>
      <button
        onClick={() => setCopied(true)}
        className={`btn btn--rectangle btn--copy ${copied && "btn--clicked"}`}
        type="submit"
      >
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}

const App = () => {
  const [url, setUrl] = useState("");
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");

  const shorten = () => {
    if (!url) {
      return setError("Please add a link");
    }

    fetch("https://rel.ink/api/links/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    })
      .then((response) => response.json())
      .then((json) => setCards([...cards, { url, hashId: json.hashid }]));

    return setUrl("");
  };

  const inputValue = (e) => {
    setUrl(e.target.value);
    if (e.target.value) {
      setError("");
    }
  };

  return (
    <div>
      <Form
        url={url}
        handleChange={inputValue}
        handleClick={shorten}
        error={error}
      />
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};
export default App;

// POST https://rel.ink/api/links/
// GET https://rel.ink/api/links/Nn8y9p/
