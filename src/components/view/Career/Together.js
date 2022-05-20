import React from "react";
import Slider from "react-slick";

const Together = () => {
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


  const imgCard = [
		{
			id: 1,
			img: "/images/career/1.svg",
		},
		{
			id: 2,
			img: "/images/career/2.svg",
		},
		{
			id: 3,
			img: "/images/career/3.svg",
		},
		{
			id: 4,
			img: "/images/career/4.svg",
		},
		{
			id: 5,
			img: "/images/career/5.svg",
		}
	];



  return (
    <section className="req-demo-sec">
      <div className="custom-container">
        <h1 className="H1" style={{fontSize: "50px"}}>Together at CUSMAT</h1>
        <h2 className="H4 py-lg-5 py-3 color-2" style={{fontSize:"20px"}}>
          We are a B2B product based company that operates on a hybrid working
          model. We at Cusmat are divergent, with different lifestyle, cultural
          and educational backgrounds. The diversity in the team makes Cusmat
          and its product unique and accessible to a wide range of customers.
        </h2>
      </div>

      <div>
        <img
          src="/images/career/group.svg"
          alt=""
          className="img-fluid w-100"
        />
      </div>

      <div className="custom-container">
        <h2 className="H4 req-demo-sec color-2" style={{fontSize:"20px"}}>
          We are a team that loves to work together, help each other and achieve
          success. Join our team to help reshape the immersive learning world
          and make products that reach organizations around the globe.
        </h2>
      </div>


      <div className="">
						<Slider {...settings}>
							{imgCard.map(({ id, img }) => (
								<div key={id} className="img-card ">
									<img src={img} alt="" className=" img-fluid" />
								</div>
							))}
						</Slider>
		  </div>

      
      <br />
      <br />
    </section>
  );
};

export default Together;
