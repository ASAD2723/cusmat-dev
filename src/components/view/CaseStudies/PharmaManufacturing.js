import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
import Footer from "../../layout/Footer";

const PharmaManufacturing = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Navbar />
			<section>
				<div className="case-hero-sec">
					<div className="custom-container case-hero-heading">
						<h1 className="H1 color-3">Pharma Manufacturing</h1>
					</div>
				</div>

				<div className="custom-container business-sec">
					<h2 className="H2" style={{fontSize: "32px"}}> Business Challenge</h2>
					<h4 className="H4 py-4 color-2" style={{fontSize: "20px"}}>
						Although India is the largest provider of generic drugs globally, and the
						second largest contributor of the global pharmaceutical workforce, the
						increase in operational costs, human errors, reserved inventory, proper
						maintenance and safety culture has become a major challenge. In the current
						case, the bottleneck for our customer was that the production of the
						pharmaceutical company was getting impacted because of <br /> (a). Inability
						to repair the vacuum pumps within the speculated time, <br /> (b).
						Pre-mature break-down of the machines due to poor maintenance.
					</h4>
					<h4 className="H4 py-4 color-2" style={{fontSize: "20px"}}>
						Due to the complexity of equipments and the continuous changes that occur
						due to high attrition rates, the service technicians were not able to reach
						the required skill level, to keep the plant running efficiently, resulting
						in Increased running costs and a decrease in the quality and quantity of the
						service.
					</h4>
				</div>

				<div className="solution-sec">
					<div className="custom-container py-5">
						<h2 className="H2" style={{fontSize: "32px"}}> Solution</h2>
						<h4 className="H4 py-4" style={{fontSize: "20px"}}>
							CUSMAT Technologies worked with the concerned personnel in up-skilling
							the operators and improving their performances. With a detailed study of
							the equipments and the processes involved, we customised and created a
							system around the problem. We narrowed down the Target Improvement Areas
							as <br /> (a). Reducing MTTR, through Certified Technicians, <br /> (b).
							Attrition Proofing the company operations, <br /> (c). Streamlined,
							Standardised Plant Processes in line with TPM, AM, PM Standards, which
							would automatically result in Reduction in the number of standby pumps
							by 30% and Reduction in LCC (Life Cycle Costs).
						</h4>
						<h4 className="H4 py-4" style={{fontSize: "20px"}}>
							After creating and implementing a customised learning path, Significant
							improvements were seen despite of a substantial decrease in training
							time.
						</h4>
						<h4 className="H4 py-4" style={{fontSize: "20px"}}>
							The system generated detailed Performance Analytics reports along with
							overall performance details and suggested redo levels for all individual
							operators.
						</h4>

						<div className="row mx-0 justify-content-between py-5 gx-4 gy-3">
							<div className="col-lg-3 col-md-5 bg-white text-center py-5 px-3 rounded">
								<h2 className="H2 text-black"> 80%</h2>
								<h4 className="H4 color-2 pt-4">
									{' '}
									Decrease in Training <br /> Time
								</h4>
							</div>
							<div className="col-lg-3 col-md-5 bg-white text-center py-5 px-3 rounded">
								<h2 className="H2 text-black "> 67%</h2>
								<h4 className="H4 color-2 pt-4">
									{' '}
									Decrease in Repair <br /> Time
								</h4>
							</div>
							<div className="col-lg-3 col-md-5 bg-white text-center py-5 px-3 rounded">
								<h2 className="H2 text-black"> 94%</h2>
								<h4 className="H4 color-2 pt-4">
									{' '}
									Decrease in Loss of Production Due to Downtime
								</h4>
							</div>
						</div>
					</div>
				</div>

				<div className="next-study-sec py-5 custom-container row justify-content-end">
					<div className="col-lg-6 p-0">
						<div className="d-md-flex justify-content-end">
							<h4 className="H4 my-auto pe-3 pb-3 pb-md-0" style={{fontSize: "20px"}}>Next Case Study</h4>
							<Link to="/case-studies/open-cast-mining">
								<button className="next-btn">Open-Cast Mining ⟶</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default PharmaManufacturing
