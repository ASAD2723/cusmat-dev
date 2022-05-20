import React from "react";
import { Link } from "react-router-dom";

const productCards = [
  {
    id: 1,
    title: "AR/VR Developer",
  },
  {
    id: 2,
    title: "UX Designer",
  },
  {
    id: 3,
    title: "Hardware Engineer",
  },
  {
    id: 4,
    title: "Data Analyst",
  },
  {
    id: 5,
    title: "Quality Analyst",
  },
  {
    id: 6,
    title: "Graphic Designer",
  },
];

const Departments = () => {
  return (
    <section className="req-demo-sec custom-container">
    <br />
      <h2 className="H2 pb-4"> Departments</h2>
    <br />
    <br />

      <div className="department-sec">
    <br />
    <br />

        <h3 className="H3 pb-3 fw-bold">Product Deployment</h3>
    <br />

        <div className="dept-grid">
          {productCards.map(({ id, title }) => (
            <div className="dept-cards" key={id}>
              <h4 className="H4 " style={{fontSize:"20px"}}>{title}</h4>
            </div>
          ))}
        </div>
      </div>
    <br />
    <br />


      <div className="department-sec">
    <br />
    <br />

        <h3 className="H3 pb-3 fw-bold">Sales and Marketing</h3>
    <br />

        <div className="dept-grid">
          <div className="dept-cards">
            <h4 className="H4 ">Sales Engineer</h4>
          </div>
          <div className="dept-cards">
            <h4 className="H4 ">Pre-Sales/Inside Sales</h4>
          </div>
          <div className="dept-cards">
            <h4 className="H4 ">Marketing Executive</h4>
          </div>
          <div className="dept-cards">
            <h4 className="H4 ">Business Analyst</h4>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="department-sec">
    <br />
    <br />

        <h3 className="H3 pb-3 fw-bold">Administration</h3>
    <br />

        <div className="dept-grid">
          <div className="dept-cards">
            <h4 className="H4 ">Human Resource</h4>
          </div>
        </div>
      </div>
    <br />
    <br />


      <div className="department-sec">
    <br />

        <h3 className="H2 pb-3 fw-bold" style={{fontSize:"32px"}}>Explore Careers at CUSMAT</h3>
    <br />
        
        <Link to="">
          <button className="custom-btn H6">View Vacancies ⟶</button>
        </Link>
      </div>
    </section>
  );
};

export default Departments;
