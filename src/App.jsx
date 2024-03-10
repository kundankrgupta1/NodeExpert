import { useState } from 'react'
import Hero from './Components/Hero/Hero'
import VideoPlayer from './Components/Hero/VideoPlayer'
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services';
import Why from './Components/Why/Why';
import Goals from './Components/Goals/Goals';
import Feedback from './Components/Feedback/Feedback';
import Footer from './Components/Footer/Footer';

function App() {

	const [play, setPlay] = useState(false);

	return (
		<div>
			<Navbar />
			<Hero setPlay={setPlay} />
			<VideoPlayer play={play} setPlay={setPlay} />
			<Services />
			<Why setPlay={setPlay} />
			<Goals />
			<Feedback />
			<Footer />
		</div>
	)
}

export default App
