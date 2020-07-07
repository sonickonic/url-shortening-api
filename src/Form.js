import React from "react";

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

export default Form;