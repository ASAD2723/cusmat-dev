import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../layout/Navbar'
import Footer from "../../layout/Footer";

const Pharma = () => {
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
					<span className="color-4"> Pharmaceutical</span>{' '}
				</h6>
				<h1 className="H1">Pharmaceutical</h1>
				<br />
				<br />
				<br />


				<div>
					
					<div className="row g-5 mx-0">
						<Link
							to="/use-cases/pharma/vaccum-pump-maintenance"
							className="col-lg-4 col-md-6 use-card"
						>
							<div className="use-card-desc">
								<h3 className="H3"> Vaccum Pump Maintenance</h3>
							</div>
						</Link>
					</div>
				</div>
				
			</section>
			<Footer />
		</>
	)
}

export default Pharma
