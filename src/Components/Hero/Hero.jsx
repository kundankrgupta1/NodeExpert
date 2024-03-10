// packages
import PropTypes from 'prop-types';
import { Link } from "react-scroll";

// material
import { FcRight } from "react-icons/fc";
import thumb from "../../assets/thumbnail.png";
import playIcom from "../../assets/play-icon.png"

// css
import "./Hero.css"


const Hero = ({ setPlay }) => {
	return (
		<div>
			<div className="hero container">
				<div className="insideHero">
					<div className="column1">
						<p>we create learning experience with excellent technology</p>
						<p>unlimited access to 100+ world<span>-</span>class courses, hands<span>-</span>on projects, and job<span>-</span>ready certificate programs<span>-</span>all included in your subscription</p>
						<div className="column1Child">
							<Link to="footer" offset={-200} smooth={true} duration={500} ><button className="btn">book demo class</button></Link>
							<p><Link className="p" to="services" offset={-120} smooth={true} duration={500}>explore more <FcRight /></Link></p>
						</div>
					</div>
					<div className="column2">
						<img src={thumb} alt="thumbnail" />
						<img src={playIcom} alt="playIcon" onClick={() => { setPlay(true) }} />
					</div>
				</div>
			</div>
		</div>
	)
}

Hero.propTypes = {
	setPlay: PropTypes.func.isRequired
}
export default Hero
