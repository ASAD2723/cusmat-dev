import React from "react";

const Recruitment = () => {
  return (
    <section className="dark-bg row req-demo-sec mx-0">
      <div className="col-lg-4 col-md-6 my-auto">
        <h2 className="H2 text-white text-center text-md-start">
          Our Recruitment Process
        </h2>
      </div>
      <div className="col-lg-4 col-md-6 text-center">
        <div className="gray-box">
          <h5 className="H5 pb-4">Round 1</h5>
          <h3 className="m-0 H3 text-white">Application Review</h3>
        </div>
        <div className="w-75 mx-auto pink-box">
          <img src="/images/career/pink.svg" alt="" className="img-fluid " />
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
