import React from "react";
import Increase from "../../../assets/icons/Increase.svg";
import DeliveryTime from "../../../assets/icons/DeliveryTime.svg";
import DevelopmentSkill from "../../../assets/icons/DevelopmentSkill.svg";
import Error from "../../../assets/icons/Error.svg";
import FuelGas from "../../../assets/icons/FuelGas.svg";
import SlipperyFloor from "../../../assets/icons/SlipperyFloor.svg";
import Slider from "react-slick";

const Benefits = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
  };
  const cards = [
    { icon: Increase, title: "Productivity Improvement" },
    { icon: DeliveryTime, title: "Reduced Cycle Time" },
    { icon: FuelGas, title: "Increased Fuel Efficiency" },
    { icon: SlipperyFloor, title: "Reduced Errors and Accidents" },
    { icon: Error, title: "Reduced Errors and Accidents" },
    {
      icon: DevelopmentSkill,
      title: "Reduced Training time and employee turnover rate",
    },
  ];
  const cardItems = cards.map((card, i) => (
    <div className="col-md px-lg-1 icon-box">
      <div className="card-icon">
        <img key={i} src={card.icon} alt="" className="img-fluid " />
      </div>
      <p key={i}>{card.title}</p>
    </div>
  ));
  return (
    <section className="benefits-sec">
      <div className="custom-container">
        <h2 className="H2 pb-lg-4 pb-0" style={{ fontSize: "32px" }}>
          Benefits
        </h2>

        <div className="row">
          <Slider {...settings}>{cardItems}</Slider>
        </div>

        <div className="overflow-style">
          <div className="timeline-box ">
            <ol>
              <li>
                <span style={{ color: "#4E85F0" }}>
                  Productivity Improvement
                </span>
              </li>
              <li>
                <span>Reduced Cycle Time</span>
              </li>
              <li class="">
                <span>Increased Fuel Efficiency</span>
              </li>
              <li>
                <span>Reduced Errors and Accidents</span>
              </li>
              <li>
                <span>Reduced Equipment Downtime</span>
              </li>
              <li>
                <span>Reduced Training Time and Cost</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
