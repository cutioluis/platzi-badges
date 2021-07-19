import React from "react";
import "../styles/BadgeNew.css";

const BadgeNew = () => {

 const handleChange = e => {
    console.log({
      name: e.target.namee,
      value: e.target.value});
  }
  
  const handleClick = () => {
    console.log('Button was Clicked');
  }


  return (
    <section className="platzi-form">
      <h2 className="form__title">New Attendant</h2>
      <form action="">
        <label htmlFor="">
          <span className="form__span">First Name</span>
          <br />
          <input onChange={handleChange} className="form__input" type="text" placeholder="Your Name Her" />
        </label>
        <br />
        <button type="button" onClick={handleClick} className="form__input-btn">Save</button>
      </form>
    </section>
  );
};

export default BadgeNew;
