import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
import Benefits from './Benefits'
import ImgPart from './ImgPart'
import Working from './Working'
import Footer from "../../layout/Footer";
import Slider from "react-slick";

const ReachTruckSimulator = () => {
	var settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
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
			img: "/images/useCases/rts1.svg",
		},
		{
			id: 2,
			img: "/images/useCases/rts2.svg",
		}
	];

	return (
		<>
			<Navbar />
			<section>
				<div className="custom-container page-heading-sec">
					<div className="row mx-0">
						<div className="col-lg-6 px-0">
							<h1 className="H2" style={{fontSize: "50px"}}>Reach Truck Simulator</h1>
							<h4 className="H4 color-2 py-4" style={{fontSize: "20px"}}>
								An advanced training simulator to Train and Assess Excavator
								Operators in a mining environment under various weather and
								emergency conditions.
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
				<br />
				<br />
				<br />
				<Benefits />
				
			</section>
			<Footer />
		</>
	)
}

export default ReachTruckSimulator
