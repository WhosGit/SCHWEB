import { Grid, Card, CardContent, Typography, Container, Box, Button, useTheme, useMediaQuery } from '@mui/material';
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
  // { 
  //   title: "Collaborate with Us", 
  //   desc: "Join our mission to transform surgical training and improve patient safety through innovative technology.", 
  //   link: "/contact",
  //   icon: "🤝"
  // },
];

const CardSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 5, md: 6 }, px: { xs: 2, sm: 3 } }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5 } }}>
        <Typography 
          variant={isSmallMobile ? "h4" : isMobile ? "h3" : "h3"} 
          component="h2" 
          gutterBottom
          sx={{
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
            lineHeight: { xs: 1.2, sm: 1.3 },
            mb: { xs: 2, sm: 3 }
          }}
        >
          Learn more about us!
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          sx={{ 
            maxWidth: { xs: '100%', sm: '700px', md: '800px' }, 
            margin: '0 auto', 
            mb: { xs: 3, sm: 4 },
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            lineHeight: { xs: 1.5, sm: 1.6 },
            px: { xs: 1, sm: 2 }
          }}
        >
          Discover how we're using computational methods to revolutionize surgical training 
          and enhance patient outcomes through cutting-edge research and technology.
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 3, sm: 4 }}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                borderRadius: { xs: 2, sm: 3 },
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3
                }
              }}
            >
              <CardContent sx={{ 
                flexGrow: 1, 
                p: { xs: 2.5, sm: 3 },
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: { xs: 2, sm: 2.5 },
                  flexDirection: { xs: 'column', sm: 'row' },
                  textAlign: { xs: 'center', sm: 'left' },
                  gap: { xs: 1, sm: 0 }
                }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      mr: { xs: 0, sm: 2 },
                      fontSize: { xs: '2rem', sm: '2.5rem' }
                    }}
                  >
                    {item.icon}
                  </Typography>
                  <Typography 
                    variant={isSmallMobile ? "h6" : "h5"} 
                    component="h3" 
                    color="primary"
                    sx={{
                      fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                      lineHeight: { xs: 1.3, sm: 1.4 },
                      textAlign: { xs: 'center', sm: 'left' }
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  mb={{ xs: 2.5, sm: 3 }}
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                    lineHeight: { xs: 1.5, sm: 1.6 },
                    flexGrow: 1,
                    textAlign: { xs: 'center', sm: 'left' }
                  }}
                >
                  {item.desc}
                </Typography>
                <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                  <Button 
                    component={Link} 
                    to={item.link} 
                    variant="outlined" 
                    color="primary"
                    size={isSmallMobile ? "medium" : "large"}
                    sx={{
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      px: { xs: 2.5, sm: 3 },
                      py: { xs: 1, sm: 1.25 }
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardSection;
