import React from "react";

const Benefits = () => {
  return (
    <section className="benefits-sec">
      <div className="custom-container">
        <h2 className="H2 pb-lg-4 pb-0" style={{fontSize:"32px"}}>Benefits</h2>

        <div className="row mx-0 g-4 text-center pt-5">
          <div className="col-md-3 px-lg-1">
            <img
              src="/images/useCases/card.svg"
              alt=""
              className="img-fluid "
            />
          </div>
          <div className="col-md-3 px-lg-1">
            <img
              src="/images/useCases/card2.svg"
              alt=""
              className="img-fluid "
            />
          </div>
          <div className="col-md-3 pt-5  my-auto">
            <img
              src="/images/useCases/card3.svg"
              alt=""
              className="img-fluid "
            />
          </div>
          <div className="col-md-3 pt-4 my-auto">
            <img
              src="/images/useCases/card4.svg"
              alt=""
              className="img-fluid "
            />
          </div>
        </div>

        <div className="overflow-style">
          <div className="timeline-box ">
            <ol>
              <li>
                <span style={{color:'#4E85F0'}}>Productivity Improvement</span>
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
