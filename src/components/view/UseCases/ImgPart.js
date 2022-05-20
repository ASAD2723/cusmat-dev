import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const imgCard = [
  {
    id: 1,
    img: "/images/useCases/case.svg",
  },
  {
    id: 2,
    img: "/images/useCases/case2.svg",
  },
  {
    id: 3,
    img: "/images/useCases/case3.svg",
  },
  {
    id: 4,
    img: "/images/useCases/case2.svg",
  },
  {
    id: 5,
    img: "/images/useCases/case.svg",
  },
  {
    id: 6,
    img: "/images/useCases/case2.svg",
  },
];

const ImgPart = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section>
      <div className="">
        <Slider {...settings}>
          {imgCard.map(({ id, img }) => (
            <div key={id} className="img-card ">
              <img src={img} alt="" className=" img-fluid" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="custom-container py-5 color-2">
        <h4 className="H4" style={{fontSize: "20px"}}>
          {" "}
          The operators get prepared to operate in various conditions like
          foggy/ rainy weather & night driving. The simulator is ideal for new
          as well as experienced operators. New operators can get familiarized
          with the truck controls and learn the basic driving techniques.
          Advanced operators can improve their skills as the simulator is
          designed in such a way to increase productivity, fuel efficiency and
          overall safety levels.
        </h4>
      </div>
    </section>
  );
};

export default ImgPart;
