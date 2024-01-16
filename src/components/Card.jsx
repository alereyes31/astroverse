// Card.jsx
import PropTypes from "prop-types";
import "./card.css";

// eslint-disable-next-line react/prop-types
function Card({ title, additionalTitle, text, image, onClick, buttonText, buttonText2, style }) {
  const hasImage = image !== undefined && image !== null;

  return (
    <div className={`card text-center bg-dark animate__animated animate__fadeInUp ${!hasImage ? 'no-image' : ''}`}>
      {additionalTitle && <h5 className="card-additional-title">{additionalTitle}</h5>}
      {hasImage && (
        <div className="overflow">
          <img src={image} alt={title} className="card-img-top" style={{ maxWidth: "60%", height: "auto" }} />
        </div>
      )}
      <div className="card-body text-light" style={style}>
        <p className="card-text text-secondary">{title}</p>
        <p className="card-text text-secondary">
          {text ? text : " "}
        </p>
        <div className="button-container">
          <button onClick={onClick} className="button-card">
            {buttonText}
          </button>
          {buttonText2 && (
            <button onClick={onClick} className="button-card" style={{ marginLeft: '8px' }}>
              {buttonText2}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  additionalTitle: PropTypes.string, // Nuevo prop para el título adicional
  text: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
