import { Box, Typography, Container, Grid, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ backgroundColor: '#263238', color: 'white', py: 1, mt: 'auto' }}>
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '0.85rem', fontWeight: 'bold' }}>
            Surgical Training Research Lab
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.7rem' }}>
            Computer Science and Engineering<br />
            University of Michigan - Ann Arbor<br />
            Bob and Betty Beyster Building<br />
            2260 Hayward Street<br />
            Ann Arbor, MI 48109-2121
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>
            Email: xwanghci@umich.edu<br />
            Phone: +1 (734) 763-2285
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box>
            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '0.85rem', fontWeight: 'bold', textAlign: 'right' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25, alignItems: 'flex-end' }}>
              <Link href="/" color="inherit" underline="hover" sx={{ fontSize: '0.7rem' }}>Home</Link>
              <Link href="/team" color="inherit" underline="hover" sx={{ fontSize: '0.7rem' }}>Our People</Link>
              <Link href="/project" color="inherit" underline="hover" sx={{ fontSize: '0.7rem' }}>Our Research</Link>
              <Link href="/news" color="inherit" underline="hover" sx={{ fontSize: '0.7rem' }}>Our News</Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ borderTop: '1px solid #424242', mt: 1, pt: 1, textAlign: 'center' }}>
        <Typography variant="body2" color="grey.400" sx={{ fontSize: '0.65rem' }}>
          © 2025 SCH-umich | All Rights Reserved | 
          <Link href="#" color="inherit" underline="hover" sx={{ ml: 1, fontSize: '0.65rem' }}>Privacy Policy</Link> | 
          <Link href="#" color="inherit" underline="hover" sx={{ ml: 1, fontSize: '0.65rem' }}>Terms of Use</Link>
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
