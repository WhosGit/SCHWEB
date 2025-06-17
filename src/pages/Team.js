import { Container, Typography, Grid, Box, Link, Paper } from '@mui/material';

const teamMembers = [
  {
    name: "Xu Wang",
    role: "Principal Investigator",
    title: "Assistant Professor",
    department: "Computer Science and Engineering",
    institution: "University of Michigan",
    expertise: "Human-Computer Interaction, Augmented Reality, Computer Vision",
    bio: "Dr. Xu Wang is an Assistant Professor in Computer Science and Engineering at the University of Michigan. His research focuses on human-computer interaction, with particular interests in augmented reality applications for surgical training and computer vision systems.",
    homepage: "https://web.eecs.umich.edu/~xwanghci/",
    photo: "/fig/xuwang.png",
    category: "Principal Investigator"
  },
  {
    name: "Anhong Guo",
    role: "Co-Principal Investigator",
    title: "Assistant Professor", 
    department: "Computer Science and Engineering",
    institution: "University of Michigan",
    expertise: "Human-Computer Interaction, Accessibility, Mobile Computing",
    bio: "Dr. Anhong Guo is an Assistant Professor in Computer Science and Engineering at the University of Michigan. His research centers on making computing more accessible and developing innovative interaction techniques for diverse user populations.",
    homepage: "https://guoanhong.com/",
    photo: "/fig/anhongguo.png",
    category: "Co-Principal Investigator"
  },
  {
    name: "Vitaliy Popov",
    role: "Co-Principal Investigator",
    title: "Clinical Professor",
    department: "Michigan Medicine",
    institution: "University of Michigan",
    expertise: "Surgery, Medical Education, Clinical Training",
    bio: "Dr. Vitaliy Popov is a Clinical Professor at Michigan Medicine, University of Michigan. He brings extensive clinical expertise to the research team, focusing on surgical education and training methodologies.",
    homepage: "https://www.vitaliypopov.com/",
    photo: "/fig/VitaliyPopov.png",
    category: "Co-Principal Investigator"
  },
  {
    name: "Jingying Wang",
    role: "PhD Student",
    title: "Graduate Student Researcher",
    department: "Computer Science and Engineering",
    institution: "University of Michigan",
    expertise: "Computer Vision, Machine Learning, Surgical Training Tools",
    bio: "Jingying Wang is a PhD student in Computer Science and Engineering at the University of Michigan. Her research focuses on developing video-based surgical training tools and computer vision applications for medical education.",
    homepage: "https://wjymonica.github.io/jingyingwang.github.io/",
    photo: "/fig/jingyingwang.png",
    category: "Graduate Student"
  }
];

const PersonCard = ({ member }) => (
  <Paper 
    elevation={0}
    sx={{ 
      p: 0,
      backgroundColor: 'transparent',
      textAlign: 'center',
      transition: 'transform 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-8px)'
      }
    }}
  >
    {/* Large Photo */}
    <Box sx={{ mb: 3 }}>
      <img
        src={member.photo}
        alt={member.name}
        style={{
          width: '280px',
          height: '280px',
          objectFit: 'cover',
          borderRadius: '8px',
          border: '4px solid #e0e0e0',
          transition: 'border-color 0.2s ease-in-out'
        }}
        onMouseOver={(e) => e.target.style.borderColor = '#1976d2'}
        onMouseOut={(e) => e.target.style.borderColor = '#e0e0e0'}
      />
    </Box>

    {/* Name with Link */}
    <Link 
      href={member.homepage} 
      target="_blank" 
      rel="noopener noreferrer"
      sx={{ 
        textDecoration: 'none',
        '&:hover': { textDecoration: 'underline' }
      }}
    >
      <Typography 
        variant="h4" 
        component="h3" 
        gutterBottom
        sx={{ 
          color: 'primary.main',
          fontWeight: 'bold',
          mb: 1
        }}
      >
        {member.name}
      </Typography>
    </Link>

    {/* Role and Department */}
    <Typography variant="h6" color="primary.main" gutterBottom sx={{ fontWeight: 'bold' }}>
      {member.role}
    </Typography>
    <Typography variant="body1" color="text.primary" gutterBottom>
      {member.title}
    </Typography>
    <Typography variant="body1" color="text.secondary" gutterBottom>
      {member.department}
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', mb: 2 }}>
      {member.institution}
    </Typography>

    {/* Research Areas */}
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.main' }} gutterBottom>
        Research Areas
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {member.expertise}
      </Typography>
    </Box>

    {/* Bio */}
    <Typography variant="body2" color="text.secondary" sx={{ 
      lineHeight: 1.6,
      textAlign: 'left',
      maxWidth: '280px',
      margin: '0 auto'
    }}>
      {member.bio}
    </Typography>
  </Paper>
);

const Team = () => {
  const principalInvestigator = teamMembers.filter(member => member.category === "Principal Investigator");
  const coPrincipalInvestigators = teamMembers.filter(member => member.category === "Co-Principal Investigator");
  const graduateStudents = teamMembers.filter(member => member.category === "Graduate Student");

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Our Personnel
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
          Meet the interdisciplinary research team working on computational methods 
          for surgical training and patient outcome improvement.
        </Typography>
      </Box>

      {/* Principal Investigator */}
      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          sx={{ 
            mb: 5, 
            color: 'primary.main',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Principal Investigator
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          {principalInvestigator.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PersonCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Co-Principal Investigators */}
      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          sx={{ 
            mb: 5, 
            color: 'primary.main',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Co-Principal Investigators
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          {coPrincipalInvestigators.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PersonCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Graduate Student Researchers */}
      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          sx={{ 
            mb: 5, 
            color: 'primary.main',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Graduate Student Researchers
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          {graduateStudents.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PersonCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Project Information */}
      <Box sx={{ 
        textAlign: 'center', 
        mt: 10, 
        p: 6, 
        backgroundColor: 'primary.light', 
        borderRadius: 3,
        color: 'white'
      }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          NSF Grant Information
        </Typography>
        <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
          This research is supported by a $1.2 million grant from the National Science Foundation
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.8, fontStyle: 'italic' }}>
          "Multimodal Techniques to Enhance Intra- and Post-operative Learning and Coordination between Attending and Resident Surgeons"
        </Typography>
      </Box>
    </Container>
  );
};

export default Team;
