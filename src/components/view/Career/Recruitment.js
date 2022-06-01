import React from "react";
import Slider from "react-slick";

const Recruitment = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    vertical: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  const items = [
    {
      title: "Round 1",
      content: "Application Review",
      url: "/images/career/pink.svg",
    },
    {
      title: "Round 2",
      content: "Application Review",
      url: "/images/career/pink.svg",
    },
    {
      title: "Round 3",
      content: "Application Review",
      url: "/images/career/pink.svg",
    },
    {
      title: "Round 4",
      content: "Application Review",
      url: "/images/career/pink.svg",
    },
  ];
  const itemsData = items.map((item, i) => (
    <div className="Slider">
      <div className="gray-box">
        <h5 className="H5 pb-4">{item.title}</h5>
        <h3 className="m-0 H3 text-white">{item.content}</h3>
      </div>
      <div className="w-75 mx-auto pink-box">
        <img src={item.url} alt="" className="img-fluid " />
      </div>
    </div>
  ));
  return (
    <section className="dark-bg row req-demo-sec mx-0">
      <div className="col-lg-4 col-md-6 my-auto">
        <h2 className="H2 text-white text-center text-md-start">
          Our Recruitment Process
        </h2>
      </div>
      <div className="col-lg-4 col-md-6 text-center">
        <Slider {...settings}>{itemsData}</Slider>
      </div>
    </section>
  );
};

export default Recruitment;
