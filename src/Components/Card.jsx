import PropTypes from "prop-types";

const Card = ({ title, genero }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{genero}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  genero: PropTypes.string.isRequired,
};
export default Card;