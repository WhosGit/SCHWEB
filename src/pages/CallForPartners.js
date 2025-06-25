import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Button
} from '@mui/material';
// 删除了不再需要的图标导入

const CallForPartners = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Call for Surgeon Partners
        </Typography>

      </Box>

      {/* Main Call to Action */}
      <Paper sx={{ p: 6, mb: 6, backgroundColor: '#f8f9fa', border: '2px solid #00274C' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#00274C', fontWeight: 'bold' }}>
          Are you a surgical educator who regularly performs laparoscopic cholecystectomies?
        </Typography>
        
        <Box sx={{ my: 4 }}>
          <Typography variant="h6" gutterBottom>
            Have you ever wished to capture key moments in surgery for teaching or debriefing?
          </Typography>
          <Typography variant="h6" gutterBottom>
            Would you like to explore the power of eye-tracking technology to analyze both your gaze and your resident's during operations?
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
          We're seeking partners to pilot our AI-powered system that uses dual eye-tracking to record and analyze visual attention in real-time. Our platform automatically identifies critical, learnable moments to support post-operative reflection, feedback, and teaching.
        </Typography>

        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4, fontStyle: 'italic' }}>
          If you perform laparoscopic procedures and train residents, you're an ideal collaborator.
        </Typography>

        <Typography variant="h6" sx={{ color: '#00274C', fontWeight: 'bold', mb: 3 }}>
          Join us in advancing surgical education—enhance learning, improve entrustability, and promote safer patient care.
        </Typography>

        <Box sx={{ textAlign: 'center' }}>
          <Button 
            variant="contained" 
            size="large" 
            sx={{ 
              px: 4, 
              py: 2, 
              fontSize: '1.1rem',
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
            Express Interest
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CallForPartners;
