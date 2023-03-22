import {useState} from "react"
import "../styles/header.css"

const HamburguerButton = () => {

	const [clicked, setClicked] = useState(true)

	const click = (e: React.MouseEvent<HTMLDivElement>) => {
		console.log(e)
		setClicked(!clicked)
	}

	return (
		<div onClick={click}>
			{
				clicked ?
					<>
						<div className="bar1 barChanged1"></div>
						<div className="bar2 barChanged2"></div>
						<div className="bar3 barChanged3"></div>
					</>
					:
					<>
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</>
			}
		</div>
	)
}

export default HamburguerButton;
