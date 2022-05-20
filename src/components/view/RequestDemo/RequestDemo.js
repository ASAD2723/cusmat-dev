import React, { useEffect } from 'react'
import Navbar from '../../layout/Navbar'
import WCTAFooter from '../../layout/WCTAFooter'

const RequestDemo = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Navbar />
			<section className="req-demo-sec custom-container">
				<h1 className="H1" style={{fontSize: "50px"}}>Experience the CUSMAT Metaverse</h1>
				<h2 className="H2 py-4" style={{fontSize: "32px"}}>Request Demo</h2>
				<form action="" className="req-form">
					<div className="row mx-0 gx-5 gy-4 ">
						<div className="col-lg-3 col-md-4 p-0">
							<select name="cars" id="cars" className="w-100">
								<option value="Select Industry">Select Industry*</option>
								<option value="Mining">Mining</option>
								<option value="Logisticsandwarehousing">Logistics And Warehousing</option>
								<option value="Manufacture">Manufacture</option>
								<option value="Healthcare">Healthcare</option>
								<option value="Pharmaceutical">Pharmaceutical</option>
							</select>
						</div>
					</div>

					<div className="row mx-0 gx-5 gy-4">
						<div className="col-md-4  p-0">
							<input type="text" name="" id="" placeholder="Enter Name*" />
						</div>
						<div className="col-md-4  p-0">
							<input type="text" name="" id="" placeholder="Enter Phone Number*" required />
						</div>
						<div className="col-md-4  p-0">
							<input type="email" name="" id="" placeholder="Enter Email ID*" required />
						</div>
						<div className="col-md-4  p-0">
							<input type="text" name="" id="" placeholder="Enter Company Name*" required />
						</div>
						<div className="col-md-4  p-0">
							<input
								type="text"
								name=""
								id=""
								placeholder="Enter Number of Employees"
								required
							/>
						</div>
					</div>

					<div className="py-4">
						<h4 className="H4">How can we help you?</h4>
						<textarea
							name=""
							id=""
							rows="5"
							placeholder="Type here"
							className="w-100"
						></textarea>
						<small>Max 500 words</small>
					</div>
					<br />
					<div>
						<button className="custom-btn H6">Get In Touch ⟶</button>
					</div>
				</form>
				<div className="req-demo-sec">
					<h2 className="H2 py-4 ">FAQs</h2>

					<div>
						<h4 className="H4 py-3 text-black fw-bold">
							What is the ROI of the solution?
						</h4>
						<h5 className="H5 color-2">
							Each industry has a unique set of problems. Therefore the solution, the
							technology and the implementation slightly varies. The ROI on any of our
							deployments can be as soon as 2 months and maximum upto a period of 5 to
							7 months.
						</h5>
					</div>

					<div>
						<h4 className="H4 py-3 text-black fw-bold">
							How many AR/VR kits will we need to deploy to do multiple training
							sessions?
						</h4>
						<h5 className="H5 color-2">
							At one of our successful ‘In-Plant’ based deployments at Schneider
							Electric, the plant is able to conduct training for about 50-60 new
							recruits plus refresher training and develop reserve workforce for
							additionally 35 to 40 existing employees of the company with one running
							active gear headset and module.
						</h5>
					</div>

					<div>
						<h4 className="H4 py-3 text-black fw-bold">
							Most of our workers have only a primary level of education, with
							language limitations. Will this method of training work for them?
						</h4>
						<h5 className="H5 color-2">
							Over 90% of our end users have an educational qualification of under
							12th pass. Our system is designed in a way that it does not require a
							high literacy level. Moreover it’s intuitive design makes it very easy
							for users to adapt and is not dependent on language and communication
							skills of the person. However we have observed that communicating
							information in the form of text or voice to a person in his local
							language enhances his understanding by over 60%. Our system has been
							configured in 21 most popular Indian languages.
						</h5>
					</div>
				</div>
			</section>
			<WCTAFooter />
		</>
	)
}

export default RequestDemo
