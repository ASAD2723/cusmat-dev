import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const droplists = [
	{
		id: 1,
		title: 'Mining',
		url: '/use-cases/mining',
	},
	{
		id: 2,
		title: 'Logistics and Warehousing',
		url: '/use-cases/logisticsandwarehousing',
	},
	{
		id: 3,
		title: 'Manufacturing',
		url: '/use-cases/manufacturing',
	},
	{
		id: 4,
		title: 'Healthcare',
		url: '/use-cases/healthcare',
	},
	{
		id: 5,
		title: 'Pharmaceutical',
		url: '/use-cases/pharma',
	},
]

const Navbar = () => {
	const [stickyClass, setStickyClass] = useState('')

	useEffect(() => {
		window.addEventListener('scroll', stickNavbar)
		return () => window.removeEventListener('scroll', stickNavbar)
	}, [])

	const stickNavbar = () => {
		if (window !== undefined) {
			let windowHeight = window.scrollY
			// window height changed for the demo
			windowHeight > 80 ? setStickyClass('sticky-nav') : setStickyClass('')
		}
	}

	const location = useLocation()
	const currentPath = location.pathname
	return (
		<nav className={`navbar navbar-expand-lg navbar-light already-sticky  ${stickyClass}`}>
			<div className="container-fluid" style={{ margin: '-32px 0' }}>
				<Link className="navbar-brand" to="/">
					<img
						src="/images/home/logo.svg"
						alt="logo"
						className="img-fluid navbar-logo-image"
					/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse mob-nav" id="navbarNavDropdown">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item my-auto px-3">
							<Link
								className={`nav-link  nav-style ${
									currentPath === '/' ? 'active' : ''
								}`}
								aria-current="page"
								to="/"
							>
								Home
							</Link>
						</li>
						<li className="nav-item my-auto px-3">
							<Link
								className={`nav-link  nav-style ${
									currentPath.indexOf('/about-us') >= 0 ? 'active' : ''
								}`}
								to="/about-us"
							>
								About Us
							</Link>
						</li>

						<li className="nav-item my-auto d-flex position-relative px-3 ">
							<Link
								className={`nav-link  nav-style  ${
									currentPath.indexOf('/use-cases') >= 0 ? 'active' : ''
								}`}
								to="/use-cases"
							>
								Use Cases
							</Link>

							<div className="dropdown">
								<button
									className=" dropdown-toggle arrow-btn"
									type="button"
									id="dropdownMenuButton1"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								></button>
								<ul className="dropdown-menu px-3" aria-labelledby="dropdownMenuButton1">
									{droplists.map(({ id, title, url }) => (
										<li key={id}>
											<Link className="dropdown-item" to={url}>
												{title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</li>
						<li className="nav-item my-auto px-3">
							<Link
								className={`nav-link  nav-style ${
									currentPath.indexOf('/case-studies') >= 0 ? 'active' : ''
								}`}
								to="/case-studies"
							>
								Case Studies
							</Link>
						</li>
						<li className="nav-item my-auto px-3">
							<Link
								className={`nav-link  nav-style ${
									currentPath.indexOf('/career') >= 0 ? 'active' : ''
								}`}
								to="/career"
							>
								Career
							</Link>
						</li>

						{stickyClass ? (
							<li className="nav-item px-6">
								<Link to="/request-demo" className="nav-link nav-style">
									<button className="custom-btn H6">Get In Touch ⟶</button>
								</Link>
							</li>
						) : (
							''
						)}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
