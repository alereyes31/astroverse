import vartaLogo from '../assets/varta.png'; // Asegúrate de tener la ruta correcta al ícono de Varta
import incubadora from '../assets/incubadora.png'; // Asegúrate de tener la ruta correcta al ícono de Varta


// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
const Card3 = ({ title, buttonText }) => {
    const cardStyle = {
      border: '2px solid transparent',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      marginBottom: '16px',
      boxShadow: '0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
    };
  
    const titleStyle = {
      paddingBottom: '8px',
      marginBottom: '8px',
    };
  
    const buttonStyle = {
      border: '2px solid transparent',
      borderRadius: '4px',
      padding: '8px 16px',
      color: '#ffffff',
      textDecoration: 'none',
      display: 'inline-block',
      cursor: 'pointer',
    };
  
    const iconStyle = {
      marginRight: '4px',
      height: '25px',
      verticalAlign: 'middle',
      marginTop: '-4px',
    };
  
    const isPayButton = title === "SOLDIER INCUBATOR";
  
    return (
      <div style={cardStyle}>
        <div style={titleStyle}>
          {isPayButton && (
            <img
              src={incubadora} // Asegúrate de tener la ruta correcta al ícono de Varta
              alt="Varta Logo"
              style={iconStyle}
            />
          )}
          {title}
        </div>
        <button style={{ ...buttonStyle, ...(isPayButton && { paddingRight: '20px' }) }}>
          {isPayButton && (
            <img
              src={vartaLogo} // Asegúrate de tener la ruta correcta al ícono de Varta
              alt="Varta Logo"
              style={iconStyle}
            />
          )}
          {buttonText}
        </button>
      </div>
    );
};

export default Card3;
