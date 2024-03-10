import "./Navbar.css"
import logo from "../../assets/logo.png"
import { useEffect, useState } from "react"
import { Link } from "react-scroll";
const Navbar = () => {
	const [fixed, setFixed] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 90 ? setFixed(true) : setFixed(false);
		})
	})

	const btn = <button className='btn'>contact us</button>;
	const data = [
		{ name: "home", link: "hero", offset: 0 },
		{ name: "services us", link: "services", offset: -120 },
		{ name: "why us", link: "why", offset: -120 },
		{ name: "our goals", link: "goals", offset: -120 },
		{ name: btn, link: "footer", offset: -200 },
	]

	return (
		<nav className={`container ${fixed ? 'stickyNav' : ''}`}>
			<Link to="hero" offset={0} smooth={true} duration={500}>
				<img src={logo} alt="logo" className="logo" />
			</Link>
			<ul>
				{
					data.map((e, ind) =>
						<li key={ind}>
							<Link to={e.link} spy={true} offset={e.offset} smooth={true} duration={500} className="">{e.name}</Link>
						</li>
					)
				}
			</ul>
		</nav>
	)
}

export default Navbar