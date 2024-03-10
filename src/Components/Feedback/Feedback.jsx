import "./Feedback.css"
import { IoStar } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import student from "../../assets/student.jpg";
const Feedback = () => {
	return (
		<div className="feedback container">
			<div className="feedback-content">
				<div className="contentText">
					<p>our students feedback</p>
					<p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Todayhand Embark On A Journey Of Discovery, Growth, And Success.</p>
				</div>
				<button>read more <FaLongArrowAltRight /></button>
			</div>


			<div className="feedbackBoard">
				<div className="studentPic">
					<img src={student} alt="student-pic" />
				</div>

				
				<div className="feedbackBoardText">
					<div className="star"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
					<p>&quot;Sed Ut Perspiciatis unde omnis iste Natus Error Sit <br /> Voluptatem Accusantium Doloremque <br /> Laudantium, <br /> Totam Rem Aperiam, eaque ipsa Quae Ab illo</p>
					<p>Riad Isalm</p>
					<p>Product Manager <span>@learning.com</span></p>
				</div>
			</div>
		</div>
	)
}

export default Feedback