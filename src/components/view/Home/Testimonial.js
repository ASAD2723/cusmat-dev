import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "../../layout/Footer";

const testimonialCards = [
  {
    id: 1,
    img: "/images/home/icons.svg",
    name: "MOIL Limited",
    review:
      "We never thought we could have a simulator for winding engine operator training. Young engineers from Cusmat really understood the machine and problem well.",
  },
  {
    id: 2,
    img: "/images/home/Frame.svg",
    name: "Ausra Healthcare",
    review:
      "Ausra Health has been working with cusmat for creation of a mobile app. The app helps the healthcare workers to understand various parts of equipment, equipment assembly and onboarding of patients.",
  },
  {
    id: 3,
    img: "/images/home/Frame (1).svg",
    name: "DTDC",
    review:
      "This DTDC app is relly good. With this app, a new biker can learn the whole process of delivery by his/her own without any help.",
  }
];

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
    <>
      
      <section className="custom-container testimonial-sec">
      <br />
      <h2 className="H2" style={{fontSize:"32px"}}>Testimonials</h2>

      <div className="px-2" style={{height:"auto"}}>
        <Slider {...settings}>
          
            <div className="testimonial-slider1 text-center pt-2">
              
              <div className="py-xl-5 py-4 mb-8">
                <h4 className="H4" style={{fontSize:"18px"}}>We never thought we could have a simulator for winding engine operator training. Young engineers from Cusmat really understood the machine and problem well.</h4>
              </div>
              <br />
              <br />
              <img src="/images/home/icons.svg" alt="" className=" img-fluid mx-auto testimonial-img" style={{paddingTop:"35px"}} />
              <small className="" style={{paddingTop:"10px"}}>Moil</small>
            </div>

            <div className="testimonial-slider2 text-center pt-2">
              
              <div className="py-xl-5 py-4 mb-8">
                <h4 className="H4" style={{fontSize:"18px"}}>Ausra Health has been working with cusmat for creation of a mobile app. The app helps the healthcare workers to understand various parts of, equipment assembly and onboarding of patients. Ausra is very happy with his collabration.</h4>
              </div>
              <br />
              <img src="/images/home/Frame.svg" alt="" className=" img-fluid mx-auto testimonial-img" />
              <small className="">Ausra Healthcare</small>
            </div>

            <div className="testimonial-slider3 text-center pt-2">
              
              <div className="py-xl-5 py-4 mb-8">
                <h4 className="H4" style={{fontSize:"18px"}}>This DTDC app is relly good. With this app, a new biker can learn the whole process of delivery by his/her own without any help.</h4>
              </div>
              <br />
              <br />
              <br />
              <br />
              <img src="/images/home/Frame (1).svg" alt="" className=" img-fluid mx-auto testimonial-img" style={{paddingTop:"10px"}} />
              <small className="">DTDC</small>
            </div>
          
        </Slider>
        <br />
        <br />
        <br />
      </div>
    </section>
      <Footer />
    </>
  );
};

export default Testimonial;
