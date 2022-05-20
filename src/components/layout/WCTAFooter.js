import React from 'react'
import { Link } from 'react-router-dom'

const WCTAFooter = () => {
	return (
		<section className="footer-sec py-5">
			<div className="custom-container">
				<div className="row  px-0 py-md-1 py-lg-5 m-0 gy-5">
					<div className="col-lg-5 col-md-8 contact-sec p-0">
						<h3 className="H3 pb-2" > Contact</h3>
						<h5 className="H5"> Send us a Message </h5>
						<br />
						<form action="" className="contact-form">
							<input type="text" name="" id="" placeholder="Enter Name*" />
							<input type="email" name="" id="" placeholder="Enter Email*" />
							<textarea
								name="Message"
								id=""
								rows="7"
								className="text-dark"
								placeholder="Message"
							></textarea>
							<small className="">Max 500 Characters</small>
							<button className="btn-2 mt-4">Submit</button>
						</form>
					</div>
					<div className="col-lg-3 col-md-6 explore-sec p-0">
						<h3 className="H3 pb-3"> Explore</h3>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about-us">About Us</Link>
							</li>
							<li>
								<Link to="/use-cases">Use Cases</Link>
							</li>
							<li>
								<Link to="/case-studies">Case Studies</Link>
							</li>
							<li>
								<Link to="/career">Career</Link>
							</li>
							<li>
								<Link to="/request-demo">Request a Demo</Link>
							</li>
						</ul>
					</div>
					<div className="col-lg-4 col-md-6 p-0">
						<img src="/images/home/logo2.svg" alt="logo" />
						<div className="d-flex py-4 pb-2">
							<img src="/images/home/mail.svg" alt="mail" className="my-auto" />
							
							<h5 className="H5 my-auto ps-2">
								<a href="mailto:contact@cusmat.com" className="text-white">
									contact@cusmat.com
								</a>
							</h5>
						</div>
						<div className="d-flex pt-2">
							<h5 className="H5 my-auto "> Follow us on</h5>
							<a
								href="https://www.linkedin.com/company/cusmat/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="/images/home/linkedin.svg"
									alt="linkedin"
									className="my-auto  ps-4"
								/>
							</a>
						</div>
						<div className="py-4">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6494053536135!2d77.6994648!3d12.994261600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11755807bd47%3A0x9ee8589c830d754e!2s91springboard%20ITPL%20Main%20Road%2C%20Mahadevapura!5e0!3m2!1sen!2sin!4v1652743462171!5m2!1sen!2sin"
								height="257"
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="w-100"
							></iframe>
						</div>
						<button className="btn-2">Open in Google Maps</button>
					</div>
				</div>
			</div>
			<br />
			<br />
		</section>
	)
}

export default WCTAFooter
