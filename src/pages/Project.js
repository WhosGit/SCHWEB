import { Container, Typography, Grid, Paper, Box, Chip, Button, Link } from '@mui/material';

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

const Project = () => (
  <Container maxWidth="lg" sx={{ py: 6 }}>
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Research
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '900px', margin: '0 auto' }}>
        Developing computational methods to enhance surgical training 
        and improve patient outcomes through multimodal behavioral analysis.
      </Typography>
    </Box>

    {/* Project Overview */}
    <Paper sx={{ p: 4, mb: 6, backgroundColor: '#f8f9fa' }}>
      <Typography variant="h4" component="h2" gutterBottom color="primary.main">
        {projectOverview.title}
      </Typography>
      
      <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 3 }}>
        {projectOverview.description}
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Supported by: 
        </Typography>
        <Link 
          href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2406218&HistoricalAwards=false"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: 'none', color: 'primary.main' }}
        >
          {projectOverview.awardNumber}
        </Link>
        <Typography variant="body2" color="text.secondary">
          • {projectOverview.program} • {projectOverview.duration}
        </Typography>
      </Box>
    </Paper>

    {/* Research Thrusts */}
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

    {/* Publications */}
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
        Key Publications
      </Typography>
      <Grid container spacing={4}>
        {/* Paper 1 - CHI 2025 (Most Recent) */}
        <Grid item xs={12}>
          <Box sx={{ p: 3, mb: 4 }}>
            <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
              <Box sx={{ flexShrink: 0 }}>
                <img
                  src="/paperfig/paper1.png"
                  alt="eXplainMR paper figure"
                  style={{
                    width: '280px',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', lineHeight: 1.3 }}>
                  eXplainMR: Generating Real-time Textual and Visual eXplanations to Facilitate UltraSonography Learning in MR
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                  <strong>Authors:</strong> Jingying Wang, Jingjing Zhang, Juana Nicoll Capizzano, Matthew Sigakis, Xu Wang, Vitaliy Popov
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  <strong>Conference:</strong> CHI 2025
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Link href="https://arxiv.org/abs/2502.18640" target="_blank" rel="noopener noreferrer">
                    <Button variant="outlined" size="medium">Paper</Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        
        {/* Paper 2 - CHI 2024 Best Paper */}
        <Grid item xs={12}>
          <Box sx={{ p: 3, mb: 4 }}>
            <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
              <Box sx={{ flexShrink: 0 }}>
                <img
                  src="/paperfig/paper2.png"
                  alt="Looking Together paper figure"
                  style={{
                    width: '280px',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', lineHeight: 1.3 }}>
                  Looking Together ≠ Seeing the Same Thing: Understanding Surgeons' Visual Needs During Intra-operative Coordination and Instruction
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                  <strong>Authors:</strong> Xinyue Chen*, Vitaliy Popov*, Jingying Wang, Michael Kemp, Gurjit Sandhu, Taylor Kantor, Natalie Mateju, Xu Wang (* indicates equal contribution)
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  <strong>Conference:</strong> CHI 2024 
                  <Chip 
                    label="🏆 Best Paper Honorable Mention" 
                    size="small" 
                    sx={{ ml: 1, backgroundColor: '#FFD700', color: '#B8860B', fontWeight: 'bold' }}
                  />
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Link href="https://dl.acm.org/doi/10.1145/3613904.3641929" target="_blank" rel="noopener noreferrer">
                    <Button variant="outlined" size="medium">Paper</Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        
        {/* Paper 3 - CHI 2024 Surgment */}
        <Grid item xs={12}>
          <Box sx={{ p: 3, mb: 4 }}>
            <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
              <Box sx={{ flexShrink: 0 }}>
                <img
                  src="/paperfig/paper3.png"
                  alt="Surgment paper figure"
                  style={{
                    width: '280px',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', lineHeight: 1.3 }}>
                  Surgment: Segmentation-enabled Semantic Search and Creation of Visual Question and Feedback to Support Video-Based Surgery Learning
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                  <strong>Authors:</strong> Jingying Wang, Haoran Tang, Taylor Kantor, Tandis Soltani, Vitaliy Popov, Xu Wang
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  <strong>Conference:</strong> CHI 2024
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Link href="https://dl.acm.org/doi/10.1145/3613904.3642587" target="_blank" rel="noopener noreferrer">
                    <Button variant="outlined" size="medium">Paper</Button>
                  </Link>
                  <Link href="https://www.youtube.com/watch?v=y85dfZWyhkg" target="_blank" rel="noopener noreferrer">
                    <Button variant="outlined" size="medium" color="secondary">Video</Button>
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

export default Project;
