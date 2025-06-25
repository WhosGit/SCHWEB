import { Container, Typography, Grid, Box, Link, Paper } from '@mui/material';

const teamMembers = [
  {
    name: "Xu Wang",
    title: "Assistant Professor",
    department: "Computer Science and Engineering, School of Information (By courtesy)",
    institution: "University of Michigan",
    homepage: "https://web.eecs.umich.edu/~xwanghci/",
    photo: "/fig/xuwang.png"
  },
  {
    name: "Anhong Guo",
    title: "Assistant Professor", 
    department: "Computer Science and Engineering, School of Information (affiliated)",
    institution: "University of Michigan",
    homepage: "https://guoanhong.com/",
    photo: "/fig/anhongguo.png"
  },
  {
    name: "Vitaliy Popov",
    title: "Assistant Professor",
    department: "Learning Health Sciences, School of Information (By courtesy)",
    institution: "University of Michigan",
    homepage: "https://www.vitaliypopov.com/",
    photo: "/fig/VitaliyPopov.png"
  },
  {
    name: "Jingying Wang",
    title: "PhD Student",
    department: "Computer Science and Engineering",
    institution: "University of Michigan",
    homepage: "https://wjymonica.github.io/jingyingwang.github.io/",
    photo: "/fig/jingyingwang.png"
  },
  {
    name: "Rosiana Natalie",
    title: "Postdoctoral Research Fellow",
    department: "Computer Science and Engineering",
    institution: "University of Michigan",
    homepage: "https://www.rosiananatalie.com/",
    photo: "/fig/rosiananatalie.png"
  },
  {
    name: "Trista Xu",
    title: "Master Student",
    department: "Computer Science and Engineering",
    institution: "University of Michigan",
    homepage: "https://www.linkedin.com/in/tristaxu01/",
    photo: "/fig/tristaxu.png"
  },
  {
    name: "Jingjing Zhang",
    title: "Incoming Master Student",
    department: "Computer Science and Engineering",
    institution: "University of Michigan",
    homepage: "#",
    photo: "/fig/Jingjing.png"
  },
  {
    name: "Keyuan Hu",
    title: "Undergraduate Student",
    department: "Data Science",
    institution: "University of Michigan",
    homepage: "https://www.linkedin.com/in/keyuan-hu-363a01327/",
    photo: "/fig/keyuan.png"
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
    {/* Photo */}
    <Box sx={{ mb: 3 }}>
      <img
        src={member.photo}
        alt={member.name}
        style={{
          width: '200px',
          height: '200px',
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
        variant="h5" 
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

    {/* Title and Department */}
    <Typography variant="body1" color="text.primary" gutterBottom>
      {member.title}
    </Typography>
    <Typography variant="body2" color="text.secondary" gutterBottom>
      {member.department}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold', mb: 2 }}>
      {member.institution}
    </Typography>

    {/* Research Areas */}
    <Typography variant="body2" color="text.secondary" sx={{ 
      lineHeight: 1.4,
      textAlign: 'center',
      maxWidth: '200px',
      margin: '0 auto'
    }}>
    </Typography>
  </Paper>
);

const Team = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Our Team
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
          Meet the interdisciplinary research team working on computational methods 
          for surgical training and patient outcome improvement.
        </Typography>
      </Box>

      {/* All Team Members */}
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PersonCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Team;
