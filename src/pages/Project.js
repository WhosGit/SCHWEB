import { Container, Typography, Grid, Paper, Box, Chip, Button, Link, useTheme, useMediaQuery } from '@mui/material';

const projectOverview = {
  title: "Multimodal Techniques to Enhance Intra- and Post-operative Learning and Coordination between Attending and Resident Surgeons",
  awardNumber: "NSF Award #2406218",
  funding: "$1,200,000",
  duration: "September 1, 2024 - August 31, 2028",
  program: "Smart and Connected Health (SCH)",
  description: "The overarching goal of this project is to improve surgical training experiences and outcomes in the operating room by computationally modeling attending and resident surgeons' intraoperative behaviors. By modeling surgeons' individual and interpersonal behaviors, we aim to enable automated inference and formative assessment of resident surgeons' technical competence, attending surgeons' instruction quality, and the degree to which residents gain operational independence."
};

const researchThrusts = [
  {
    thrust: "Thrust 1",
    title: "Multimodal Data Collection and Curation",
    description: "Collecting and curating a comprehensive dataset of up to 100 laparoscopic cholecystectomy surgeries with three streams of multimodal data.",
    components: [
      "Surgeons' gaze tracking during procedures",
      "Operating room conversations and communication patterns", 
      "Laparoscopic camera video feed analysis",
      "Behavioral annotation and data preprocessing"
    ],
    outcomes: ["Comprehensive surgical behavior dataset", "Standardized data collection protocols", "Multimodal data integration framework"]
  },
  {
    thrust: "Thrust 2", 
    title: "Multimodal Behavioral Modeling",
    description: "Developing and evaluating computational approaches to predict surgeons' intraoperative behaviors using advanced machine learning techniques.",
    components: [
      "Scene segmentation pipeline for surgery interpretation",
      "Semantic gaze analysis (e.g., 'resident looking at gallbladder')",
      "Multimodal neural network architecture",
      "Technical procedure prediction models",
      "Communication and coordination behavior analysis"
    ],
    outcomes: ["Automated surgeon behavior prediction", "Technical competence assessment", "Real-time coordination analysis"]
  },
  {
    thrust: "Thrust 3",
    title: "Post-operative Debriefing Dashboard",
    description: "Creating interactive systems for surgeons to review critical moments and receive instructional feedback after procedures.",
    components: [
      "Co-design process with attending and resident surgeons",
      "Interactive visualization of surgery moments",
      "Critical event highlighting and annotation",
      "Performance feedback integration",
      "Controlled experimental evaluation"
    ],
    outcomes: ["Enhanced post-operative learning", "Improved feedback mechanisms", "Evidence-based training improvements"]
  },
  {
    thrust: "Thrust 4",
    title: "Augmented Reality Intraoperative Visualizations", 
    description: "Developing and evaluating AR-based real-time visualizations to enhance coordination and instruction during surgery.",
    components: [
      "Real-time AR overlay development",
      "Intraoperative guidance systems",
      "Enhanced coordination visualizations",
      "Instruction quality enhancement tools",
      "Clinical validation and testing"
    ],
    outcomes: ["Real-time surgical guidance", "Enhanced coordination", "Improved instruction delivery"]
  }
];

const Project = () => {
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
          fontSize: { xs: '1.75rem', sm: '2.125rem', md: '3rem' },
          fontWeight: 'bold'
        }}
      >
        Our Research
      </Typography>
      {/* <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '900px', margin: '0 auto' }}>
        Developing computational methods to enhance surgical training 
        and improve patient outcomes through multimodal behavioral analysis.
      </Typography> */}
    </Box>

    {/* Project Overview */}
    <Paper sx={{ 
      p: { xs: 2, sm: 3, md: 4 }, 
      mb: 6, 
      backgroundColor: '#f8f9fa' 
    }}>
      <Typography 
        variant={isSmallMobile ? "h5" : isMobile ? "h4" : "h4"} 
        component="h2" 
        gutterBottom 
        color="primary.main"
        sx={{
          fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
          lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
          mb: { xs: 2, sm: 2.5, md: 3 }
        }}
      >
        {projectOverview.title}
      </Typography>
      
      <Typography 
        variant={isSmallMobile ? "body2" : "body1"} 
        sx={{ 
          lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 }, 
          mb: { xs: 2, sm: 2.5, md: 3 },
          fontSize: { xs: '0.875rem', sm: '1rem', md: '1rem' }
        }}
      >
        {projectOverview.description}
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        flexWrap: 'wrap', 
        gap: { xs: 0.5, sm: 1 }, 
        alignItems: { xs: 'flex-start', sm: 'center' }
      }}>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
        >
          Supported by: 
        </Typography>
        <Link 
          href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2406218&HistoricalAwards=false"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            textDecoration: 'none', 
            color: 'primary.main',
            fontSize: { xs: '0.75rem', sm: '0.875rem' }
          }}
        >
          {projectOverview.awardNumber}
        </Link>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            mt: { xs: 0.5, sm: 0 }
          }}
        >
          • {projectOverview.program} • {projectOverview.duration}
        </Typography>
      </Box>
    </Paper>

    {/* Research Thrusts - Currently Hidden */}
    {/* 
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
        Research Thrusts
      </Typography>
      <Grid container spacing={4}>
        {researchThrusts.map((thrust, index) => (
          <Grid item xs={12} key={index}>
            <Paper sx={{ p: 4, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Chip 
                  label={thrust.thrust} 
                  color="primary" 
                  sx={{ mr: 2, fontWeight: 'bold' }}
                />
                <Typography variant="h5" component="h3" color="primary.main">
                  {thrust.title}
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                {thrust.description}
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Typography variant="h6" gutterBottom>
                    Key Components:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                    {thrust.components.map((component, compIndex) => (
                      <Typography component="li" variant="body2" key={compIndex} sx={{ mb: 0.5 }}>
                        {component}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom>
                    Expected Outcomes:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                    {thrust.outcomes.map((outcome, outIndex) => (
                      <Typography component="li" variant="body2" key={outIndex} sx={{ mb: 0.5, color: 'success.main' }}>
                        {outcome}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
    */}

    {/* Publications */}
    <Box sx={{ mb: 6 }}>
      <Typography 
        variant={isSmallMobile ? "h5" : isMobile ? "h4" : "h4"} 
        component="h2" 
        gutterBottom 
        sx={{ 
          mb: { xs: 3, sm: 4 }, 
          color: 'primary.main',
          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
          textAlign: 'center'
        }}
      >
        Key Publications
      </Typography>
      <Grid container spacing={4}>
        {/* Paper 1 - CHI 2025 (Most Recent) */}
        <Grid item xs={12}>
          <Box sx={{ p: { xs: 2, sm: 3 }, mb: 4 }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 4 }, 
              alignItems: { xs: 'center', md: 'flex-start' }
            }}>
              <Box sx={{ 
                flexShrink: 0,
                textAlign: { xs: 'center', md: 'left' }
              }}>
                <img
                  src="/paperfig/paper1.png"
                  alt="eXplainMR paper figure"
                  style={{
                    width: isMobile ? '100%' : '280px',
                    maxWidth: isMobile ? '320px' : '280px',
                    height: isMobile ? 'auto' : '200px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography 
                  variant={isSmallMobile ? "h6" : isMobile ? "h5" : "h5"} 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: 'primary.main', 
                    lineHeight: 1.3,
                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                  }}
                >
                  eXplainMR: Generating Real-time Textual and Visual eXplanations to Facilitate UltraSonography Learning in MR
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 1,
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  <strong>Authors:</strong> Jingying Wang, Jingjing Zhang, Juana Nicoll Capizzano, Matthew Sigakis, Xu Wang, Vitaliy Popov
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 3,
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  <strong>Conference:</strong> CHI 2025
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}>
                  <Link href="https://arxiv.org/abs/2502.18640" target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="outlined" 
                      size={isSmallMobile ? "small" : "medium"}
                      sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                    >
                      Paper
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        
        {/* Paper 2 - CHI 2024 Best Paper */}
        <Grid item xs={12}>
          <Box sx={{ p: { xs: 2, sm: 3 }, mb: 4 }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 4 }, 
              alignItems: { xs: 'center', md: 'flex-start' }
            }}>
              <Box sx={{ 
                flexShrink: 0,
                textAlign: { xs: 'center', md: 'left' }
              }}>
                <img
                  src="/paperfig/paper2.png"
                  alt="Looking Together paper figure"
                  style={{
                    width: isMobile ? '100%' : '280px',
                    maxWidth: isMobile ? '320px' : '280px',
                    height: isMobile ? 'auto' : '200px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography 
                  variant={isSmallMobile ? "h6" : isMobile ? "h5" : "h5"} 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: 'primary.main', 
                    lineHeight: 1.3,
                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                  }}
                >
                  Looking Together ≠ Seeing the Same Thing: Understanding Surgeons' Visual Needs During Intra-operative Coordination and Instruction
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 1,
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  <strong>Authors:</strong> Xinyue Chen*, Vitaliy Popov*, Jingying Wang, Michael Kemp, Gurjit Sandhu, Taylor Kantor, Natalie Mateju, Xu Wang (* indicates equal contribution)
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 3,
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  <strong>Conference:</strong> CHI 2024 
                  <Chip 
                    label="🏆 Best Paper Honorable Mention" 
                    size="small" 
                    sx={{ 
                      ml: { xs: 0, sm: 1 }, 
                      mt: { xs: 1, sm: 0 },
                      display: { xs: 'block', sm: 'inline-flex' },
                      backgroundColor: '#FFD700', 
                      color: '#B8860B', 
                      fontWeight: 'bold',
                      fontSize: { xs: '0.7rem', sm: '0.75rem' }
                    }}
                  />
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}>
                  <Link href="https://dl.acm.org/doi/10.1145/3613904.3641929" target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="outlined" 
                      size={isSmallMobile ? "small" : "medium"}
                      sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                    >
                      Paper
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        
        {/* Paper 3 - CHI 2024 Surgment */}
        <Grid item xs={12}>
          <Box sx={{ p: { xs: 2, sm: 3 }, mb: 4 }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 4 }, 
              alignItems: { xs: 'center', md: 'flex-start' }
            }}>
              <Box sx={{ 
                flexShrink: 0,
                textAlign: { xs: 'center', md: 'left' }
              }}>
                <img
                  src="/paperfig/paper3.png"
                  alt="Surgment paper figure"
                  style={{
                    width: isMobile ? '100%' : '280px',
                    maxWidth: isMobile ? '320px' : '280px',
                    height: isMobile ? 'auto' : '200px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography 
                  variant={isSmallMobile ? "h6" : isMobile ? "h5" : "h5"} 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: 'primary.main', 
                    lineHeight: 1.3,
                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                  }}
                >
                  Surgment: Segmentation-enabled Semantic Search and Creation of Visual Question and Feedback to Support Video-Based Surgery Learning
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 1,
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  <strong>Authors:</strong> Jingying Wang, Haoran Tang, Taylor Kantor, Tandis Soltani, Vitaliy Popov, Xu Wang
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 3,
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  <strong>Conference:</strong> CHI 2024
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}>
                  <Link href="https://dl.acm.org/doi/10.1145/3613904.3642587" target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="outlined" 
                      size={isSmallMobile ? "small" : "medium"}
                      sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                    >
                      Paper
                    </Button>
                  </Link>
                  <Link href="https://www.youtube.com/watch?v=y85dfZWyhkg" target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="outlined" 
                      size={isSmallMobile ? "small" : "medium"} 
                      color="secondary"
                      sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                    >
                      Video
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);
};

export default Project;
