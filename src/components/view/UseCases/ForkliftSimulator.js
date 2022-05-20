import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
import Benefits from './Benefits'
import Working from './Working'
import Footer from "../../layout/Footer";
import Slider from "react-slick";


const ForkliftSimulator = () => {
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
			img: "/images/useCases/forklift1.svg",
		},
		{
			id: 2,
			img: "/images/useCases/forklift2.svg",
		},
		{
			id: 3,
			img: "/images/useCases/forklift3.svg",
		},
		{
			id: 4,
			img: "/images/useCases/forklift4.svg",
		},
		{
			id: 5,
			img: "/images/useCases/forklift5.svg",
		},
	];

	return (
		<>
			<Navbar />
			<section>
				<div className="custom-container page-heading-sec">
					<div className="row mx-0">
						<div className="col-lg-6 px-0">
							<h1 className="H2" style={{fontSize: "50px"}}>Forklift Simulator</h1>
							<h4 className="H4 color-2 py-4" style={{fontSize: "20px"}}>
							An advanced simulator to Train and Assess Forklift Operators in a warehouse environment customized according to the actual working site.
							</h4>
<br />
							<Link to="/request-demo">
								<button className="custom-btn H6">Get In Touch ⟶</button>
							</Link>
						</div>
					</div>
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

				<div className="custom-container py-5 color-2">
					<h4 className="H4"  style={{fontSize: "20px"}}>
						{" "}
						The operator gets skilled without using the actual machine reducing the risk of harm to the operator, machine as well as the material being handled. It also helps in increasing quality of work, productivity and having complete command over the usage of the machine. The simulator is ideal for new as well as experienced operators. New operators can get familiarized with the forklift controls and learn the basic techniques whereas advanced operators can improve their skills and efficiency.
						</h4>
				</div>

				<Benefits />
				<Working />
			</section>
			<Footer />
		</>
	)
}

export default ForkliftSimulator
