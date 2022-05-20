import React, { useEffect } from 'react'
import Navbar from '../../layout/Navbar'
import Benefits from './Benefits'
import PageHeading from './PageHeading'
import Working from './Working'
import Slider from "react-slick";
import Footer from "../../layout/Footer";


const DumperSimulator = () => {
	var settings = {
		dots: false,
		infinite: true,
		slidesToShow: 2,
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
			img: "/images/useCases/dumper1.svg",
		},
		{
			id: 2,
			img: "/images/useCases/dumper2.svg",
		},
		{
			id: 3,
			img: "/images/useCases/dumper3.svg",
		},
		{
			id: 4,
			img: "/images/useCases/dumper4.svg",
		},
		{
			id: 5,
			img: "/images/useCases/dumper5.svg",
		},
		{
			id: 6,
			img: "/images/useCases/dumper6.svg",
		},
	];


	return (
		<>
			<Navbar />
			<section>
				<PageHeading />
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
					<br />
					<br />

					<div className="custom-container py-5 color-2">
						<h4 className="H4" style={{ fontSize: "20px" }}>
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
					<br />
					<br />

				</section>
				<Benefits />
				<section className="custom-container working-sec">
					<h2 className="H2 pb-lg-5 pb-3" style={{ fontSize: "32px" }}></h2>
					<div className="working-container pb-3">
						<iframe src="https://drive.google.com/file/d/1zWJNJVjfqVFl6X7l0WuNqDyUXYW2_pAp/preview" width="1100" height="600" allow="autoplay"></iframe>
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

export default DumperSimulator
