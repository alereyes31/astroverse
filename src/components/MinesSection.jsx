import Card from './Card';  
import epicChestImage from '../assets/Cofre_Epic.png';  
import comunChestImage from '../assets/Cofre_Comu.png';  
import legendChestImage from '../assets/Cofre_Legendari.png';  
import bg from '../assets/bg.jpg';
import '@fontsource/orbitron';
import './MinesSection.css'; 
import '@fontsource/urbanist'

const MinesSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vH',
  };

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '3rem',
    maxWidth: '1200px',
    margin: 'auto',
    textAlign: 'center',
    marginTop: '-3rem',
  };

  const horizontalLineStyle = {
    width: '100%',
    height: '1px',
    backgroundColor: '#241756',
    margin: '1rem 0',
  };

  const horizontalLineStyle2 = {
    width: '75%', 
    height: '2px',
    backgroundColor: '#FFFFFF',
    margin: '2rem auto', 
  };

  const titleStyle = {
    fontSize: '4em',
    marginBottom: '1.26rem',
    marginTop: '2rem',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(45deg, #775DFD, #FFFFFF, #775DFD, #FFFFFF)',  // Puedes ajustar estos colores
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: 'Orbitron',
    textShadow: '2px 2px 5px rgba(255, 255, 255, 0.8)',  // Sombra hacia la derecha y hacia abajo
  };

  const titleStyle2 = {
    fontSize: '1.8em',
    marginBottom: '1.26rem',
    marginTop: '1rem',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(45deg, #775DFD, #FFEA07, #FFEA02, #FFFF00)',  // Degradado con amarillo
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: 'Orbitron',
    textShadow: '2px 2px 5px rgba(255, 255, 255, 0.8)',  // Sombra hacia la derecha y hacia abajo
  };
  
  
  

  return (
    <div style={sectionStyle}>
      <div style={horizontalLineStyle}></div>
      <h1 style={titleStyle}>Presale Chests</h1>
      <h1 style={titleStyle2}>10% Discount on all chests</h1>
      <h1 style={titleStyle2}>(Limited Units)</h1>

      <div style={horizontalLineStyle2}></div>
      <main className="grid col-4 med-col-2 peq-col-1">
        <div style={cardContainerStyle}>
        <Card
  title="Common Chest"
  text="$ 45.00"
  text2="$ 50.00"
  image={comunChestImage}
  buttonText="BUY NOW"
  percentages={[
    { planet: 'Plasko', value: 65 },
    { planet: 'Iris', value: 25 },
    { planet: 'Golden', value: 7 },
    { planet: 'King', value: 2.5 },
    { planet: 'Astro', value: 0.5},
  ]}
/>
<Card
  title="Epic Chest"
  text="$ 90.00"
  text2="$ 100.00"
  image={epicChestImage}
  buttonText="BUY NOW"
  percentages={[
    { planet: 'Plasko', value: 30 },
    { planet: 'Iris', value: 45 },
    { planet: 'Golden', value: 13 },
    { planet: 'King', value: 8 },
    { planet: 'Astro', value: 4 },
  ]}
/>
<Card
  title="Legendary Chest"
  text="$ 180.00"
  text2="$ 200.00"

  image={legendChestImage}
  buttonText="BUY NOW"
  percentages={[
    { planet: 'Plasko', value: 15 },
    { planet: 'Iris', value: 30 },
    { planet: 'Golden', value: 25 },
    { planet: 'King', value: 20 },
    { planet: 'Astro', value: 10 },
  ]}
/>
        </div>
      </main>
    </div>
  );
};

export default MinesSection;
