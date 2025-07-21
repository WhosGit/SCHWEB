import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import Team from './pages/Team';
import Project from './pages/Project';
import News from './pages/News';
import CallForPartners from './pages/CallForPartners';

// Create Material-UI theme - University of Michigan colors with unified typography
const theme = createTheme({
  palette: {
    primary: {
      main: '#00274C', // University of Michigan navy blue
      light: '#154B7A',
      dark: '#001F3A',
    },
    secondary: {
      main: '#FFCB05', // University of Michigan maize yellow
      light: '#FFD52D',
      dark: '#E6B800',
    },
  },
  typography: {
    // Main titles (Page headers)
    h1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      '@media (max-width:960px)': {
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    // Section titles
    h2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
      '@media (max-width:960px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    // Subsection titles
    h3: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.3,
      '@media (max-width:960px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    // Card/component titles
    h4: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      '@media (max-width:960px)': {
        fontSize: '1.25rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
    // Small titles and names
    h5: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      '@media (max-width:960px)': {
        fontSize: '1.1rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    // Labels and subtitles
    h6: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '1.1rem',
      lineHeight: 1.5,
      '@media (max-width:960px)': {
        fontSize: '1rem',
      },
      '@media (max-width:600px)': {
        fontSize: '0.95rem',
      },
    },
    // Main body text
    body1: {
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.6,
      '@media (max-width:960px)': {
        fontSize: '0.95rem',
        lineHeight: 1.5,
      },
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
        lineHeight: 1.5,
      },
    },
    // Secondary text and captions
    body2: {
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      '@media (max-width:960px)': {
        fontSize: '0.8rem',
      },
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
    },
    // Buttons
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '0.95rem',
      textTransform: 'none',
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
  },
  // Responsive spacing and breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 8, // Base spacing unit
});

// Main App component
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
