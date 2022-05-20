import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
import Benefits from './Benefits'
import Footer from "../../layout/Footer";
import Working from './Working'
import Slider from "react-slick";

const VaccumPumpMaintenance = () => {
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
			img: "/images/useCases/vaccumpump1.svg",
		},
		{
			id: 2,
			img: "/images/useCases/vaccumpump2.svg",
		},
		{
			id: 3,
			img: "/images/useCases/vaccumpump3.svg",
		},
		{
			id: 4,
			img: "/images/useCases/vaccumpump4.svg",
		},
		{
			id: 5,
			img: "/images/useCases/vaccumpump5.svg",
		}
	];

	return (
		<>
			<Navbar />
			<section>
				<div className="custom-container page-heading-sec">
					<div className="row mx-0">
						<div className="col-lg-6 px-0">
							<h1 className="H2" style={{fontSize: "50px"}}>Vaccum Pump Maintenance</h1>
							<h4 className="H4 color-2 py-4" style={{fontSize: "20px"}}>
							An advanced simulator to Train and Assess operators and service technicians for the maintenance procedure of vacuum pumps.
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
						The operator gets skilled without using the actual machine reducing the risk of harm and delay. It also helps in increasing quality of work, productivity and having complete command over the usage and maintenance procedures of the machine. The simulator helps technicians to get familiarized with the maintenance procedures and improve their skills and efficiency.
						</h4>
				</div>

				<Benefits />
				<section className="custom-container working-sec">
					<h2 className="H2 pb-lg-5 pb-3" style={{ fontSize: "32px" }}></h2>
					<div className="working-container pb-3">
					<iframe src="https://drive.google.com/file/d/12jabSSg3yFRvlnCwB7EA5ZYLKEazeOEe/preview" width="1100" height="600" allow="autoplay"></iframe>
					</div>
					<br />
					<br />
					<br />
				</section>
			</section>
			<Footer />
		</>
	)
}

export default VaccumPumpMaintenance
