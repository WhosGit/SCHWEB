import { Container, Typography, Grid, Card, CardContent, Avatar, Box, Link, Divider } from '@mui/material';

const teamMembers = [
  {
    name: "Xu Wang",
    role: "Assistant Professor",
    department: "Computer Science and Engineering",
    institution: "University of Michigan",
    expertise: "Human-Computer Interaction, Augmented Reality, Computer Vision",
    bio: "Dr. Xu Wang is an Assistant Professor in Computer Science and Engineering at the University of Michigan. His research focuses on human-computer interaction, with particular interests in augmented reality applications for surgical training and computer vision systems.",
    homepage: "https://web.eecs.umich.edu/~xwanghci/",
    photo: "/fig/xuwang.png"
  },
  {
    name: "Anhong Guo",
    role: "Assistant Professor", 
    department: "Computer Science and Engineering",
    institution: "University of Michigan",
    expertise: "Human-Computer Interaction, Accessibility, Mobile Computing",
    bio: "Dr. Anhong Guo is an Assistant Professor in Computer Science and Engineering at the University of Michigan. His research centers on making computing more accessible and developing innovative interaction techniques for diverse user populations.",
    homepage: "https://guoanhong.com/",
    photo: "/fig/anhongguo.png"
  },
  {
    name: "Jingying Wang",
    role: "PhD Student Researcher",
    department: "Computer Science and Engineering",
    institution: "University of Michigan",
    expertise: "Computer Vision, Machine Learning, Surgical Training Tools",
    bio: "Jingying Wang is a PhD student in Computer Science and Engineering at the University of Michigan. Her research focuses on developing video-based surgical training tools and computer vision applications for medical education.",
    homepage: "https://wjymonica.github.io/jingyingwang.github.io/",
    photo: "/fig/jingyingwang.png"
  },
  {
    name: "Vitaliy Popov",
    role: "Clinical Professor",
    department: "Michigan Medicine",
    institution: "University of Michigan",
    expertise: "Surgery, Medical Education, Clinical Training",
    bio: "Dr. Vitaliy Popov is a Clinical Professor at Michigan Medicine, University of Michigan. He brings extensive clinical expertise to the research team, focusing on surgical education and training methodologies.",
    homepage: "https://www.vitaliypopov.com/",
    photo: "/fig/VitaliyPopov.png"
  }
];

const Team = () => (
  <Container maxWidth="lg" sx={{ py: 6 }}>
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Research Team
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
        Meet the interdisciplinary research team working on computational methods 
        for surgical training and patient outcome improvement.
      </Typography>
    </Box>

    {/* Principal Investigators Section */}
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
        Principal Investigators
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.filter(member => member.role.includes('Professor') && !member.role.includes('Clinical')).map((member, index) => (
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
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Avatar 
                    src={member.photo}
                    sx={{ 
                      width: 100, 
                      height: 100, 
                      mr: 3,
                      border: '3px solid',
                      borderColor: 'primary.light'
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Link 
                      href={member.homepage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      sx={{ textDecoration: 'none' }}
                    >
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom
                        sx={{ 
                          color: 'primary.main',
                          '&:hover': { textDecoration: 'underline' }
                        }}
                      >
                        {member.name}
                      </Typography>
                    </Link>
                    <Typography variant="subtitle1" color="text.primary" gutterBottom>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {member.department}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                      {member.institution}
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Research Areas:
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {member.expertise}
                  </Typography>
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Clinical Collaborators Section */}
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
        Clinical Collaborators
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.filter(member => member.role.includes('Clinical')).map((member, index) => (
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
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Avatar 
                    src={member.photo}
                    sx={{ 
                      width: 100, 
                      height: 100, 
                      mr: 3,
                      border: '3px solid',
                      borderColor: 'secondary.light'
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Link 
                      href={member.homepage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      sx={{ textDecoration: 'none' }}
                    >
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom
                        sx={{ 
                          color: 'secondary.main',
                          '&:hover': { textDecoration: 'underline' }
                        }}
                      >
                        {member.name}
                      </Typography>
                    </Link>
                    <Typography variant="subtitle1" color="text.primary" gutterBottom>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {member.department}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                      {member.institution}
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Clinical Expertise:
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {member.expertise}
                  </Typography>
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* PhD Students Section */}
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
        Graduate Student Researchers
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.filter(member => member.role.includes('PhD')).map((member, index) => (
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
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Avatar 
                    src={member.photo}
                    sx={{ 
                      width: 100, 
                      height: 100, 
                      mr: 3,
                      border: '3px solid',
                      borderColor: 'success.light'
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Link 
                      href={member.homepage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      sx={{ textDecoration: 'none' }}
                    >
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom
                        sx={{ 
                          color: 'success.main',
                          '&:hover': { textDecoration: 'underline' }
                        }}
                      >
                        {member.name}
                      </Typography>
                    </Link>
                    <Typography variant="subtitle1" color="text.primary" gutterBottom>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {member.department}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                      {member.institution}
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Research Focus:
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {member.expertise}
                  </Typography>
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Project Information */}
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
        NSF Grant Information
      </Typography>
      <Typography variant="body1" paragraph>
        This research is supported by a $1.2 million grant from the National Science Foundation
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Project: "Multimodal Techniques to Enhance Intra- and Post-operative Learning and Coordination between Attending and Resident Surgeons"
      </Typography>
    </Box>
  </Container>
);

export default Team;
