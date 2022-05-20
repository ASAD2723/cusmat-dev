import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from "../../layout/Footer";
import Slider from 'react-slick'
import Navbar from '../../layout/Navbar'

const CaseStudies = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<>
		<div>
			<Navbar />
			<div className="case-slider">
				<Slider {...settings}>
					<div className="case-slider-item bg-success">
						<a href="#">
							<img
								src="/images/case1.jpg"
								alt=""
								className="w-100 vh-100"
							/>
						</a>
					</div>
					<div className="case-slider-item bg-success">
						<a href="#">
							<img
								src="/images/case2.jpg"
								alt=""
								className="w-100 vh-90"
							/>
						</a>
					</div>
					<div className="case-slider-item bg-success">
						<a href="#">
							<img
								src="/images/case3.jpg"
								alt=""
								className="w-100 vh-90"
							/>
						</a>
					</div>
				</Slider>
			</div>

			<div className="custom-container case-studies-sec">
				<h2 className="H1 py-4" style={{fontSize:"50px"}}> Case Studies</h2>
				<br />
				<div className="row g-5 mx-0">
					<div className="col-lg-4 col-md-6 use-card">
						<div className="use-card-desc">
							<h3 className="use-card-title ">
								Express <br /> Logistics
							</h3>
							<Link to="/case-studies/express-logistics">
								<h6 className="H6 pt-3 color-4">Learn More ⟶ </h6>
							</Link>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 use-card">
						<div className="use-card-desc">
							<h3 className="use-card-title ">
								Pharma <br /> Manufacturing
							</h3>
							<Link to="/case-studies/pharma-manufacturing">
								<h6 className="H6 pt-3 color-4">Learn More ⟶ </h6>
							</Link>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 use-card">
						<div className="use-card-desc">
							<h3 className="use-card-title ">
								Open-Cast <br /> Mining
							</h3>
							<Link to="/case-studies/open-cast-mining">
								<h6 className="H6 pt-3 color-4">Learn More ⟶ </h6>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
		</div>
		<Footer />
		</>
	)
}

export default CaseStudies
