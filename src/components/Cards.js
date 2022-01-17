import React from "react";

export const Cards = ({ title, data, icon }) => {
  console.log(icon);

  return (
    <div className="tracket-container">
      <img
        className="tracket-container__image"
        src={require(`../images/${icon}`).default}
        alt="icon"
      />
      <div className="tracket-info__container">
        <div className="tracket-info">
          <h3 className="tracket-info__title">{title}</h3>
          <h2 className="tracket-info__button">...</h2>
        </div>
        <div className="info">
          <p className="info__current-data">{data.current}</p>
          <p className="info__previous-data">{data.previous}</p>
        </div>
      </div>
    </div>
  );
};
