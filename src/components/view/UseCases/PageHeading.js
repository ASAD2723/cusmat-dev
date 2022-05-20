import React from "react";
import { Link } from "react-router-dom";

const PageHeading = () => {
  return (
    <section className="custom-container page-heading-sec">
      <div className="row mx-0">
        <div className="col-lg-6 px-0">
          <h1 className="H1" style={{fontSize:"50px"}}>Dumper Simulator</h1>
          <h4 className="H4 color-2 py-2" style={{fontSize: "20px"}}>
            {" "}
            An advanced simulator to Train and Assess Dump Truck Drivers in a
            mining environment.
          </h4>
          <br />
          <br />
          <Link to="/request-demo">
            <button className="custom-btn H6">Get In Touch ⟶</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageHeading;
