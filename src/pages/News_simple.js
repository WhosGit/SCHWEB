import { Container, Typography, Card, CardContent, Chip, Box, Button, Link } from '@mui/material';

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
    link: null
  },
  {
    title: "Surgment: Video-based Surgical Training Tool Presented at CHI 2024",
    date: "May 12, 2024",
    content: "PhD student Jingying Wang presented Surgment, our innovative video-based surgical training tool that automatically interprets and annotates surgery scenes to enhance learning experiences for resident surgeons.",
    category: "Research",
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
        News & Updates
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
        Latest developments from our surgical training research team.
      </Typography>
    </Box>

    {/* News List */}
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {newsItems.map((item, index) => (
        <Card key={index} sx={{
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateX(4px)',
            boxShadow: 3
          }
        }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h3" gutterBottom color="primary.main">
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
                  {item.content}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 3 }}>
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
                  {item.link && (
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      size="small"
                      component={Link}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>

    {/* Contact for More Information */}
    <Box sx={{ 
      textAlign: 'center', 
      mt: 6, 
      p: 4, 
      backgroundColor: 'grey.50', 
      borderRadius: 2 
    }}>
      <Typography variant="h5" gutterBottom color="primary.main">
        Stay Updated
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Follow our research progress and latest publications by visiting our team members' websites.
      </Typography>
    </Box>
  </Container>
);

export default News;
