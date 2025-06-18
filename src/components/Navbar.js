import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static" sx={{ backgroundColor: '#1565c0' }}>
    <Container maxWidth="lg">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component={Link} to="/" sx={{ 
          textDecoration: 'none', 
          color: 'inherit',
          fontWeight: 'bold',
          '&:hover': { opacity: 0.8 }
        }}>
          SCH
        </Typography>
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
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;