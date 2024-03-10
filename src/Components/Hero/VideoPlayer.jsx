import PropTypes from 'prop-types';

import { useRef } from "react"
import masai from "../../assets/masai.mp4"
import "./VideoPlayer.css"
const VideoPlayer = ({ play, setPlay }) => {

	const player = useRef(null);

	const ClosePlayer = (e) => {
		if (e.target === player.current) {
			setPlay(false);
		}
	}
	return (
		<div className={`videoPlayer ${play ? '' : 'hide'}`} ref={player} onClick={ClosePlayer}>
			<video src={masai} autoPlay controls ></video>
		</div>
	)
}


VideoPlayer.propTypes = {
	play: PropTypes.bool.isRequired,
	setPlay: PropTypes.func.isRequired
};
export default VideoPlayer
