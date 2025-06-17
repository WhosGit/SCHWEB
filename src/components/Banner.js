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
          Multimodal Surgical Training Research
        </Typography>
        <Typography variant="h5" component="h2" mb={4} sx={{ opacity: 0.9 }}>
          Enhancing Intra- and Post-operative Learning Between Attending and Resident Surgeons
        </Typography>
        <Typography variant="h6" component="p" sx={{ maxWidth: '900px', margin: '0 auto', opacity: 0.8 }}>
          NSF-funded research developing computational methods to model surgeon behaviors, 
          improve surgical training outcomes, and enhance coordination in the operating room 
          through multimodal analysis of gaze, conversation, and procedural data.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Banner;
