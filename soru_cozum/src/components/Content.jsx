import React from 'react';
import { Layout, theme } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TestPage from '../pages/TestPage';
import ResultPage from '../pages/ResultPage';
import Completed from '../pages/Completed';
import UnfinishedTests from '../pages/UnfinishedTests';
import Logout from '../pages/Logout';


const { Content } = Layout;

const AppContent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content style={{ padding: '0 24px', minHeight: 280 }}>
      <div
        style={{
          background: colorBgContainer,
          minHeight: 360,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test/:testCode" element={<TestPage />} />
          <Route path="/result/:testCode" element={<ResultPage />} />
          <Route path="/sonuclar" element={<Completed />} />
          <Route path="/testler" element={<UnfinishedTests />} />
          <Route path="/logout" element={<Logout />} />
          


          
        </Routes>
      </div>
    </Content>
  );
};

export default AppContent;
