import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { useState } from 'react';
import Header1 from './Header';
import MinesSection from './components/MinesSection';
import bg from './assets/bg.jpg';


const { Header } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>

        <Layout>
          <Header style={{
            padding: 20,
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Header1 collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
          </Header>
          <Routes>
            <Route path="/" element={<MinesSection />} />
          </Routes>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

