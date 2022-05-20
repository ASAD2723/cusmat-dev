import React from "react";

const gridCard = [
  {
    id: 1,
    img: "/images/home/Group 96.svg",
    percentage: "20",
    title: "Increase in Productivity",
  },
  {
    id: 2,
    img: "/images/home/Group 97.svg",
    percentage: "15",
    title: "Reduction in Operational Cost",
  },
  {
    id: 3,
    img: "/images/home/Group 98.svg",
    percentage: "70",
    title: "Reduction in Mean Time to Repair",
  },
  {
    id: 4,
    img: "/images/home/Group 99.svg",
    percentage: "80",
    title: "Reduction in Time to Maximum Efficiency",
  },
];

const WorkForcePerformance = () => {
  return (
    <section className="custom-container">
      <hr />
      <div className="py-1">
        <h2 className="H2" style={{fontSize:"32px"}}>Improving Workforce Performance</h2>
        <img
          src="/images/home/newnews.jpg"
          alt=""
          className="img-fluid pt-3 w-100 vh-100"
        />
      </div>
      <div className="performance-sec">
        <h2 className="H2" style={{fontSize:"32px"}}>Impacting Metrics that Matter</h2>

        <div className="performance-grid">
          {gridCard.map(({ id, img, percentage, title }) => (
            <div key={id} className="performance-card text-center">
              <div>
                <img src={img} alt="" />
                <h4>{percentage}%</h4>
                <h5 className="H5">{title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkForcePerformance;
