import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const teamCard = [
  {
    id: 1,
    name: "Abhinav Ayan",
    title: "CEO",
    img: "/images/Team/CEO.svg",
  },
  {
    id: 2,
    name: "Anirban Chakravorty",
    title: "COO",
    img: "/images/Team/COO.svg",
  },
  {
    id: 3,
    name: "Anupam Rawat",
    title: "Head of Design",
    img: "/images/Team/Design.svg",
  },
  {
    id: 4,
    name: "Sunanda Rathia",
    title: "Head of Human Resources",
    img: "/images/Team/HR.svg",
  },
  {
    id: 5,
    name: "Kalyani Bapat",
    title: "Head of Marketing",
    img: "/images/Team/Market.svg",
  },
];

const MeetTeam = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1600,
    autoplaySpeed: 1600,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="team-sec">
      <div className="custom-team">
        <h2 className="H2 pb-lg-5 pb-2" style={{fontSize:"32px"}}>Meet the Team</h2>
        <div className="px-2">
          <Slider {...settings}>
            {teamCard.map(({ id, title, name, img }) => (
              <div key={id} className="team-slider text-center img-card">
                <div className="team-icon">
                <img src={img} alt="" className=" img-fluid" />
                </div>
                <div className="pt-5">
                  <h3 className="H3" style={{fontSize:"24px"}}>{name}</h3>
                  <h4 className="H4" style={{fontSize:"18px"}}>{title}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
