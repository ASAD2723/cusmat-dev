import React, { useEffect } from 'react'
import SemiCircleProgressBar from 'react-progressbar-semicircle'
import { Link } from 'react-router-dom'
import Footer from "../../layout/Footer";
import Navbar from '../../layout/Navbar'

const ExpressLogistics = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Navbar />
			<section>
				<div className="case-hero-sec">
					<div className="custom-container case-hero-heading">
						<h1 className="H1 color-3 ">Express Logistics</h1>
					</div>
				</div>

				<div className="custom-container business-sec">
					<h2 className="H2" style={{fontSize: "32px"}}> Business Challenge</h2>
					<h4 className="H4 py-4 color-2" style={{fontSize: "20px"}}>
						CUSMAT visited A Leading Indian Courier company for over 2 decades, in
						September 2020. We got the chance to speak to the bikers and learn about
						their daily challenges on delivering the right products on time without
						committing any errors. After studying the whole process, some major problems
						were identified.
					</h4>

					<div>
						<h2 className="H2" style={{fontSize: "32px"}}>Identified Problems Areas</h2>
						<ul className="color-2">
							<li className="H4 py-4" style={{fontSize: "20px"}}>
								High training time : With an attrition rate of around 25%, the
								average time taken to train new employees was 33 days, after which
								they were exposed to actual deliveries, taking another 50-60 days to
								reach maximum productivity
							</li>
							<li className="H4" style={{fontSize: "20px"}}>
								Since the Standard operating procedures keep changing across all
								regions of operation, the gap between the updated processes and the
								process being followed by the employees keeps increasing, leading to
								increased errors of around 20% and heavy losses and penalties.
							</li>
						</ul>
					</div>
				</div>

				<div className="solution-sec">
					<div className="custom-container py-5">
						<h2 className="H2" style={{fontSize: "32px"}}> Solution</h2>
						<h4 className="H4 py-4" style={{fontSize: "20px"}}>
							{' '}
							CUSMAT designed an AR technology system (AR App) in order to train the
							delivery personnels using different real-life scenarios and reach
							optimal productivity within the span of 5 to 10 days of training. After
							using the learning platform, the error percentage dropped by 1% leading
							to reduced Induction and on-boarding of new delivery staff by 90%.
						</h4>
						<div className="py-4 text-center">
							<img src="/images/caseStu2.svg" alt="" className="img-fluid" style={{height:"700px"}} />
						</div>

						<div className="training-sec my-5 py-4">
							<h3 className="H3 text-center" style={{fontSize: "28px"}}> Training Time of New Employees</h3>

							<div className="row py-5">
								<div className="col-lg-6">
									<div className="progress-bar-sec mx-auto">
										<SemiCircleProgressBar
											style={{ marginBottom: 40 }}
											diameter={280}
											percentage={100}
											strokeWidth={16}
											stroke="#4e85f0"
										/>
										<span className="level-1">0</span>
										<span className="level-2">50</span>
										<span className="level-3">100</span>
									</div>
									<h4 className="pt-4 H4 text-center text-white" style={{fontSize: "20px"}}>
										Before CUSMAT
									</h4>
								</div>

								<div className="col-lg-6 pt-5 pt-lg-0">
									<div className="progress-bar-sec  mx-auto">
										<SemiCircleProgressBar
											style={{ marginBottom: 40 }}
											diameter={280}
											percentage={15}
											strokeWidth={18}
											stroke="#4e85f0"
										/>
										<span className="level-1">0</span>
										<span className="level-2">50</span>
										<span className="level-3">100</span>
										<span className="level-percentage ">10.6%</span>
									</div>
									<h4 className="pt-4 H4 text-center text-white" style={{fontSize: "20px"}}>After CUSMAT</h4>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="next-study-sec py-5 custom-container row justify-content-end">
					<div className="col-lg-6 p-0">
						<div className="d-md-flex justify-content-end ">
							<h4 className="H4 my-auto pe-3 pb-3 pb-md-0" style={{fontSize: "20px"}}>Next Case Study</h4>
							<Link to="/case-studies/pharma-manufacturing">
								<button className="next-btn">Pharma Manufacturing ⟶</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default ExpressLogistics
