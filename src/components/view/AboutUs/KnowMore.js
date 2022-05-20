import React from "react";
import Footer from "../../layout/Footer";
import { Link } from "react-router-dom";

const KnowMore = () => {
  return (
    <>
    <section className="custom-container know-more-sec">
      <div className="row mx-0">
        <div className="col-md-6 my-auto px-0 pb-md-0 pb-2">
          <h2 className="H2" style={{fontSize:"32px"}}>Want to Know More?</h2>
          <Link to="">
            <h3 className="H3 color-4 pt-2" style={{fontSize:"20px"}}> View Use Cases⟶</h3>
          </Link>
        </div>
        <div className="col-md-6 p-0 position-relative">
          <img src="/images/about/VRMan.svg" alt="" className="img-fluid" style={{width:"100%"}} />
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default KnowMore;
