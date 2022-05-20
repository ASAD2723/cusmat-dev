import React, { useEffect } from 'react'
import AboutCusmat from './AboutCusmat'
import KnowMore from './KnowMore'
import MeetTeam from './MeetTeam'
import OurInvestor from './OurInvestor'
import Navbar from '../../layout/Navbar'

const AboutUs = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div>
			<Navbar />
			<AboutCusmat />
			<OurInvestor />
			<MeetTeam />
			<KnowMore />
		</div>
	)
}

export default AboutUs
