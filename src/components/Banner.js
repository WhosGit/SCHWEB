import { Box, Typography, Container, Alert, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Call for Partners Alert */}
      <Alert 
        severity="info" 
        sx={{ 
          borderRadius: 0,
          backgroundColor: '#4A90E2',
          color: 'white',
          '& .MuiAlert-icon': {
            color: 'white'
          },
          '& .MuiAlert-message': {
            width: '100%'
          }
        }}
      >
        <Container maxWidth="lg" sx={{ py: 0.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1.5 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                🔬 Calling All Surgical Educators!
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                Join our pioneering research using AI-powered eye-tracking technology to enhance surgical training.
              </Typography>
            </Box>
            <Button 
              variant="contained"
              size="small"
              sx={{ 
                backgroundColor: '#FFCB05', 
                color: '#00274C',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#FFD52D'
                }
              }}
              href="https://forms.gle/QGKhSAixnC2VmRf98"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Alert>

      {/* Main Banner */}
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
    </>
  );
};

export default Banner;
