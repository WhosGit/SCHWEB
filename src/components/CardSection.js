import { Grid, Card, CardContent, Typography, Container, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const items = [
  { 
    title: "NSF-Funded Surgical Training Research", 
    desc: "Our $1.2M NSF grant supports multimodal techniques to enhance surgical training through computational methods and AI.", 
    link: "/project",
    icon: "🏥"
  },
  { 
    title: "Our Research Team", 
    desc: "Meet our interdisciplinary team of computer scientists and medical professionals revolutionizing surgical education.", 
    link: "/team",
    icon: "👥"
  },
  { 
    title: "Latest Breakthroughs", 
    desc: "Stay updated on our CHI 2024 award-winning research and latest developments in surgical computing.", 
    link: "/news",
    icon: "📰"
  },
  { 
    title: "Collaborate with Us", 
    desc: "Join our mission to transform surgical training and improve patient safety through innovative technology.", 
    link: "/contact",
    icon: "🤝"
  },
];

const CardSection = () => (
  <Container maxWidth="lg" sx={{ py: 6 }}>
    <Box sx={{ textAlign: 'center', mb: 5 }}>
      <Typography variant="h3" component="h2" gutterBottom>
        Learn more about us!
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto', mb: 4 }}>
        Discover how we're using computational methods to revolutionize surgical training 
        and enhance patient outcomes through cutting-edge research and technology.
      </Typography>
    </Box>
    <Grid container spacing={4}>
      {items.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card 
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 3
              }
            }}
          >
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h4" sx={{ mr: 2 }}>
                  {item.icon}
                </Typography>
                <Typography variant="h5" component="h3" color="primary">
                  {item.title}
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" mb={3}>
                {item.desc}
              </Typography>
              <Button 
                component={Link} 
                to={item.link} 
                variant="outlined" 
                color="primary"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default CardSection;
