import PropTypes from "prop-types";



const Button = (props) => {
  return (
  	  <button className="btn" 
  	  	style={{ backgroundColor: props.color}} 
  	  	onClick={props.onClick}
  	  	>
  	  	{props.text}
  	  </button>
  );
}

Button.propTypes =  {
	onClick : PropTypes.func,
}


Button.defaultProps = {
	color : "steelblue",
}

export default Button;	
	