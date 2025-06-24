import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="sticky" sx={{ backgroundColor: '#00274C', top: 0, zIndex: 1100 }}>
    <Container maxWidth="lg">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img 
            src="/umich.png" 
            alt="University of Michigan" 
            style={{ 
              height: '81px', 
              width: 'auto'
            }}
          />
          <Typography variant="h6" component={Link} to="/" sx={{ 
            textDecoration: 'none', 
            color: 'inherit',
            fontWeight: 'bold',
            '&:hover': { opacity: 0.8 }
          }}>
            SCH
          </Typography>
        </Box>
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
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;