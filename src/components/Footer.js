import { Box, Typography, Container, Grid, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ backgroundColor: '#263238', color: 'white', py: 4, mt: 'auto' }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Surgical Training Research Lab
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Computer Science and Engineering<br />
            University of Michigan - Ann Arbor<br />
            Bob and Betty Beyster Building<br />
            2260 Hayward Street<br />
            Ann Arbor, MI 48109-2121
          </Typography>
          <Typography variant="body2">
            Email: xwanghci@umich.edu<br />
            Phone: +1 (734) 763-2285
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="/" color="inherit" underline="hover">Home</Link>
            <Link href="/team" color="inherit" underline="hover">Our People</Link>
            <Link href="/project" color="inherit" underline="hover">Our Research</Link>
            <Link href="/news" color="inherit" underline="hover">Our News</Link>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ borderTop: '1px solid #424242', mt: 4, pt: 3, textAlign: 'center' }}>
        <Typography variant="body2" color="grey.400">
          © 2025 SCH | All Rights Reserved | 
          <Link href="#" color="inherit" underline="hover" sx={{ ml: 1 }}>Privacy Policy</Link> | 
          <Link href="#" color="inherit" underline="hover" sx={{ ml: 1 }}>Terms of Use</Link>
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
