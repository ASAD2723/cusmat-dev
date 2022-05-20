import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import OurCustomers from './OurCustomers'
import Testimonial from './Testimonial'
import WorkForcePerformance from './WorkForcePerformance'
import Navbar from '../../layout/Navbar'

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div>
			<Navbar />
			<HeroSection />
			<WorkForcePerformance />
			<OurCustomers />
			<Testimonial />
		</div>
	)
}

export default Home
