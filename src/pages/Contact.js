import { Container, Typography, Grid, Paper, TextField, Button, Box, Divider } from '@mui/material';

const contactInfo = [
  {
    icon: "📍",
    title: "Mailing Address",
    details: [
      "Computer Science and Engineering",
      "University of Michigan - Ann Arbor", 
      "Bob and Betty Beyster Building",
      "2260 Hayward Street, Ann Arbor, MI 48109-2121",
      "United States"
    ]
  },
  {
    icon: "📞",
    title: "Phone & Fax",
    details: [
      "Primary: +1 (734) 763-2285",
      "Department Main: +1 (734) 764-8000", 
      "Fax: +1 (734) 763-1260"
    ]
  },
  {
    icon: "✉️",
    title: "Email Contacts",
    details: [
      "Principal Investigator: xwanghci@umich.edu",
      "General Inquiries: info-cse@umich.edu",
      "Media Relations: engin-comm@umich.edu"
    ]
  },
  {
    icon: "🕒",
    title: "Office Hours", 
    details: [
      "Monday - Friday: 9:00 AM - 5:00 PM",
      "Saturday: By Appointment",
      "Sunday: Closed",
      "Holiday Hours: By Appointment"
    ]
  }
];

const Contact = () => (
  <Container maxWidth="lg" sx={{ py: 6 }}>
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
        Get in touch with our research team for collaborations, inquiries, 
        or to learn more about our ongoing projects and initiatives.
      </Typography>
    </Box>

    <Grid container spacing={6}>
      {/* Contact Information */}
      <Grid item xs={12} md={8}>
        <Grid container spacing={4}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ mr: 1 }}>
                    {info.icon}
                  </Typography>
                  <Typography variant="h6">
                    {info.title}
                  </Typography>
                </Box>
                <Box>
                  {info.details.map((detail, detailIndex) => (
                    <Typography 
                      key={detailIndex} 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ mb: 0.5 }}
                    >
                      {detail}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Directions & Parking
            </Typography>
            <Typography variant="body1" paragraph>
              Our institute is located in the heart of the university campus. 
              Visitor parking is available in the nearby structures with hourly 
              and daily rates. Public transportation options include campus shuttle 
              services and city bus routes.
            </Typography>
            <Button variant="outlined" color="primary">
              View Campus Map
            </Button>
          </Paper>
        </Box>
      </Grid>

      {/* Contact Form */}
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 4, position: 'sticky', top: 20 }}>
          <Typography variant="h5" gutterBottom>
            Send Us a Message
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Have a question or interested in collaboration? 
            Fill out the form below and we'll get back to you.
          </Typography>
          
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Institution/Organization"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={5}
              variant="outlined"
              required
              placeholder="Please describe your inquiry or collaboration interest..."
            />
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            Quick Response
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We typically respond to all inquiries within 1-2 business days. 
            For urgent matters, please call our main office directly.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
);

export default Contact;