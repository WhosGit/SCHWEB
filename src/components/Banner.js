import { Box, Typography, Container, Alert, Button } from '@mui/material';

const Banner = () => {
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
        <Container maxWidth="lg" sx={{ py: { xs: 1, sm: 0.5 } }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap', 
            gap: { xs: 1.5, sm: 1 },
            flexDirection: { xs: 'column', sm: 'row' },
            textAlign: { xs: 'center', sm: 'left' }
          }}>
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 0.5,
                  color: 'white'
                }}
              >
                🔬 Calling All Surgical Educators!
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'white',
                  opacity: 0.95
                }}
              >
                Join our pioneering research using AI-powered eye-tracking technology to enhance surgical training.
              </Typography>
            </Box>
            <Button 
              variant="contained"
              size="medium"
              sx={{ 
                backgroundColor: '#FFCB05', 
                color: '#00274C',
                fontWeight: 'bold',
                px: { xs: 2.5, sm: 3.5 },
                py: { xs: 1, sm: 1.5 },
                minWidth: { xs: '160px', sm: 'auto' },
                '&:hover': {
                  backgroundColor: '#FFD52D'
                }
              }}
              href="https://forms.gle/QGKhSAixnC2VmRf98"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up as a Partner
            </Button>
          </Box>
        </Container>
      </Alert>

      {/* Main Banner */}
      <Box 
        sx={{ 
          height: { xs: '400px', sm: '450px', md: '500px' }, 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/image.png')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          px: { xs: 2, sm: 3 }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography 
              variant="h1" 
              component="h1" 
              fontWeight="bold" 
              mb={2}
              sx={{
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Multimodal Surgical Training Research
            </Typography>
            <Typography 
              variant="h3" 
              component="h2" 
              mb={3} 
              sx={{ 
                opacity: 0.95,
                color: 'white',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                px: { xs: 1, sm: 2 }
              }}
            >
              Enhancing Intra- and Post-operative Learning Between Attending and Resident Surgeons
            </Typography>
            <Typography 
              variant="body1" 
              component="p" 
              sx={{ 
                maxWidth: { xs: '100%', sm: '700px', md: '800px' }, 
                margin: '0 auto', 
                opacity: 0.9,
                color: 'white',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                px: { xs: 1, sm: 2 }
              }}
            >
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
