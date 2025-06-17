import { Box, Typography, Container, Grid, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ backgroundColor: '#263238', color: 'white', py: 4, mt: 'auto' }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            SCH Research Institute
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            School of Computer Science<br />
            University Campus<br />
            Building 123, Room 456<br />
            City, State 12345
          </Typography>
          <Typography variant="body2">
            Email: contact@sch-institute.edu<br />
            Phone: +1 (555) 123-4567
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
            <Link href="/contact" color="inherit" underline="hover">Contact</Link>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ borderTop: '1px solid #424242', mt: 4, pt: 3, textAlign: 'center' }}>
        <Typography variant="body2" color="grey.400">
          © 2025 SCH Research Institute | All Rights Reserved | 
          <Link href="#" color="inherit" underline="hover" sx={{ ml: 1 }}>Privacy Policy</Link> | 
          <Link href="#" color="inherit" underline="hover" sx={{ ml: 1 }}>Terms of Use</Link>
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
