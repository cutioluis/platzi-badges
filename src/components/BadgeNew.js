import React, { useState } from "react";
import "../styles/BadgeNew.css";

const BadgeNew = () => {
  const [form, setValues] = useState({
    name: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className="platzi-form">
      <h2 className="form__title">New Attendant</h2>
      <form action="">
        <label action="" onSubmit={handleSubmit}>
          <span className="form__span">First Name</span>
          <br />
          <input
            className="form__input"
            type="text"
            id="name"
            name="name"
            onChange={handleInput}
            placeholder="Name"
          />
        </label>
        <label action="" onSubmit={handleSubmit}>
          <br />
          <span className="form__span">Last Name</span>
          <br />
          <input
            className="form__input"
            type="text"
            id="name2"
            name="name2"
            onChange={handleInput}
            placeholder="Last Name"
          />
        </label>
        <label action="" onSubmit={handleSubmit}>
          <br />
          <span className="form__span">Twitter</span>
          <br />
          <input className="form__input tw1" type="text" value="@" />
          <input
            className="form__input tw2"
            type="text"
            id="name2"
            name="name2"
            onChange={handleInput}
            placeholder="@sparragus"
          />
        </label>
        <br />
        <button
          type="button"
          onClick={handleSubmit}
          className="form__input-btn"
        >
          Save
        </button>
      </form>
    </section>
  );
};

export default BadgeNew;
