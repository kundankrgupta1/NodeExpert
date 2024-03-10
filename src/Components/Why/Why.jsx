import VideoPlayer from "../Hero/VideoPlayer"
import "./Why.css"
import thumb from "../../assets/thumbnail.png";
import playIcom from "../../assets/play-icon.png"
const Why = ({setPlay}) => {
	return (
		<div className="why container">
			<div className="why-text">
				<p>why us</p>
				<p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today and Embark On A Journey Of Discovery, Growth, And Success.</p>
			</div>
			<div className="videoIntro">
				<div className="videoSection">
					<img src={thumb} alt="thumbnail" />
					<img src={playIcom} alt="playIcon" onClick={() => { setPlay(true) }} />
					<VideoPlayer />
				</div>
				<div className="textSection">
					<p>Crafting your dream career: <br /> building a path you love with us</p>
					<p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Todayhand Embark On A Journey Of Discovery, Growth, And Success.</p>
					<p>Our Platform Is Designed To Empower Learners Like You To Excel In Todays Dynamic World.</p>
					<button className="btn">get more</button>
				</div>
			</div>
		</div>
	)
}

export default Why