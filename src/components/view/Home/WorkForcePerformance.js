import React from "react";

const gridCard = [
  {
    id: 1,
    percentage: "20",
    title: "Increase in",
    link: "Productivity",
  },
  {
    id: 2,
    percentage: "15",
    title: "Reduction in",
    link: "Operational Cost",
  },
  {
    id: 3,
    percentage: "70",
    title: "Reduction in",
    link: "Mean Time to Repair",
  },
  {
    id: 4,
    percentage: "80",
    title: "Reduction in",
    link: "Time to Maximum Efficiency",
  },
];

const WorkForcePerformance = () => {
  return (
    <section className="custom-container">
      <hr />
      <div className="py-1">
        <h2 className="H2" style={{ fontSize: "32px" }}>
          Improving Workforce Performance
        </h2>
        <img
          src="/images/home/newnews.jpg"
          alt=""
          className="img-fluid pt-3 w-100 vh-100"
        />
      </div>
      <div className="performance-sec">
        <div className="performance-grid">
          <div className="performance-circle">
            {gridCard.map(({ id, percentage, title, link }) => (
              <div key={id} className="performance-box" >
                <div className="percentage">
                  <h4>{percentage}%</h4>
                </div>
                <div className="title">
                  <h5 className="H5">
                    {title} <a href="#">{link}</a>
                  </h5>
                </div>
              </div>
            ))}
          </div>
          <h2 className="H2" style={{textAlign:"center", fontSize: "32px" }}>
            Impacting Metrics that Matter
          </h2>
        </div>
      </div>
    </section>
  );
};

export default WorkForcePerformance;
