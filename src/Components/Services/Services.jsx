import "./Services.css"
import assets_2 from "../../assets/assets_2.png"
import assets_1 from "../../assets/assets_1.png"
import assets_3 from "../../assets/assets_3.png"
const Services = () => {
  return (
	<div className="services container">
		<div className="services-text">
			<p>We provide various kind of <br />learning modules for you</p>
			<p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. the point of using lorem</p>
		</div>
		<div className="features">
			<div className="featureChild">
				<img src={assets_3} alt="assets-3" />
				<p>learn anything</p>
				<p>it is a long established fact that a reader will be distracted by the readable</p>
			</div>
			<div className="featureChild">
				<img src={assets_2} alt="assets-3" />
				<p>flexible learning</p>
				<p>it is a long established fact that a reader will be distracted by the readable content of a page when</p>
			</div>
			<div className="featureChild">
				<img src={assets_1} alt="assets-1" />
				<p>expert content</p>
				<p>it is a long established fact that a reader will be distracted by the readable</p>
			</div>
		</div>
	</div>
  )
}

export default Services