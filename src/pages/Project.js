import { Container, Typography, Grid, Paper, Box, Chip, Button } from '@mui/material';

const mainProject = {
  title: "Multimodal Techniques to Enhance Surgical Training",
  funding: "$1.2 Million NSF Grant",
  duration: "September 2024 - August 2027",
  description: "Our flagship NSF-funded research project focuses on leveraging advanced computational methods to evaluate and improve surgical training. We deploy multimodal modeling approaches to assess and predict surgeon behaviors during operations with the aim of developing new educational tools for surgeons-in-training.",
  objectives: [
    "Observe and model attending and resident surgeons' behaviors in the operating room",
    "Assess approximately 100 laparoscopic gallbladder removal surgeries",
    "Develop predictive models for surgeon competence and training effectiveness",
    "Create interactive post-operative debriefing dashboards",
    "Design augmented reality-based intraoperative visualizations"
  ],
  technologies: ["Eye-tracking", "Multimodal AI", "Computer Vision", "Neural Networks", "AR/VR", "Scene Segmentation"],
  impact: "Transforming surgical training to improve patient safety and surgeon readiness"
};

const researchAreas = [
  {
    title: "Multimodal Data Collection & Analysis",
    description: "We collect and analyze surgeon gaze patterns, operating room conversations, and laparoscopic video streams to understand surgical behaviors and competency levels.",
    methods: ["Eye-tracking technology", "Audio analysis", "Video processing", "Behavioral modeling"],
    applications: ["Surgeon competency assessment", "Training effectiveness evaluation", "Behavioral prediction"]
  },
  {
    title: "AI-Powered Scene Understanding",
    description: "Our Surgment system uses advanced computer vision and neural networks to automatically interpret and annotate surgery scenes, providing unprecedented insights into surgical procedures.",
    methods: ["Scene segmentation", "Neural network architectures", "Multi-stream data fusion", "Automated annotation"],
    applications: ["Surgery scene analysis", "Real-time feedback", "Educational content generation"]
  },
  {
    title: "Interactive Training Technologies",
    description: "We develop cutting-edge dashboards and AR visualizations that enable surgeons to review procedures, receive feedback, and improve their skills through innovative educational tools.",
    methods: ["Interactive dashboards", "Augmented reality", "Post-operative debriefing", "Real-time visualization"],
    applications: ["Surgical education", "Skills assessment", "Performance improvement"]
  }
];

const achievements = [
  {
    title: "CHI 2024 Best Paper Honorable Mention",
    description: "Our research on surgeons' visual needs during surgery received recognition at the premier HCI conference.",
    date: "2024"
  },
  {
    title: "Surgment: Video-based Surgical Training Tool",
    description: "Developed and presented our innovative surgical training platform at CHI 2024.",
    date: "2024"
  },
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