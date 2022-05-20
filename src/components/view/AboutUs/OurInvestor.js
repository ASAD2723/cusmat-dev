import React from "react";

const brandCard2 = [
  {
    id: 1,
    img: "/images/about/investor.svg",
  },
  {
    id: 2,
    img: "/images/about/investor2.svg",
  },
  {
    id: 3,
    img: "/images/about/investor3.svg",
  },
  {
    id: 4,
    img: "/images/about/investor4.svg",
  },
];

const OurInvestor = () => {
  return (
    <section className="custom-container investor-sec ">
      <h2 className="H2 pb-5" style={{fontSize:"32px"}}>Our Investors</h2>
      <div className="row mx-0  g-5">
        {brandCard2.map(({ id, img }) => (
          <div className="col-lg-3 col-md-6 investor-card" key={id}>
            <img src={img} alt="" className="img-fluid " />
          </div>
        ))}
      </div>
      <br />
      <br />
    </section>
  );
};

export default OurInvestor;
