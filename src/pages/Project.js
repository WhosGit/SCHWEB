import { Container, Typography, Grid, Paper, Box, Chip, Button, Link, useTheme, useMediaQuery } from '@mui/material';

const projectOverview = {
  title: "Multimodal Techniques to Enhance Intra- and Post-operative Learning and Coordination between Attending and Resident Surgeons",
  awardNumber: "NSF Award #2406218",
  funding: "$1,200,000",
  duration: "September 1, 2024 - August 31, 2028",
  program: "Smart and Connected Health (SCH)",
  description: "The overarching goal of this project is to improve surgical training experiences and outcomes in the operating room by computationally modeling attending and resident surgeons' intraoperative behaviors. By modeling surgeons' individual and interpersonal behaviors, we aim to enable automated inference and formative assessment of resident surgeons' technical competence, attending surgeons' instruction quality, and the degree to which residents gain operational independence."
};

const Project = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4, md: 6 } }}>
    <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 6 } }}>
      <Typography 
        variant="h1" 
        component="h1" 
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: 'primary.main'
        }}
      >
        Our Research
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ 
        maxWidth: '700px', 
        margin: '0 auto',
        mt: 2
      }}>
        Developing computational methods to enhance surgical training 
        and improve patient outcomes through multimodal behavioral analysis.
      </Typography>
    </Box>

    {/* Project Overview */}
    <Paper sx={{ 
      p: { xs: 3, sm: 4, md: 5 }, 
      mb: { xs: 5, sm: 6 }, 
      backgroundColor: '#f8f9fa' 
    }}>
      <Typography 
        variant="h2" 
        component="h2" 
        gutterBottom 
        color="primary.main"
        sx={{
          mb: { xs: 2, sm: 3 }
        }}
      >
        {projectOverview.title}
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          mb: { xs: 2.5, sm: 3 }
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
        >
          Supported by: 
        </Typography>
        <Link 
          href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2406218&HistoricalAwards=false"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            textDecoration: 'none', 
            color: 'primary.main'
          }}
        >
          {projectOverview.awardNumber}
        </Link>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
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
