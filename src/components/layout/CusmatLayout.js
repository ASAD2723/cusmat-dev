import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import SubFooter from './SubFooter'

const CusmatLayout = () => {
	return (
		<div>
			<div className="">{<Outlet />}</div>
			<SubFooter />
		</div>
	)
}

export default CusmatLayout
