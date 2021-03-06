/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo_small.png';

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: '',
		};
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active,
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
						navBarActiveClass: 'is-active',
					})
					: this.setState({
						navBarActiveClass: '',
					});
			},
		);
	}

	render() {
		return (
			<nav
				className="navbar is-transparent"
				role="navigation"
				aria-label="main-navigation"
			>
				<div className="container">
					<div className="navbar-brand">
						<Link to="/" className="navbar-item" title="Logo" style={{ textAlign: 'left' }}>
							<img src={logo} loading="lazy" alt="Inferense" style={{ width: 'auto !important', marginRight: '5px' }} />
							Inferense
						</Link>
						{/* Hamburger menu */}
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target="navMenu"
							onClick={() => this.toggleHamburger()}
						>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div
						id="navMenu"
						className={`navbar-menu ${this.state.navBarActiveClass}`}
					>
						<div className="navbar-start has-text-centered">
							{/* <Link className="navbar-item" to="/about">
					About
				</Link> */}
							<Link className="navbar-item" to="/products">
								Product
							</Link>
							<Link className="navbar-item" to="/blog">
								Blog
							</Link>
							<Link className="navbar-item" to="/contact">
								Contact
							</Link>
						</div>
						<div className="navbar-end has-text-centered">
							{/* <a
					className="navbar-item"
					href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="icon">
					<img src={github} alt="Github" />
					</span>
				</a> */}
						</div>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
