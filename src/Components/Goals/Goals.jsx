import "./Goals.css"
import { FaCheckCircle } from "react-icons/fa";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdSupervisedUserCircle } from "react-icons/md";

const Goals = () => {
	const goalsData = [
		{ icon: <FaCheckCircle className="icon" />, text: "100+", subText: "batch completed" },
		{ icon: <MdAssignmentTurnedIn className="icon" />, text: "50+", subText: "active batches" },
		{ icon: <MdSupervisedUserCircle className="icon" />, text: "10,000+", subText: "students satisfied" },
		{ icon: <MdSupervisedUserCircle className="icon" />, text: "10+", subText: "course module" },
	]
	return (
		<div className="goals container">
			<p>we completed 1200+ certification program successfully & counting</p>
			<p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
			<div className="cards">
				{
					goalsData.map(({ icon, text, subText }, ind) => {
						return (
							<div key={ind} className="childCard">
								{icon}
								<div>
									<p>{text}</p>
									<span>{subText}</span>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default Goals