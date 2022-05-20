import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const brandCard = [
  {
    id: 1,
    img: "/images/home/brand.svg",
  },
  {
    id: 2,
    img: "/images/home/brand2.svg",
  },
  {
    id: 3,
    img: "/images/home/brand3.svg",
  },
  {
    id: 4,
    img: "/images/home/brand4.svg",
  },
  {
    id: 5,
    img: "/images/home/brand5.svg",
  },
  {
    id: 6,
    img: "/images/home/brand6.svg",
  },
  {
    id: 7,
    img: "/images/home/brand7.svg",
  },
  {
    id: 8,
    img: "/images/home/brand8.svg",
  },
  {
    id: 9,
    img: "/images/home/brand9.svg",
  },
  {
    id: 10,
    img: "/images/home/brand10.svg",
  },
  {
    id: 11,
    img: "/images/home/brand11.svg",
  },
  {
    id: 12,
    img: "/images/home/brand12.svg",
  },
  {
    id: 13,
    img: "/images/home/brand13.svg",
  },
  {
    id: 14,
    img: "/images/home/brand14.svg",
  },
  {
    id: 15,
    img: "/images/home/brand15.svg",
  },
  {
    id: 16,
    img: "/images/home/brand16.svg",
  },
  {
    id: 17,
    img: "/images/home/brand17.svg",
  },
  {
    id: 18,
    img: "/images/home/brand18.svg",
  },
  {
    id: 19,
    img: "/images/home/brand19.svg",
  },
  {
    id: 20,
    img: "/images/home/brand20.svg",
  },
  {
    id: 21,
    img: "/images/home/brand21.svg",
  },
  {
    id: 22,
    img: "/images/home/brand22.svg",
  },
  {
    id: 23,
    img: "/images/home/brand23.svg",
  },
  {
    id: 24,
    img: "/images/home/brand24.svg",
  },
];

const OurCustomers = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 1200,
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
    <section className="customer-sec">
      <div className="custom-container">
        <h2 className="H2 cust" style={{marginBottom:"50px", fontSize:"32px"}}>Our Customers</h2>
      </div>
      <div className="px-2">
        <Slider {...settings}>
          {brandCard.map(({ id, img }) => (
            <div key={id} className="customer-slider text-center">
              <img src={img} alt="" className=" img-fluid" />
            </div>
          ))}
        </Slider>
      </div>
      <br />
    </section>
  );
};

export default OurCustomers;
