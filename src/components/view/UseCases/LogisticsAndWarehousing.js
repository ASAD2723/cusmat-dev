import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from "../../layout/Footer";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../layout/Navbar'

const LogisticsAndWarehousing = () => {
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
					<span className="color-4"> Logistics And Warehousing</span>{' '}
				</h6>
				<h1 className="H1" style={{fontSize: "50px"}}>Logistics And Warehousing</h1>
				<br />
				<br />
				<br />


				<div>
					
					<div className="row g-5 mx-0">
						<Link
							to="/use-cases/logisticsandwarehousing/forklift-simulator"
							className="col-lg-4 col-md-6 use-card"
						>
							<div className="use-card-desc">
								<h3 className="H3" style={{fontSize: "20px"}}> Forklift Simulator</h3>
							</div>
						</Link>
						<Link
							to="/use-cases/logisticsandwarehousing/reach-truck-simulator"
							className="col-lg-4 col-md-6 use-card"
						>
							<div className="use-card-desc">
								<h3 className="H3" style={{fontSize: "20px"}}>Reach Truck Simulator</h3>
							</div>
						</Link>
						<Link
							to="/use-cases/logisticsandwarehousing/last-mile-delivery"
							className="col-lg-4 col-md-6 use-card"
						>
							<div className="use-card-desc">
								<h3 className="H3" style={{fontSize: "20px"}}>Last Mile Delivery</h3>
							</div>
						</Link>
					</div>
				</div>
				
			</section>
			<Footer />
		</>
	)
}

export default LogisticsAndWarehousing
