import React, { useState } from "react";
import avatar from "../images/image-jeremy.png";
import { Cards } from "./Cards";
// Style Imports
import "./css/style.css";

export const TimeTracket = ({ data }) => {
  const [view, setView] = useState("daily");

  return (
    <>
      <div className="container">
        <div className="cards">
          <div className="cards-user">
            <img src={avatar} alt="avatar" className="cards-user__info-img" />
            <div className="cards-user__report-container">
              <p className="cards-user__report">Report for</p>
              <h2 className="cards-user__name">Jeremy</h2>
              <h2 className="cards-user__last-name">Robson</h2>
            </div>
          </div>
          <div className="buttoms">
            <p className="buttoms__weekly" onClick={() => setView("weekly")}>Weekly</p>
            <p className="buttoms__daily" onClick={() => setView("daily")}>Daily</p>
            <p className="buttoms__monthly" onClick={() => setView("monthly")}>Monthly</p>
          </div>
        </div>

        {data.map((el) => (
          <Cards
            key={el.id}
            title={el.title}
            data={el.timeframes[view]}
            icon={el.icon}
          />
        ))}
      </div>
    </>
  );
};
