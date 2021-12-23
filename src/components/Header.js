import Button from "./Button";
import PropTypes from "prop-types";

const Header = (props) => {

	const onClick = () => {
 		console.log("click");
	}

	return (
		<header className="header">
			<h1>Hello, {props.title}</h1>
			<Button 
				onClick={props.toggleShowAddTask}
				text={props.setButtonText()}
				color="green"
			/>
		</header>
	);
}
	

Header.defaultProps = {
  title: "TaskTracker",
}

Header.propTypes = {
	text : PropTypes.string,
	color : PropTypes.string,
}

export default Header;	
	