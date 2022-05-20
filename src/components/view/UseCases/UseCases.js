import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
const caseCard = [
	{
		id: 1,
		title: 'Mining',
		url: '/use-cases/mining',
		img: "/images/covers/Mining 1.png",
	},
	{
		id: 2,
		title: 'Logistics and Warehousing',
		url: '/use-cases/logisticsandwarehousing',
		img: "/images/covers/logistics.png",
	},
	{
		id: 3,
		title: 'Manufacturing',
		url: '/use-cases/manufacturing',
		img: "/images/covers/manufacture.png",
	},
	{
		id: 4,
		title: 'Healthcare',
		url: '/use-cases/healthcare',
		img: "/images/covers/Healthcare cover 1.png",
	},
	{
		id: 5,
		title: 'Pharma',
		url: '/use-cases/pharma',
		img: "/images/covers/Pharma cover 1.png",
	},
]

const UseCases = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Navbar />
			<section className="custom-container use-cases-sec">
				<h1 className="H1 pb-lg-5 pb-3 pt-4" style={{ fontSize: "50px" }}> Use Cases</h1>
				<div className="row g-5">

					<div to="" className="col-md-6">
						<Link to='/use-cases/mining'>
							<div className="use-card" style={{ cursor: 'pointer', backgroundImage: "url('/images/covers/mines.png')" }}>
								<div className="use-card-desc">
									<h2 className="H2 text-white all-cases" style={{ fontSize: "32px", paddingLeft: "30px", paddingTop: "20px" }}> Mining</h2>
									<span className="H6 pt-3 learn-more-btn" style={{ color: '#69d0ff', fontSize: "15px", paddingLeft: "30px", paddingTop: "20px" }}>
										Learn More ⟶{' '}
									</span>
								</div>
							</div>
						</Link>
					</div>
					<div to="" className="col-md-6">
						<Link to='/use-cases/logisticsandwarehousing'>
							<div className="use-card" style={{ cursor: 'pointer', backgroundImage: "url('/images/covers/logis.png')", }}>
								<div className="use-card-desc">
									<h2 className="H2 text-white" style={{ fontSize: "32px", paddingLeft: "30px", paddingTop: "20px" }}>Logistics and Warehousing</h2>
									<span className="H6 pt-3 learn-more-btn" style={{ color: '#69d0ff', fontSize: "15px", paddingLeft: "30px", paddingTop: "20px" }}>
										Learn More ⟶{' '}
									</span>
								</div>
							</div>
						</Link>
					</div>

					<div to="" className="col-md-6">
						<Link to='/use-cases/manufacturing'>
							<div className="use-card" style={{ cursor: 'pointer', backgroundImage: "url('/images/covers/manufacturing.png')", }}>
								<div className="use-card-desc">
									<h2 className="H2 text-white" style={{ fontSize: "32px", paddingLeft: "30px", paddingTop: "20px" }}>Manufacturing</h2>
									<span className="H6 pt-3 learn-more-btn" style={{ color: '#69d0ff', fontSize: "15px", paddingLeft: "30px", paddingTop: "20px" }}>
										Learn More ⟶{' '}
									</span>
								</div>
							</div>
						</Link>
					</div>


					<div to="" className="col-md-6">
						<Link to='/use-cases/healthcare'>
							<div className="use-card" style={{ cursor: 'pointer', backgroundImage: "url('/images/covers/pharma.png')" }}>
								<div className="use-card-desc">
									<h2 className="H2 text-white" style={{ fontSize: "32px", paddingLeft: "30px", paddingTop: "20px" }}>Healthcare</h2>
									<span className="H6 pt-3 learn-more-btn" style={{ color: '#69d0ff', fontSize: "15px", paddingLeft: "30px", paddingTop: "20px" }}>
										Learn More ⟶{' '}
									</span>
								</div>
							</div>
						</Link>
					</div>

					<div to="" className="col-md-6">
						<Link to='/use-cases/pharma'>
							<div className="use-card" style={{ cursor: 'pointer', backgroundImage: "url('/images/covers/handc.png')", }}>
								<div className="use-card-desc">
									<h2 className="H2 text-white" style={{ fontSize: "32px", paddingLeft: "30px", paddingTop: "20px" }}> Pharmaceutical</h2>
									<span className="H6 pt-3 learn-more-btn" style={{ color: '#69d0ff', fontSize: "15px", paddingLeft: "30px", paddingTop: "20px" }}>
										Learn More ⟶{' '}
									</span>
								</div>
							</div>
						</Link>
					</div>

				</div>
				<br />
				<br />
				<br />
			</section>
			<Footer />
		</>
	)
}

export default UseCases
