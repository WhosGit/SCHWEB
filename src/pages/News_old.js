import { Container, Typography, Card, CardContent, Chip, Box, Button, Link } from '@mui/material';

const newsItems = [
  {
    title: "Excited to receive an NSF award: \"SCH: Multimodal Techniques to Enhance Intra- and Post-operative Learning and Coordination between Attending and Resident Surgeons\"!",
    date: "September 20, 2024",
    content: "We are thrilled to announce that our research team has received a $1.2 million NSF grant to support our groundbreaking work on surgical training enhancement. This project leverages advanced computational methods including eye-tracking, audio analysis, and computer vision to assess and improve surgical training outcomes.",
    category: "Funding",
    featured: true,
    link: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2406218&HistoricalAwards=false"
  },
  {
    title: "CHI 2024: Best Paper Honorable Mention for Surgical Training Research",
    date: "May 15, 2024",
    content: "Our research on evaluating surgeons' visual needs during surgery received a Best Paper Honorable Mention Award at CHI 2024, highlighting the importance of our work in understanding human factors in surgical environments.",
    category: "Recognition",
    featured: false,
    link: null
  },
  {
    title: "Surgment: Video-based Surgical Training Tool Presented at CHI 2024",
    date: "May 12, 2024",
    content: "PhD student Jingying Wang presented Surgment, our innovative video-based surgical training tool that automatically interprets and annotates surgery scenes to enhance learning experiences for resident surgeons.",
    category: "Research",
    featured: false,
    link: null
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

const News = () => (
  <Container maxWidth="lg" sx={{ py: 6 }}>
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Latest News & Updates
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
        Stay informed about the latest developments, achievements, and milestones 
        from our research institute and team members.
      </Typography>
    </Box>

    {/* Featured News */}
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Featured Stories
      </Typography>
      <Grid container spacing={4}>
        {newsItems.filter(item => item.featured).map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}>
              <Box sx={{ 
                height: 200, 
                backgroundColor: 'grey.200',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
                                linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
                                linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
                                linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
              }}>
                <Typography variant="body2" color="text.secondary">
                  Featured Image
                </Typography>
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Chip 
                    label={item.category} 
                    color={getCategoryColor(item.category)} 
                    size="small" 
                  />
                  <Typography variant="body2" color="text.secondary">
                    {item.date}
                  </Typography>
                </Box>
                <Typography variant="h5" component="h2" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {item.content}
                </Typography>
                <Button variant="outlined" color="primary">
                  Read Full Story
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* All News */}
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Recent Updates
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {newsItems.filter(item => !item.featured).map((item, index) => (
          <Card key={index} sx={{
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'translateX(4px)',
              boxShadow: 2
            }
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {item.content}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Chip 
                      label={item.category} 
                      color={getCategoryColor(item.category)} 
                      size="small" 
                    />
                    <Typography variant="body2" color="text.secondary">
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>

    <Box sx={{ textAlign: 'center', mt: 6 }}>
      <Button variant="contained" color="primary" size="large">
        View All News Archives
      </Button>
    </Box>
  </Container>
);

export default News;