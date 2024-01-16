
import bg from '../assets/pruebabg.gif';

const MinesSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover', // o 'contain' dependiendo de tus preferencias
    backgroundRepeat: 'no-repeat',    minHeight: '100%',

  };



  const messageStyle = {
    textAlign: 'center',
    margin: '0.5rem 0',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    marginTop: '11rem',
    fontSize: '5rem',
  };




    return (
      <div style={sectionStyle}>

            <main className="grid col-4 med-col-2 peq-col-1">


      <div style={messageStyle}>
        <p>Coming Soon</p>
      </div>


      </main>
      </div>

  );
};

export default MinesSection;

