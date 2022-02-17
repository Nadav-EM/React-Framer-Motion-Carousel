import { motion } from "framer-motion";
import React from "react";
import "./App.css";
import images from "./data";

function App() {
	const [width, setWidth] = React.useState(0);
	const carouselRef = React.useRef();

	React.useEffect(() => {
		setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
	}, []);

	return (
		<div className="App">
			<motion.div ref={carouselRef} className="carousel">
				<motion.div
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					className="inner-carousel"
				>
					{images.map(item => {
						return (
							<motion.div className="item">
								<img src={item} alt="" />
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
}

export default App;
