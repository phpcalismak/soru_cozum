import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AppHeader from './components/Header';
import AppContent from './components/Content';
import Footer from './components/Footer';
import AppSider from './components/Sider';
import { Layout } from 'antd';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <Router>
      <Routes>
        {/* Login ve Register için ayrı rotalar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Ana Tema içindeki rotalar */}
        <Route path="*" element={
          <Layout style={{ minHeight: '100vh' }}>
            <AppHeader />
            <Layout>
              <AppSider />
              <Layout style={{ padding: '0 24px 24px' }}>
                <AppContent /> {/* AppContent bileşeni içinde alt rotalar */}
                <Footer />
              </Layout>
            </Layout>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
