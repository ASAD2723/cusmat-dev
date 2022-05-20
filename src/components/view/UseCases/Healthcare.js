import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Footer from "../../layout/Footer";
import Navbar from '../../layout/Navbar'

const Healthcare = () => {
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
					<span className="color-4"> Healthcare</span>{' '}
				</h6>
				<h1 className="H1">Healthcare</h1>
				<br />
				<br />
				<br />


				<div>
					
					<div className="row g-5 mx-0">
						<Link
							to="/use-cases/healthcare/medical-equipment-guide"
							className="col-lg-4 col-md-6 use-card"
						>
							<div className="use-card-desc">
								<h3 className="H3"> Medical Equipment Guide</h3>
							</div>
						</Link>
					</div>
				</div>
				
			</section>
			<Footer />
		</>
	)
}

export default Healthcare
