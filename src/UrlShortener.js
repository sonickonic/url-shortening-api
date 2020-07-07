import React, { useState, useEffect } from "react";

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

const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const [cards, setCards] = useState(() => {
    const localData = localStorage.getItem("cards");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  function isValid(url) {
    const regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    const result = url.match(regex);
    if (result) {
      return true;
    }
    return false;
  }

  const shorten = () => {
    if (!isValid(url)) {
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
export default UrlShortener;
