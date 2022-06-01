import React from "react";
import graph from "../../../assets/graphs.png";
import Efficiency from "../../../assets/Efficiency.svg";
import Error from "../../../assets/Error.svg";
import Productivity from "../../../assets/Productivity.svg";

function AnalyticsDashboard() {
  const items = [
    { url: Productivity, name: "Improve", btn1: "Productivity" },
    { url: Efficiency, name: "Improve", btn1: " Efficiency" },
    {
      url: Error,
      name: "Reduce",
      btn: "Error Rates",
      and: "and",
      btn2: "Accidents",
    },
  ];
  const itemsData = items.map((item, i) => (
    <div key={i} className="cards">
      <div className="icon">
        <img src={item.url} alt="icons" />
      </div>
      <div className="content">
        <h4>
          {item.name} <span>{item.btn}</span>
          <br /> <span>{item.btn1}</span> {item.and} <span>{item.btn2}</span>
        </h4>
      </div>
    </div>
  ));
  return (
    <div className="Analytics-Dashboard">
      <div className="analytic-wrapper">
        <div className="analytic-content">
          <div className="headdings">
            <h4>Analytics Dashboard</h4>
          </div>
          <div className="para">
            <p>
              Our most advanced Analytics System is able to detect errors in a
              personalised way. The system also guides all individual users by
              providing suggested improvement areas according to their learning
              paths.
            </p>
          </div>
          <div className="icon-cards">{itemsData}</div>
        </div>
        <div className="analytic-picture">
          <img src={graph} alt="graph pictures" />
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDashboard;
