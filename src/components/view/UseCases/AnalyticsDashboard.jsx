import React from "react";

function AnalyticsDashboard() {
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
          <div className="icon-cards">
              <div className="icon">
                  <img src="#" alt="icons" />
              </div>
              <div className="content">
                  <h4>Improve Productivity</h4>
              </div>
          </div>
        </div>
        <div className="analytic-picture">
            <img src="#" alt="graph pictures" />
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDashboard;
