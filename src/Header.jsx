import { Button } from 'antd';
import collectwallet from './assets/collectwallet.png';
import LogoFull from './assets/Logo-Full.png';
import LogoCorto from './assets/Logo-Corto.png';
import './Header.css';

// eslint-disable-next-line react/prop-types
const Header1 = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
        <img
          src={LogoCorto}
          alt="Logo 1"
          style={{
            marginRight: '-10px',
            height: '90px',
            verticalAlign: 'middle',
            marginTop: '15px',
          }}
          className="show-on-mobile"
        />
        <img
          src={LogoFull}
          alt="Logo 2"
          style={{
            marginRight: '5px',
            height: '120px',
            verticalAlign: 'middle',
            marginTop: '15px',
          }}
          className="hide-on-mobile"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          type="text"
          style={{
            color: 'rgba(255, 255, 255, 0.65)',
            border: '3px solid rgba(255, 255, 255, 0.65)',
            borderRadius: '12px',
            padding: '20px 10px',
            display: 'flex',
            alignItems: 'center',
            marginTop: '15px',
            fontWeight: 'bold',
          }}
        >
          <img
            src={collectwallet}
            alt="Metamask Logo"
            style={{ marginRight: '5px', height: '30px', verticalAlign: 'middle' }}
          />
          Connect Wallet
        </Button>
      </div>
    </>
  );
};

export default Header1;
