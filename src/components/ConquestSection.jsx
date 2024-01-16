import bg from '../assets/pruebabg.gif';
import Card2 from './Card2';
import greenBoys from '../assets/Green_Boys.jpg';
import "./card.css";
import Card4 from './Card4';
import hellBugs from '../assets/Hell_Bugs.jpg';
import fireChunks from '../assets/Fire_Chunks.jpg';
import killerFlies from '../assets/Killer_Flies.jpg';
import hellishDemons from '../assets/Hellish_Demons.jpg';
import cursedEars from '../assets/Cursed_Ears.jpg';
import evilEyes from '../assets/Evil_Eyes.jpg';
import deadlyAssasins from '../assets/Deadly_Assasins.jpg';


const ConquestSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  };

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridAutoRows: 'auto',
    gap: '5rem',
    maxWidth: '100vH',
    margin: 'auto',
    position: 'relative',
  };

  const verticalLineStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    borderLeft: '2px solid #ffffff',
    transform: 'translateX(-50%)',
    display: 'none',
  };

  const mediaQueryStyle = {
    '@media (min-width: 768px)': {
      display: 'block',
    },
  };

  // Aplicar media query solo si se cumple la condición
  if (window.matchMedia('(min-width: 768px)').matches) {
    verticalLineStyle.display = 'block';
  }

  return (
    <div style={sectionStyle}>
      <Card4 title="Based on your soldier power available right now" buttonText="SP 830" additionalTitle='Current Soldier Power' height="50%"  />
      <main className="grid col-4 med-col-2 peq-col-1">
        <div style={cardContainerStyle}>
          <Card2 title="85% RATE TO EARN: 10 $VALTA" text="REQUIRED SP: 50" additionalTitle='GREEN BOYS' image={greenBoys} buttonText="CONQUEST" />
          <Card2 title="80% RATE TO EARN: 35 $VALTA" text="REQUIRED SP: 150" additionalTitle='HELL BUGS' image={hellBugs} buttonText="CONQUEST" marginTop="130px" height="auto" />
          <Card2 title="76% RATE TO EARN: 80 $VALTA" text="REQUIRED SP: 300" additionalTitle='FIRE CHUNKS' image={fireChunks} buttonText="CONQUEST" marginTop="-80px" height="auto" />
          <Card2 title="70% RATE TO EARN: 140 $VALTA" text="REQUIRED SP: 500" additionalTitle='KILLER FLIES' image={killerFlies} buttonText="CONQUEST" marginTop="130px" height="auto" />
          <Card2 title="66% RATE TO EARN: 250 $VALTA" text="REQUIRED SP: 800" additionalTitle='HELLISH DEMONS' image={hellishDemons} buttonText="CONQUEST" marginTop="-90px" height="auto" />
          <Card2 title="62% RATE TO EARN: 420 $VALTA" text="REQUIRED SP: 1200" additionalTitle='CURSED EARS' image={cursedEars} buttonText="CONQUEST" marginTop="130px" height="auto" />
          <Card2 title="54% RATE TO EARN: 660 $VALTA" text="REQUIRED SP: 1500" additionalTitle='EVIL EYES' image={evilEyes} buttonText="CONQUEST" marginTop="-80px" height="auto" />
          <Card2 title="46% RATE TO EARN: 1660 $VALTA" text="REQUIRED SP: 2000" additionalTitle='DEADLY ASSASINS' image={deadlyAssasins} buttonText="CONQUEST" marginTop="130px" height="auto" />

          {/* Línea vertical en el medio */}
          <div style={{ ...verticalLineStyle, ...mediaQueryStyle }}></div>
        </div>
      </main>
    </div>
  );
};

export default ConquestSection;
