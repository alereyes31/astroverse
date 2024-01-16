// Card.jsx
import PropTypes from "prop-types";
import "./card.css";

// eslint-disable-next-line react/prop-types
function Card({ title, additionalTitle, text, image, onClick, buttonText, marginTop }) {
  const hasImage = image !== undefined && image !== null;

  return (
    <div className={`card2 text-center bg-dark animate__animated animate__fadeInUp ${!hasImage ? 'no-image' : ''}`} style={{ marginTop: marginTop }}>
      {additionalTitle && <h5 className="card-additional-title">{additionalTitle}</h5>}
      {hasImage && (
        <div className="overflow">
          <img src={image} alt={title} className="card-img-top" style={{ maxWidth: "65%", height: "auto" }} />
        </div>
      )}
      <div className="card-body text-light">
      <button onClick={onClick} className="button-card">
          {buttonText}
        </button>
        <p className="card-text text-secondary">{title}</p>
        <p className="card-text text-secondary">
          {text ? text : " "}
        </p>

      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  additionalTitle: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  marginTop: PropTypes.string, // Nuevo prop para el margen superior
};

export default Card;
