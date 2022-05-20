import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
import Benefits from './Benefits'
import Footer from "../../layout/Footer";
import Slider from "react-slick";
import Working from './Working'

const MaintanceSafety = () => {
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
			img: "/images/useCases/MaintenanceandSafety2.svg",
		},
		{
			id: 2,
			img: "/images/useCases/MaintenanceandSafety3.svg",
		},
		{
			id: 3,
			img: "/images/useCases/MaintenanceandSafety4.svg",
		},
		{
			id: 4,
			img: "/images/useCases/MaintenanceandSafety5.svg",
		},
		{
			id: 5,
			img: "/images/useCases/MaintenanceandSafety1.svg"
		}
	];

	return (
		<>
			<Navbar />
			<section>
				<div className="custom-container page-heading-sec">
					<div className="row mx-0">
						<div className="col-lg-6 px-0">
							<h1 className="H1" style={{fontSize: "50px"}}>Maintenance and Safety</h1>
							<h4 className="H4 color-2 py-4" style={{fontSize: "20px"}}>
								Dumper Maintenance : Excavator Maintenance : Mine Safety Induction
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
						Augmented Reality (AR) and Virtual Reality (VR) Maintenance platforms are designed to increase the efficiency of service technicians. Simple as well as complex technical tasks can be replicated for the maintenance training exercises to reflect daily, monthly and annual schedules and practices. Learners are able to understand and perform virtual tasks, without actual equipment, which not only helps them retain what they learn, but also in implementing the knowledge in real life.
						<br />
						<br />

The simulators replicate high-risk scenarios, along with the exact spaces, terrains and machine models, in a safe and realistic learning environment to exercise highly skilled and risky tasks. Operators are effectively upskilled when they fail, learn from their mistakes and repeat the exercises. Additionally, learners become more confident and eligible to perform tasks efficiently, reducing costly mistakes and making workplaces safer.
						</h4>
				</div>

				<Benefits />
				<section className="custom-container working-sec">
					<h2 className="H2 pb-lg-5 pb-3" style={{ fontSize: "32px" }}></h2>
					<div className="working-container pb-3">
					<iframe src="https://drive.google.com/file/d/1NzVdbEyLAG5jHYErbijS_GbraqeYA1sK/preview" width="1100" height="600" allow="autoplay"></iframe>
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

export default MaintanceSafety
