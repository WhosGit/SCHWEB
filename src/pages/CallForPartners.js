import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
// 删除了不再需要的图标导入

const CallForPartners = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          variant={isSmallMobile ? "h4" : isMobile ? "h3" : "h2"} 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            color: 'primary.main',
            px: { xs: 1, sm: 2 },
            lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 }
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
          variant={isSmallMobile ? "h5" : isMobile ? "h4" : "h4"} 
          component="h2" 
          gutterBottom 
          sx={{ 
            color: '#00274C', 
            fontWeight: 'bold',
            lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' }
          }}
        >
          Are you a surgical educator who regularly performs laparoscopic cholecystectomies?
        </Typography>
        
        <Box sx={{ my: { xs: 3, sm: 4 } }}>
          <Typography 
            variant="h6" 
            gutterBottom
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: { xs: 1.4, sm: 1.5 },
              mb: { xs: 2, sm: 2.5 }
            }}
          >
            Have you ever wished to capture key moments in surgery for teaching or debriefing?
          </Typography>
          <Typography 
            variant="h6" 
            gutterBottom
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: { xs: 1.4, sm: 1.5 }
            }}
          >
            Would you like to explore the power of eye-tracking technology to analyze both your gaze and your resident's during operations?
          </Typography>
        </Box>

        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' }, 
            lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 }, 
            mb: { xs: 2.5, sm: 3 }
          }}
        >
          We're seeking partners to pilot our AI-powered system that uses dual eye-tracking to record and analyze visual attention in real-time. Our platform automatically identifies critical, learnable moments to support post-operative reflection, feedback, and teaching.
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' }, 
            lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 }, 
            mb: { xs: 3, sm: 4 }, 
            fontStyle: 'italic',
            px: { xs: 1, sm: 2 }
          }}
        >
          If you perform laparoscopic procedures and train residents, you're an ideal collaborator.
        </Typography>

        <Typography 
          variant="h6" 
          sx={{ 
            color: '#00274C', 
            fontWeight: 'bold', 
            mb: { xs: 2.5, sm: 3 },
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            lineHeight: { xs: 1.4, sm: 1.5 },
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          Join us in advancing surgical education—enhance learning, improve entrustability, and promote safer patient care.
        </Typography>

        <Box sx={{ textAlign: 'center', mt: { xs: 3, sm: 4 } }}>
          <Button 
            variant="contained" 
            size={isMobile ? "medium" : "large"}
            sx={{ 
              px: { xs: 3, sm: 4 }, 
              py: { xs: 1.5, sm: 2 }, 
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
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
