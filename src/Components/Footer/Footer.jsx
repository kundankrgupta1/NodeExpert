import "./Footer.css"
import React from "react";
import logo from "../../assets/icon.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { BsFileArrowUpFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {


	const [result, setResult] = React.useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};

	const socailIcon = [
		{ icon: <FaFacebookF key="facebook" />, link: "https://www.facebook.com" },
		{ icon: <FaTwitter key="twitter" />, link: "https://www.twitter.com" },
		{ icon: <FaLinkedinIn key="linkedin" />, link: "https://www.linkedin.com" },
		{ icon: <FaPinterestP key="pinterest" />, link: "https://www.pinterest.com" },
	]

	return (
		<div className="footer">
			<div className="contactBoard">
				<div className="contactBoardText">
					<p>contact us!</p>
					<p>There are many variations of passages of Lorem Ipsum but the majority have suffered alteration.</p>
				</div>
				<form onSubmit={onSubmit}>
					<div className="contactBoardInput">
						<input type="email" placeholder="enter email" required />
						<button type="submit" className="btn">send</button>
					</div>
					<span>{result}</span>
				</form>
			</div>
			<div className="footerStart">
				<div className="footerStartContent">
					<div className="footerLogo">
						<img src={logo} alt="" />
						<p>Learning Exp.</p>
					</div>
					<ul className="socialIcons">
						{
							socailIcon.map(({ icon }, i) => {
								return (
									<li key={i}>{icon}</li>
								)
							})
						}
					</ul>
				</div>
				<div className="footerStartContent">
					<p>links</p>
					<ul>
						<li>home</li>
						<li>pricing</li>
						<li>download</li>
						<li>about</li>
						<li>service</li>
					</ul>
				</div>
				<div className="footerStartContent">
					<p>support</p>
					<ul>
						<li>f&q</li>
						<li>how it</li>
						<li>feauters</li>
						<li>contact</li>
						<li>reporting</li>
					</ul>
				</div>
				<div className="footerStartContent">
					<p>Contact us</p>
					<p>+918999999999</p>
					<p>example@email.com</p>
					<p>pune city</p>
				</div>
			</div>
			<div className="subFooter container">
				<p>copyright & design by learning exp.</p>
				<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
					<p>terms of use&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;privacy policy</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Link to="hero" smooth={true} duration={500} offset={0} style={{ cursor: "pointer", color: "red", fontWeight: "700", fontSize: "18px", border: "2px solid gray", padding: "10px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>Scroll Top <BsFileArrowUpFill /></Link>
				</div>
			</div>
		</div>
	)
}

export default Footer