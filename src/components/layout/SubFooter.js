import React from "react";
import { Link } from "react-router-dom";

const SubFooter = () => {
  return (
    <section className="sub-footer-sec">
      <div className="custom-container d-md-flex  my-auto  justify-content-between">
        <div className="text-md-start text-center">
          <small className="my-auto H6">
            ©CUSMAT Technologies | All rights reserved.
          </small>
        </div>

        <div className="text-md-end text-center">
          <small className="H6 ">
            <Link to="">Privacy Policy</Link>
          </small>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
