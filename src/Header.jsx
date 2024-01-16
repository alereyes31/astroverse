// Header1.js
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import vartaLogo from './assets/varta.png';
import metamaskLogo from './assets/metamask.png';

// eslint-disable-next-line react/prop-types
const Header1 = ({ collapsed, toggleCollapsed }) => {
  return (
    <>
      <div>
        <Button
          type="text"
          style={{ color: 'rgba(255, 255, 255, 0.65)' }}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapsed}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button type="text" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
          <img src={vartaLogo} alt="Varta Logo" style={{ marginRight: '5px', height: '20px', verticalAlign: 'middle' }} />
          Claim 0 VARTA
        </Button>
        <Button type="text" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
          <img src={metamaskLogo} alt="Metamask Logo" style={{ marginRight: '5px', height: '20px', verticalAlign: 'middle' }} />
          Connect Wallet
        </Button>
      </div>
    </>
  );
};

export default Header1;
