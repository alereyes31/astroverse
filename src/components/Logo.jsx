import logoImage from '../assets/Logo-removebg.png'; // Ruta correcta a tu imagen

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-icon">
        <img src={logoImage} alt="Logo" style={{ width: '100px', height: '100px', borderRadius: '100%', marginTop: 50}} />
      </div>
    </div>
  );
};

export default Logo;