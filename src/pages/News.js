import { Container, Typography, Card, CardContent, Chip, Box, Link, useTheme, useMediaQuery } from '@mui/material';

const newsItems = [
  {
    title: "Excited to receive an NSF award: \"SCH: Multimodal Techniques to Enhance Intra- and Post-operative Learning and Coordination between Attending and Resident Surgeons\"!",
    date: "September 20, 2024",
    content: "We are thrilled to announce that our research team has received a $1.2 million NSF grant to support our groundbreaking work on surgical training enhancement. This project leverages advanced computational methods including eye-tracking, audio analysis, and computer vision to assess and improve surgical training outcomes.",
    category: "Funding",
    link: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2406218&HistoricalAwards=false"
  },
  {
    title: "CHI 2024: Best Paper Honorable Mention for Surgical Training Research",
    date: "May 15, 2024",
    content: "Our research on evaluating surgeons' visual needs during surgery received a Best Paper Honorable Mention Award at CHI 2024, highlighting the importance of our work in understanding human factors in surgical environments.",
    category: "Recognition",
    link: "https://cse.engin.umich.edu/stories/11-papers-by-cse-researchers-presented-at-chi-2024"
  },
  {
    title: "Surgment: Video-based Surgical Training Tool Presented at CHI 2024",
    date: "May 12, 2024",
    content: "PhD student Jingying Wang presented Surgment, our innovative video-based surgical training tool that automatically interprets and annotates surgery scenes to enhance learning experiences for resident surgeons.",
    category: "Research",
    link: "https://cse.engin.umich.edu/stories/leveraging-ai-to-improve-video-based-surgical-learning"
  }
];

const getCategoryColor = (category) => {
  const colors = {
    "Funding": "success",
    "Recognition": "primary", 
    "Research": "info",
    "Publication": "secondary"
  };
  return colors[category] || "default";
};

const News = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4, md: 6 } }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 6 } }}>
        <Typography 
          variant={isSmallMobile ? "h4" : isMobile ? "h3" : "h3"} 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            fontSize: { xs: '1.75rem', sm: '2.125rem', md: '3rem' }
          }}
        >
          News & Updates
        </Typography>
      </Box>

      {/* News List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, sm: 4 } }}>
        {newsItems.map((item, index) => (
          <Card 
            key={index} 
            component={Link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 6
              }
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
              <Typography 
                variant={isSmallMobile ? "h6" : isMobile ? "h5" : "h5"} 
                component="h3" 
                gutterBottom 
                color="primary.main"
                sx={{
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                  lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                  mb: { xs: 1.5, sm: 2, md: 2 },
                  fontWeight: 'bold'
                }}
              >
                {item.title}
              </Typography>
              <Typography 
                variant={isSmallMobile ? "body2" : "body1"} 
                color="text.secondary" 
                paragraph 
                sx={{ 
                  lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1rem' },
                  mb: { xs: 2, sm: 2.5, md: 3 }
                }}
              >
                {item.content}
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 1, sm: 2 }, 
                mt: 2,
                alignItems: { xs: 'flex-start', sm: 'center' }
              }}>
                <Chip 
                  label={item.category} 
                  color={getCategoryColor(item.category)} 
                  size={isSmallMobile ? "small" : "small"}
                  sx={{
                    fontSize: { xs: '0.7rem', sm: '0.75rem' }
                  }}
                />
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.75rem', sm: '0.875rem' }
                  }}
                >
                  {item.date}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default News;
