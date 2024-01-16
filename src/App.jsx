import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import { useState } from 'react';
import Header1 from './Header';
import MinesSection from './components/MinesSection';
import  SoldiersSection  from './components/SoldiersSection';
import ConquestSection from './components/ConquestSection';
import ComingSoon from './components/Comingsoon';

const { Header, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          className='sidebar'
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
        >
          <Logo />
          <MenuList />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: '#001529', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Header1 collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
          </Header>
          <Routes>
            <Route path="/" element={<MinesSection />} />
            <Route path="/soldiers" element={<SoldiersSection />} />
            <Route path="/conquest" element={<ConquestSection />} />        
            <Route path="/mines" element={<ComingSoon />} />      
            <Route path="/soldiersm" element={<ComingSoon />} />                
          
          </Routes>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
