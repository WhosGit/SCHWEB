import { Container, Typography, Grid, Card, CardContent, Avatar, Box, Chip } from '@mui/material';

const teamMembers = [
  {
    name: "Dr. Xu Wang",
    role: "Principal Investigator",
    department: "Computer Science & Engineering",
    expertise: ["Human-Computer Interaction", "Computer Vision", "Surgical Computing", "Eye-tracking Technology"],
    bio: "Dr. Wang leads our computational approach to surgical training research, focusing on multimodal analysis and AI-powered educational tools.",
    affiliation: "University of Michigan"
  },
  {
    name: "Dr. Anhong Guo",
    role: "Co-Principal Investigator", 
    department: "Computer Science & Engineering",
    expertise: ["Accessibility Technologies", "Human-AI Interaction", "Mobile Computing", "Assistive Technologies"],
    bio: "Dr. Guo brings expertise in human-computer interaction and accessibility to develop inclusive surgical training technologies.",
    affiliation: "University of Michigan"
  },
  {
    name: "Dr. Vitaliy Popov",
    role: "Medical Collaborator",
    department: "Michigan Medicine",
    expertise: ["Surgery", "Medical Education", "Laparoscopic Procedures", "Surgical Training"],
    bio: "Dr. Popov provides clinical expertise and surgical domain knowledge to ensure research relevance and practical applicability.",
    affiliation: "University of Michigan"
  },
  {
    name: "Dr. Brian George",
    role: "Senior Medical Personnel",
    department: "Michigan Medicine",
    expertise: ["Surgical Education", "Clinical Training", "Medical Simulation", "Resident Development"],
    bio: "Dr. George contributes extensive experience in surgical education and training methodologies to the research team.",
    affiliation: "University of Michigan"
  },
  {
    name: "Dr. Gurjit Sandhu",
    role: "Senior Medical Personnel",
    department: "Michigan Medicine",
    expertise: ["Surgical Procedures", "Medical Training", "Clinical Excellence", "Patient Safety"],
    bio: "Dr. Sandhu brings practical surgical experience and insights into training effectiveness and patient outcomes.",
    affiliation: "University of Michigan"
  },
  {
    name: "Jingying Wang",
    role: "PhD Student & Lead Developer",
    department: "Computer Science & Engineering",
    expertise: ["Video-based Learning", "Surgical AI", "Computer Vision", "Educational Technology"],
    bio: "Jingying spearheaded the development of Surgment, our innovative video-based surgical training tool presented at CHI 2024.",
    affiliation: "University of Michigan"
  }
];

const Team = () => (
  <Container maxWidth="lg" sx={{ py: 6 }}>
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Research Team
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
        Our interdisciplinary team combines expertise in computer science, human-computer interaction, 
        and medical education to revolutionize surgical training through computational innovation.
      </Typography>
    </Box>

    {/* Principal Investigators */}
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
        Principal Investigators
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.filter(member => member.role.includes("Principal")).map((member, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                  <Avatar 
                    sx={{ 
                      width: 120, 
                      height: 120, 
                      mb: 2, 
                      fontSize: '2.5rem',
                      backgroundColor: 'primary.main'
                    }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                  <Typography variant="h5" component="h3" textAlign="center" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="h6" color="primary" textAlign="center" gutterBottom>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" textAlign="center" gutterBottom>
                    {member.department} • {member.affiliation}
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Research Expertise:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {member.expertise.map((skill, skillIndex) => (
                      <Chip 
                        key={skillIndex} 
                        label={skill} 
                        size="small" 
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </Box>
                </Box>
                
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Medical Collaborators */}
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
        Medical Collaborators
      </Typography>
      <Grid container spacing={3}>
        {teamMembers.filter(member => member.department === "Michigan Medicine").map((member, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                  <Avatar 
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      mb: 2, 
                      fontSize: '1.5rem',
                      backgroundColor: 'secondary.main'
                    }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                  <Typography variant="h6" component="h3" textAlign="center" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="secondary" textAlign="center" gutterBottom>
                    {member.role}
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                      <Chip 
                        key={skillIndex} 
                        label={skill} 
                        size="small" 
                        variant="outlined"
                        color="secondary"
                      />
                    ))}
                  </Box>
                </Box>
                
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Graduate Students */}
    <Box>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
        Graduate Students & Researchers
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.filter(member => member.role.includes("PhD") || member.role.includes("Student")).map((member, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar 
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      mr: 3,
                      fontSize: '1.5rem',
                      backgroundColor: 'success.main'
                    }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="success.main" gutterBottom>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.department}
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {member.expertise.map((skill, skillIndex) => (
                      <Chip 
                        key={skillIndex} 
                        label={skill} 
                        size="small" 
                        variant="outlined"
                        color="success"
                      />
                    ))}
                  </Box>
                </Box>
                
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Collaboration Section */}
    <Box sx={{ textAlign: 'center', mt: 6, p: 4, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Join Our Research Team
      </Typography>
      <Typography variant="body1" paragraph>
        We are always looking for talented researchers, students, and collaborators interested 
        in computational approaches to medical education and surgical training.
      </Typography>
    </Box>
  </Container>
);

export default Team;