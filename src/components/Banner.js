import { Box, Typography, Container, Alert, Button, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
            gap: { xs: 2, sm: 1.5 },
            flexDirection: { xs: 'column', sm: 'row' },
            textAlign: { xs: 'center', sm: 'left' }
          }}>
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 0.5,
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
                🔬 Calling All Surgical Educators!
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  lineHeight: { xs: 1.4, sm: 1.5 }
                }}
              >
                Join our pioneering research using AI-powered eye-tracking technology to enhance surgical training.
              </Typography>
            </Box>
            <Button 
              variant="contained"
              size={isSmallMobile ? "small" : "medium"}
              sx={{ 
                backgroundColor: '#FFCB05', 
                color: '#00274C',
                fontWeight: 'bold',
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                px: { xs: 2, sm: 3 },
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
              variant={isSmallMobile ? "h4" : isMobile ? "h3" : "h2"} 
              component="h1" 
              fontWeight="bold" 
              mb={{ xs: 2, sm: 3 }}
              sx={{
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.75rem' },
                lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 }
              }}
            >
              Multimodal Surgical Training Research
            </Typography>
            <Typography 
              variant={isSmallMobile ? "h6" : isMobile ? "h5" : "h5"} 
              component="h2" 
              mb={{ xs: 3, sm: 4 }} 
              sx={{ 
                opacity: 0.9,
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                px: { xs: 1, sm: 2 }
              }}
            >
              Enhancing Intra- and Post-operative Learning Between Attending and Resident Surgeons
            </Typography>
            <Typography 
              variant="h6" 
              component="p" 
              sx={{ 
                maxWidth: { xs: '100%', sm: '800px', md: '900px' }, 
                margin: '0 auto', 
                opacity: 0.8,
                fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.25rem' },
                lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
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
