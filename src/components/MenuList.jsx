import {Menu} from 'antd'
import {SketchOutlined, AimOutlined,FireOutlined,ShoppingCartOutlined,CopyOutlined,PhoneOutlined,SmallDashOutlined} from '@ant-design/icons'
import { NavLink} from 'react-router-dom';
import CustomPancakeSwapIcon from './CustomPancakeSwapIcon';
import CustomPooCoinIcon from './CustomPooCoinIcon';

const MenuList = () => {
    const containerStyle = {
      backgroundColor: '#001529', // Fondo oscuro
      minHeight: '100vh', // Ajusta la altura según tus necesidades
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch', // Alinea los elementos al estiramiento
      color: 'rgba(255, 255, 255, 0.85)', // Color del texto
    };
  
    return (
        <div style={containerStyle}>

    <Menu theme='dark' mode='inline' className='menu-bar'>
    <Menu.Item key="title1" disabled icon={<SmallDashOutlined/>}>
    <span style={{ color: 'rgba(255, 255, 255, 0.65)', paddingLeft: '5px' }}>Main Game</span>
      </Menu.Item>


    <Menu.Item key="Mines1" icon={<SketchOutlined/>}>
    <NavLink to="/">Mines</NavLink>
    </Menu.Item>
    <Menu.Item key="Soldiers" icon={<AimOutlined/>}>
    <NavLink to="/soldiers">Soldiers</NavLink>
    </Menu.Item>
    <Menu.Item key="Conquest" icon={<FireOutlined/>}>
    <NavLink to="/conquest">Conquest</NavLink>
    </Menu.Item>
    <Menu.SubMenu key='marketplace' icon={<ShoppingCartOutlined/>} title='Marketplace'> 

    <Menu.Item key="Mines2" icon={<ShoppingCartOutlined/>}>
    <NavLink to="/mines">Mines</NavLink>
    </Menu.Item>
    <Menu.Item key="Soldiers2" icon={<ShoppingCartOutlined/>}>
    <NavLink to="/soldiersm">Soldiers</NavLink>
    </Menu.Item>

    </Menu.SubMenu>

    <Menu.SubMenu key='getvalta' icon={<ShoppingCartOutlined/>} title='Get $VALTA'> 

<Menu.Item key="PancakeSwap" icon={<CustomPancakeSwapIcon/>}>
    PancakeSwap
</Menu.Item>
<Menu.Item key="PooCoin" icon={<CustomPooCoinIcon/>}>
    PooCoin
</Menu.Item>

</Menu.SubMenu>
<Menu.Item key="title2" disabled icon={<SmallDashOutlined/>}>
    <span style={{ color: 'rgba(255, 255, 255, 0.65)', paddingLeft: '5px' }}>Learn how to play</span>
      </Menu.Item>
      <Menu.Item key="wp" icon={<CopyOutlined/>}>
        <NavLink to="https://minermoon.gitbook.io/minermoon/">WhitePaper</NavLink>
        
    </Menu.Item>
    <Menu.Item key="wpespanol" icon={<CopyOutlined/>}>
        Whitepaper español
    </Menu.Item>
    <Menu.Item key="Telegram" icon={<PhoneOutlined/>}>
        Telegram
    </Menu.Item>

    </Menu>
    </div>
  )
}

export default MenuList