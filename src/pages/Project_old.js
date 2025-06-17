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
  {
    title: "NSF Grant Award",
    description: "$1.2 million funding secured for multimodal surgical training research.",
    date: "September 2024"
  }
];

const Project = () => (
  <Container maxWidth="lg" sx={{ py: 6 }}>
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Research
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
        Pioneering computational approaches to revolutionize surgical training and enhance patient safety 
        through innovative technologies and interdisciplinary collaboration.
      </Typography>
    </Box>

    {/* Main Project Highlight */}
    <Paper sx={{ p: 4, mb: 6, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h2" color="primary" gutterBottom>
            {mainProject.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
            <Chip label={mainProject.funding} color="success" />
            <Chip label={mainProject.duration} color="info" />
          </Box>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            {mainProject.description}
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Research Objectives:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            {mainProject.objectives.map((objective, index) => (
              <Typography component="li" variant="body2" key={index} sx={{ mb: 1 }}>
                {objective}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ 
            backgroundColor: 'white', 
            p: 3, 
            borderRadius: 2, 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Key Technologies:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {mainProject.technologies.map((tech, index) => (
                  <Chip key={index} label={tech} variant="outlined" size="small" />
                ))}
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" color="primary">
                Expected Impact:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {mainProject.impact}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>

    {/* Research Areas */}
    <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
      Research Focus Areas
    </Typography>
    
    <Grid container spacing={4} sx={{ mb: 6 }}>
      {researchAreas.map((area, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" component="h3" color="primary" gutterBottom>
              {area.title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ flexGrow: 1 }}>
              {area.description}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Methods & Technologies:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                {area.methods.map((method, methodIndex) => (
                  <Chip key={methodIndex} label={method} size="small" variant="outlined" />
                ))}
              </Box>
              <Typography variant="subtitle2" gutterBottom>
                Applications:
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {area.applications.map((app, appIndex) => (
                  <Typography component="li" variant="body2" key={appIndex} sx={{ fontSize: '0.875rem' }}>
                    {app}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>

    {/* Achievements & Recognition */}
    <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
      Achievements & Recognition
    </Typography>
    
    <Grid container spacing={3} sx={{ mb: 6 }}>
      {achievements.map((achievement, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <Typography variant="h6" color="primary" gutterBottom>
              {achievement.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {achievement.description}
            </Typography>
            <Chip label={achievement.date} color="secondary" size="small" />
          </Paper>
        </Grid>
      ))}
    </Grid>

    {/* Call to Action */}
    <Box sx={{ textAlign: 'center', mt: 6, p: 4, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Collaborate with Our Research
      </Typography>
      <Typography variant="body1" paragraph>
        Interested in contributing to the future of surgical training? We welcome collaborations 
        with medical institutions, technology companies, and research organizations.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Contact Our Research Team
      </Button>
    </Box>
  </Container>
);

export default Project;