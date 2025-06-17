import { Box, Typography, Container } from '@mui/material';

const Banner = () => (
  <Box 
    sx={{ 
      height: '500px', 
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/image.png')`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}
  >
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', color: 'white' }}>
        <Typography variant="h2" component="h1" fontWeight="bold" mb={3}>
          Surgical Computing & Healthcare Research Institute
        </Typography>
        <Typography variant="h5" component="h2" mb={4} sx={{ opacity: 0.9 }}>
          Advancing Surgical Training Through Computational Innovation
        </Typography>
        <Typography variant="h6" component="p" sx={{ maxWidth: '800px', margin: '0 auto', opacity: 0.8 }}>
          We leverage advanced computational methods including eye-tracking, multimodal analysis, 
          and AI to enhance surgical training and improve patient outcomes through innovative 
          educational technologies.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Banner;
