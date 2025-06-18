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

const technologies = [
  "Eye-tracking Technology",
  "Computer Vision",
  "Neural Networks", 
  "Scene Segmentation",
  "Multimodal AI",
  "Augmented Reality",
  "Natural Language Processing",
  "Behavioral Analytics"
];

const impact = {
  clinicalImpact: "Reducing surgical errors and improving patient safety through better surgeon training",
  educationalImpact: "Transforming surgical education with data-driven insights and interactive technologies", 
  researchImpact: "Advancing the field of computational surgery and medical AI applications"
};

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

    {/* Technologies */}
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
        Key Technologies
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {technologies.map((tech, index) => (
            <Chip 
              key={index} 
              label={tech} 
              variant="outlined" 
              color="primary"
              sx={{ mb: 1 }}
            />
          ))}
        </Box>
      </Paper>
    </Box>

    {/* Publications */}
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
        Key Publications
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={{ p: 4, mb: 3, borderLeft: '4px solid', borderLeftColor: 'primary.main' }}>
            <Typography variant="h6" gutterBottom color="primary.main" sx={{ fontWeight: 'bold' }}>
              Looking Together ≠ Seeing the Same Thing: Understanding Surgeons' Visual Needs During Intra-operative Coordination and Instruction
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              This research explores how surgeons' visual attention patterns differ during collaborative surgical procedures, 
              providing insights into effective coordination strategies and instruction delivery in the operating room.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip label="Eye-tracking" size="small" variant="outlined" />
              <Chip label="Surgical Coordination" size="small" variant="outlined" />
              <Chip label="Visual Analysis" size="small" variant="outlined" />
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 4, mb: 3, borderLeft: '4px solid', borderLeftColor: 'secondary.main' }}>
            <Typography variant="h6" gutterBottom color="secondary.main" sx={{ fontWeight: 'bold' }}>
              Surgment: Segmentation-enabled Semantic Search and Creation of Visual Question and Feedback to Support Video-Based Surgery Learning
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A novel system that combines computer vision segmentation with semantic search capabilities to enhance 
              surgical education through intelligent video analysis and automated feedback generation.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip label="Computer Vision" size="small" variant="outlined" />
              <Chip label="Semantic Search" size="small" variant="outlined" />
              <Chip label="Surgical Education" size="small" variant="outlined" />
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 4, mb: 3, borderLeft: '4px solid', borderLeftColor: 'success.main' }}>
            <Typography variant="h6" gutterBottom color="success.main" sx={{ fontWeight: 'bold' }}>
              eXplainMR: Generating Real-time Textual and Visual eXplanations to Facilitate UltraSonography Learning in MR
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              An innovative mixed reality system that provides real-time textual and visual explanations to support 
              ultrasound learning, bridging the gap between traditional training methods and modern technology.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip label="Mixed Reality" size="small" variant="outlined" />
              <Chip label="Medical Training" size="small" variant="outlined" />
              <Chip label="Ultrasound" size="small" variant="outlined" />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>

    {/* Project Impact */}
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
        Project Impact
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%', backgroundColor: '#e3f2fd' }}>
            <Typography variant="h6" gutterBottom color="primary.main">
              Clinical Impact
            </Typography>
            <Typography variant="body2">
              {impact.clinicalImpact}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%', backgroundColor: '#f3e5f5' }}>
            <Typography variant="h6" gutterBottom color="secondary.main">
              Educational Impact
            </Typography>
            <Typography variant="body2">
              {impact.educationalImpact}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%', backgroundColor: '#e8f5e8' }}>
            <Typography variant="h6" gutterBottom color="success.main">
              Research Impact
            </Typography>
            <Typography variant="body2">
              {impact.researchImpact}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>

    {/* Call to Action */}
    <Box sx={{ 
      textAlign: 'center', 
      mt: 8, 
      p: 4, 
      backgroundColor: 'grey.50', 
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'grey.200'
    }}>
      <Typography variant="h5" gutterBottom color="primary.main">
        Research Collaboration
      </Typography>
      <Typography variant="body1" paragraph>
        We welcome collaborations with clinicians, researchers, and institutions interested 
        in computational surgery, surgical education, and AI applications in healthcare.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Contact Research Team
      </Button>
    </Box>
  </Container>
);

export default Project;
