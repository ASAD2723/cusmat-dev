import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from "../../layout/Footer";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../layout/Navbar'

const Mining = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Navbar />
			<section className="custom-container mining-sec">
				<h6 className="H6">
					{' '}
					Use Cases <FontAwesomeIcon icon={faAngleRight} className="px-2" />
					<span className="color-4"> Mining</span>{' '}
				</h6>
				<h1 className="H1" style={{fontSize:"50px"}}>Mining</h1>

				<div>
					<h2 className="H2 py-4" style={{fontSize:"32px"}}> Machine Operations</h2>
					<br />
					<br />
					<br />
					<div className="row g-5 mx-0">
						<Link
							to="/use-cases/mining/dumper-simulator"
							className="col-lg-4 col-md-6 use-card"
						>
							<div className="use-card-desc">
								<h3 className="H3" style={{fontSize:"24px"}}> Dumper Simulator</h3>
							</div>
						</Link>
						<Link
							to="/use-cases/mining/winder-simulator"
							className="col-lg-4 col-md-6 use-card"
						>
							<div className="use-card-desc">
								<h3 className="H3" style={{fontSize:"24px"}}>Winder Simulator</h3>
							</div>
						</Link>
						<Link
							to="/use-cases/mining/excavator-simulator"
							className="col-lg-4 col-md-6 use-card"
						>
							<div className="use-card-desc">
								<h3 className="H3" style={{fontSize:"24px"}}>Excavator Simulator</h3>
							</div>
						</Link>
					</div>
				</div>
				<div className="py-5">
					<h2 className="H2 py-4" style={{fontSize:"32px"}}>Mining Equipment Maintenance</h2>
					<br />
					<br />
					<br />

					<div className="row g-5 mx-0">
						<Link
							to="/use-cases/mining/maintenance-safety"
							className="col-lg-4 col-md-6 use-card"
						>
							<div className="use-card-desc">
								<h3 className="H3" style={{fontSize:"24px"}}>
								Mining Equipment Maintenance
								</h3>
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

export default Mining
