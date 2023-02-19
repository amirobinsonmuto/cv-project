import PropTypes from "prop-types";

const Button = ({ color, text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
