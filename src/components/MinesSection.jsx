import Card from './Card';  
import epicChestImage from '../assets/Cofre_epico.png';  
import comunChestImage from '../assets/Cofre_comun.png';  
import legendChestImage from '../assets/Cofre_legendario.png';  
import Colector from '../assets/Colector.jpg';  
import bg from '../assets/pruebabg.gif';
import Mines from '../assets/Mines.jpg';

const MinesSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover', // o 'contain' dependiendo de tus preferencias
    backgroundRepeat: 'no-repeat',    minHeight: '100%',

  };

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1rem',
    maxWidth: '1200px',
    margin: 'auto',
    textAlign: 'center',  // Añadido para centrar el texto en el contenedor
  };

  const messageStyle = {
    textAlign: 'center',
    margin: '0.5rem 0',
    padding: '0.3rem',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    fontSize: '1.2rem',
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


    return (
      <div style={sectionStyle}>

            <main className="grid col-4 med-col-2 peq-col-1">

      
      <div style={cardContainerStyle}>
        <Card title="Common Chest" text="200 $VARTA" image={comunChestImage} buttonText="MINT" />
        <Card title="Epic Chest" text="500 $VARTA" image={epicChestImage} buttonText="MINT" />
        <Card title="Legend Chest" text="1000 $VARTA" image={legendChestImage} buttonText="MINT" />
      </div>
      <div style={horizontalLineStyle}></div>

      <div style={messageStyle}>
        <p>Current Mines: 2</p>
      </div>
      <div style={{ ...cardContainerStyle, ...mediaQueryStyle }}>
      <Card
  title={
    <>
      Inframus Miner
      <br />
      <span role="img" aria-label="stars">⭐⭐⭐⭐⭐</span>
    </>
  }
  text="Power Of Mining: 170 $VARTA Per Day"
  image={Mines}
  buttonText="COLLECT"
  style={{ whiteSpace: 'nowrap' }}
/>
 <Card
  title={
    <>
      Boreal Miner
      <br style={{ marginTop: '-0.5rem' }} />
      <span role="img" aria-label="stars">⭐⭐⭐⭐</span>
    </>
  }
  text="Power Of Mining: 70 $VARTA Per Day"
  image={Colector}
  buttonText="UNSTAKE"
  buttonText2="COLLECT"
/>
  </div>
      </main>
      </div>

  );
};

export default MinesSection;

