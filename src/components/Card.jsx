import PropTypes from "prop-types";
import "./card.css";
import '@fontsource/urbanist'

// eslint-disable-next-line react/prop-types
function Card({ title, additionalTitle, text, percentages, image, onClick, buttonText, buttonText2, style, text2 }) {
  const hasImage = image !== undefined && image !== null;

  return (
    <div className={`card-container text-center bg-dark animate__animated animate__fadeInUp ${!hasImage ? 'no-image' : ''}`}>
      {hasImage && (
        <div className="image-container">
          <img src={image} alt={title} className="card-img" />
        </div>
      )}
      <div className="card-body text-light" style={style}>
        {additionalTitle && <h5 className="card-additional-title">{additionalTitle}</h5>}
        <p className="card-text text-secondary">{title}</p>
        <p className="card-text2 text-secondary">
          {text2 ? text2 : " "}
        </p>
        <p className="card-text text-secondary">
          {text ? text : " "}
        </p>

        <div className="additional-info">
          <div className="circle-container">
            {percentages.map((percentage, index) => (
              <div key={index} className={`circle circle${index + 1}`}>
                {percentage.planet}: {percentage.value}%
              </div>
            ))}
          </div>
        </div>

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
  additionalTitle: PropTypes.string,
  text: PropTypes.string,
  percentages: PropTypes.arrayOf(PropTypes.shape({
    planet: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })),
  image: PropTypes.string,
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
  buttonText2: PropTypes.string,
  style: PropTypes.object,
};

export default Card;
