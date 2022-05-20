import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from "../../layout/Footer";
import Navbar from '../../layout/Navbar'

const OpenCastMining = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Navbar />
			<section>
				<div className="case-hero-sec">
					<div className="custom-container case-hero-heading">
						<h1 className="H1 color-3 ">Open Cast Mining</h1>
					</div>
				</div>

				<div className="custom-container business-sec">
					<h2 className="H2" style={{fontSize: "32px"}}> Business Challenge</h2>
					<h4 className="H4 py-4 color-2" style={{fontSize: "20px"}}>
						India is the 4th largest construction equipment market in the world and is
						growing at a CAGR of approximately 11%. Although the growth rate has
						increased significantly, the industry is facing major challenges because of
						acute shortage of skilled service technicians, resulting in Increase in
						downtime of the equipment due to increased mean time to repair, Higher
						equipment failure rates and increased life cycle costs. In the current case,
						the bottleneck for customer was Down-time of the equipment due to :
					</h4>
					<h4 className="H4 color-2" style={{fontSize: "20px"}}>
						(a) Inability to repair and maintain equipment, <br /> (b) Frequent
						breakdown of equipment.
					</h4>
					<h4 className="H4 py-4 color-2" style={{fontSize: "20px"}}>
						As a consequence of the complexity of the equipment operations and frequent
						changes in manpower due to high attrition rate, the service technicians were
						not able to reach the required level of expertise to keep the equipment
						running, resulting in high penalties, loss in service revenue and frequent
						breakdown of the equipment.
					</h4>
				</div>

				<div className="solution-sec">
					<div className="custom-container py-5">
						<h2 className="H2" style={{fontSize: "32px"}}> Solution 1</h2>
						<h4 className="H4 py-4" style={{fontSize: "20px"}}>
							CUSMAT worked with concerned people from their team to find out the
							problem areas. With a detailed study of the equipment and the processes
							involved, we customised and created a system around the problem. We
							narrowed down the target improvement area as :
						</h4>
						<h4 className="H4 py-4" style={{fontSize: "20px"}}>
							(a) Increasing the uptime of the equipment <br /> (b) Attrition proofing
							company operations <br /> (c) Reducing life cycle costs <br /> (d)
							Creating standardized learning paths for service technicians.
						</h4>
						<h4 className="H4 py-4" style={{fontSize: "20px"}}>
							The system generated a detailed description of the past and upcoming
							maintenance schedules, as well as Performance Analytics reports along
							with overall performance details and suggested redo levels for all
							individual operators.
						</h4>

						<div className="row mx-0 justify-content-between py-lg-5 gx-4 gy-3">
							<div className="col-lg-3 col-md-5 bg-white text-center py-5 px-3 rounded">
								<h2 className="H2 text-black"> 50%</h2>
								<h4 className="H4 color-2 pt-4">
									{' '}
									Reduction in avoidable <br /> Downtime
								</h4>
							</div>
							<div className="col-lg-3 col-md-5 bg-white text-center py-5 px-3 rounded">
								<h2 className="H2 text-black "> 80%</h2>
								<h4 className="H4 color-2 pt-4">
									{' '}
									Reduction in <br /> Training Time of the <br />Technicians
								</h4>
							</div>
							<div className="col-lg-3 col-md-5 bg-white text-center py-5 px-3 rounded">
								<h2 className="H2 text-black"> 50%</h2>
								<h4 className="H4 color-2 pt-4">
									{' '}
									Reduction in Mean<br /> Time to Repair
								</h4>
							</div>
						</div>
					</div>

					<div className="custom-container py-lg-5">
						<h2 className="H2" style={{fontSize: "32px"}}> Solution 2</h2>
						<h4 className="H4 py-4" style={{fontSize: "20px"}}>
							As the previously implemented solutions showed a significant impact, the
							customer trusted us to solve another problem regarding their daily
							production target. After thorough research, CUSMAT designed a solution
							for the equipment operators on how to operate excavators and dump-trucks
							in an efficient manner, helping them upgrade their knowledge about the
							equipments in order to increase their operational efficiency to achieve
							daily targets.
						</h4>

						<div className="row mx-0 justify-content-between py-lg-5 gx-4 gy-3">
							<div className="col-lg-3 col-md-5 bg-white text-center py-5 px-3 rounded">
								<h2 className="H2 text-black"> 20%</h2>
								<h4 className="H4 color-2 pt-4">
									{' '}
									Reduction in Running <br /> Cost
								</h4>
							</div>
							<div className="col-lg-3 col-md-5 bg-white text-center py-5 px-3 rounded">
								<h2 className="H2 text-black "> 70%</h2>
								<h4 className="H4 color-2 pt-4">
									{' '}
									Reduction in <br /> Accidents
								</h4>
							</div>
							<div className="col-lg-3 col-md-5 text-center  px-3 rounded"></div>
						</div>

						<h4 className="H4 py-4" style={{fontSize: "20px"}}>
							The equipments designed to up-skill the operators were :
						</h4>
						<h4 className="H4 py-3" style={{fontSize: "20px"}}>
							-Dump Trucks : BelAZ, BEML Limited, Caterpillar Inc. <br /> -Excavators
							: Tata Hitachi, P&H.
						</h4>
					</div>
				</div>

				<div className="next-study-sec py-5 custom-container row justify-content-end">
					<div className="col-md-6 p-0">
						<div className="d-md-flex justify-content-end">
							<h4 className="H4 my-auto pe-3 pb-3 pb-md-0" style={{fontSize: "20px"}}>Next Case Study</h4>
							<Link to="/case-studies/express-logistics">
								<button className="next-btn">Express Logistics ⟶</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default OpenCastMining
