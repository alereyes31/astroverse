import Card from './Card';
import Mystic from '../assets/Mystic_soldier.jpg';
import Common from '../assets/Common_soldier.jpg';
import bg from '../assets/pruebabg.gif';
import Card3 from './Card3';

const SoldiersSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100%',
  };

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1rem',
    maxWidth: '1200px',
    margin: 'auto',
    textAlign: 'center',
    marginTop: '2rem'
  };

  // Reglas de medios para pantallas más pequeñas
  const mediaQueryStyle = {
    '@media (max-width: 1128px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(100%, 1fr))',
    },
  };

  const horizontalLineStyle = {
    width: '100%',
    height: '1px',
    backgroundColor: '#ffffff',
    margin: '1rem 0',
  };

  const buttonStyle = {
    margin: '0.5rem', // Ajusta el margen según tus necesidades
  };

  return (
    <div style={sectionStyle}>
      <main className="grid col-4 med-col-2 peq-col-1">
        <div style={cardContainerStyle}>
          <Card3 title="SOLDIER INCUBATOR" buttonText="PAY 200 $VARTA" buttonStyle={buttonStyle} />
          <Card3 title="CURRENT SOLDIERS" buttonText="2" buttonStyle={buttonStyle} />
          <Card3 title="SOLDIERS POWER" buttonText="830" buttonStyle={buttonStyle} />
        </div>
        <div style={horizontalLineStyle}></div>
        <div style={{ ...cardContainerStyle, ...mediaQueryStyle }}>
          <Card title="Mystic Soldier" text=" " image={Mystic} buttonText="SP: 800" />
          <Card title="Common Soldier" text=" " image={Common} buttonText="SP: 30" />
        </div>
      </main>
    </div>
  );
};

export default SoldiersSection;
