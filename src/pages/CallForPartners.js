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
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto', mb: 4 }}>
          Join us in revolutionizing surgical education through AI-powered eye-tracking technology
        </Typography>
      </Box>

      {/* Main Call to Action */}
      <Paper sx={{ p: 6, mb: 6, backgroundColor: '#f8f9fa', border: '2px solid #00274C' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#00274C', fontWeight: 'bold' }}>
          Are you a surgical educator who regularly performs laparoscopic cholecystectomies?
        </Typography>
        
        <Box sx={{ my: 4 }}>
          <Typography variant="h6" gutterBottom>
            Have you ever wanted to capture key moments during an operation for debriefing or teaching?
          </Typography>
          <Typography variant="h6" gutterBottom>
            Do you want to try using eye-trackers to capture both yours and your resident's gaze during an operation?
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
          We're looking for partners to pilot our AI-powered system that uses eye-tracking technology to record and analyze both your gaze and your resident's during surgery. Our platform identifies critical, learnable moments to support post-operative reflection and teaching.
        </Typography>

        <Typography variant="h6" sx={{ color: '#00274C', fontWeight: 'bold', mb: 3 }}>
          Join us in advancing surgical education—enhance your trainees' learning, improve entrustability, and ultimately, support safer patient care.
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
