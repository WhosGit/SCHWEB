import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Button
} from '@mui/material';

const CallForPartners = () => {
  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        py: { xs: 3, sm: 4, md: 6 },
        px: { xs: 2, sm: 3 }
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 6 } }}>
        <Typography 
          variant="h1" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            color: 'primary.main',
            px: { xs: 1, sm: 2 }
          }}
        >
          Call for Surgeon Partners
        </Typography>

      </Box>

      {/* Main Call to Action */}
      <Paper 
        sx={{ 
          p: { xs: 3, sm: 4, md: 6 }, 
          mb: { xs: 4, sm: 5, md: 6 }, 
          backgroundColor: '#f8f9fa', 
          border: '2px solid #00274C',
          borderRadius: { xs: 2, sm: 3 }
        }}
      >
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          sx={{ 
            color: '#00274C', 
            fontWeight: 'bold',
            mb: { xs: 2.5, sm: 3 }
          }}
        >
          Are you a surgical educator who regularly performs laparoscopic cholecystectomies?
        </Typography>
        
        <Box sx={{ my: { xs: 3, sm: 4 } }}>
          <Typography 
            variant="h5" 
            gutterBottom
            sx={{
              mb: { xs: 2, sm: 2.5 },
              color: 'text.primary'
            }}
          >
            Have you ever wanted to capture key teaching moments during surgery—not just to complete the procedure, but to preserve what you taught and share it with future learners?
          </Typography>
          <Typography 
            variant="h5" 
            gutterBottom
            sx={{
              color: 'text.primary'
            }}
          >
            Would you like to explore eye-tracking technology to analyze your gaze and your resident's in real time?
          </Typography>
        </Box>

        {/* Image section */}
        <Box sx={{ 
          textAlign: 'center', 
          my: { xs: 4, sm: 5, md: 6 },
          p: { xs: 2, sm: 3 }
        }}>
          <img 
            src="/exampledashboard.jpg"
            alt="Surgical training eye-tracking technology"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
            }}
          />
        </Box>

        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2.5, sm: 3 }
          }}
        >
          We're seeking partners to pilot an AI-powered system that uses dual eye-tracking to automatically identify critical, teachable moments, supporting post-operative reflection, feedback, and education.
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 3, sm: 4 }, 
            fontStyle: 'italic',
            px: { xs: 1, sm: 2 }
          }}
        >
          If you perform laparoscopic procedures and train residents, you're an ideal collaborator.
        </Typography>

        <Typography 
          variant="h4" 
          sx={{ 
            color: '#00274C', 
            fontWeight: 'bold', 
            mb: { xs: 2.5, sm: 3 },
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          Join us in advancing surgical education—enhance learning, improve entrustability, and promote safer patient care.
        </Typography>

        <Box sx={{ textAlign: 'center', mt: { xs: 3, sm: 4 } }}>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              px: { xs: 4, sm: 5 }, 
              py: { xs: 1.5, sm: 2 }, 
              backgroundColor: '#FFCB05',
              color: '#00274C',
              fontWeight: 'bold',
              borderRadius: { xs: 2, sm: 3 },
              minWidth: { xs: '200px', sm: 'auto' },
              '&:hover': {
                backgroundColor: '#FFD52D'
              }
            }}
            href="https://forms.gle/QGKhSAixnC2VmRf98"
            target="_blank"
            rel="noopener noreferrer"
          >
            Express Interest
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CallForPartners;
