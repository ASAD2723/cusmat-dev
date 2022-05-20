import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
import Footer from "../../layout/Footer";
import Benefits from './Benefits'
import Working from './Working'
import Slider from "react-slick";


const MedicalEquipmentGuide = () => {
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
			img: "/images/useCases/med1.svg",
		},
		{
			id: 2,
			img: "/images/useCases/med2.svg",
		},
		{
			id: 3,
			img: "/images/useCases/med3.svg",
		},
		{
			id: 4,
			img: "/images/useCases/med4.svg",
		},
		{
			id: 5,
			img: "/images/useCases/med5.svg",
		},
		{
			id: 6,
			img: "/images/useCases/med6.svg",
		},
		{
			id: 7,
			img: "/images/useCases/med7.svg",
		},
		{
			id: 8,
			img: "/images/useCases/med8.svg",
		},
		{
			id: 9,
			img: "/images/useCases/med9.svg",
		},
		{
			id: 10,
			img: "/images/useCases/med10.svg",
		}
	];

	return (
		<>
			<Navbar />
			<section>
				<div className="custom-container page-heading-sec">
					<div className="row mx-0">
						<div className="col-lg-6 px-0">
							<h1 className="H2" style={{fontSize: "50px"}}>Medical Equipment Guide</h1>
							<h4 className="H4 color-2 py-4" style={{fontSize: "20px"}}>
							An advanced medical equipment guide to Train and Assess Healthcare Workers, customized according to the needs and possible scenarios for practice.
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
					<h4 className="H4" style={{fontSize: "20px"}}>
						{" "}
						Healthcare systems can only function with healthcare workers. But under-investment in education and training of health workers is leading to Global Shortage of healthcare workers. Designed by CUSMAT, is an AR/VR enabled Healthcare Skilling Platform, focusing on imparting Rapid Skilling on use of medical devices covering Setup & Basic Maintenance, Basic Equipment Operations, Advanced Modes & Features and Gamified Case Scenarios.
						</h4>
				</div>

				<Benefits />
				
			</section>
			<Footer />
		</>
	)
}

export default MedicalEquipmentGuide
