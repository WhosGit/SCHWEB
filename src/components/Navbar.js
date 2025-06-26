import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container, 
  IconButton, 
  Menu, 
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Our People', path: '/team' },
    { label: 'Our Research', path: '/project' },
    { label: 'Our News', path: '/news' },
    { label: 'Join Our Research', path: '/call-for-partners', isSpecial: true }
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#00274C', top: 0, zIndex: 1100 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 64, sm: 70 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
            <img 
              src="/umich.png" 
              alt="University of Michigan" 
              style={{ 
                height: isMobile ? '50px' : '70px', 
                width: 'auto'
              }}
            />
            <Typography 
              variant={isMobile ? "h6" : "h5"} 
              component={Link} 
              to="/" 
              sx={{ 
                textDecoration: 'none', 
                color: 'inherit',
                fontWeight: 'bold',
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                '&:hover': { opacity: 0.8 }
              }}
            >
              SCH
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
                sx={{ p: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    mt: 1,
                    minWidth: 200,
                    backgroundColor: '#00274C',
                    color: 'white'
                  }
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.path}
                    component={Link}
                    to={item.path}
                    onClick={handleClose}
                    sx={{
                      color: 'white',
                      backgroundColor: item.isSpecial ? '#FFCB05' : 'transparent',
                      fontWeight: item.isSpecial ? 'bold' : 'normal',
                      '&:hover': {
                        backgroundColor: item.isSpecial ? '#FFD52D' : 'rgba(255, 255, 255, 0.1)'
                      },
                      ...(item.isSpecial && {
                        color: '#00274C',
                        mx: 1,
                        borderRadius: 1,
                        my: 0.5
                      })
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button color="inherit" component={Link} to="/" sx={{ textTransform: 'none' }}>
                Home
              </Button>
              <Button color="inherit" component={Link} to="/team" sx={{ textTransform: 'none' }}>
                Our People
              </Button>
              <Button color="inherit" component={Link} to="/project" sx={{ textTransform: 'none' }}>
                Our Research
              </Button>
              <Button color="inherit" component={Link} to="/news" sx={{ textTransform: 'none' }}>
                Our News
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/call-for-partners" 
                sx={{ 
                  textTransform: 'none',
                  backgroundColor: '#FFCB05',
                  color: '#00274C',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#FFD52D'
                  }
                }}
              >
                Join Our Research
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;