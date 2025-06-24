import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 导入组件
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 导入页面
import Home from './pages/Home';
import Team from './pages/Team';
import Project from './pages/Project';
import News from './pages/News';
import CallForPartners from './pages/CallForPartners';

// 创建Material-UI主题 - 密歇根大学配色
const theme = createTheme({
  palette: {
    primary: {
      main: '#00274C', // 密歇根大学深蓝
      light: '#154B7A',
      dark: '#001F3A',
    },
    secondary: {
      main: '#FFCB05', // 密歇根大学黄色
      light: '#FFD52D',
      dark: '#E6B800',
    },
  },
});

// 主应用组件
const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/project" element={<Project />} />
            <Route path="/news" element={<News />} />
            <Route path="/call-for-partners" element={<CallForPartners />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </ThemeProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
