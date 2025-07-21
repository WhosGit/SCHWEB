# SCH Research Website - University of Michigan

This is the official website for the University of Michigan Smart and Connected Health (SCH) research team, specializing in multimodal surgical training research.

## Project Overview

The website showcases our NSF-funded research on developing computational methods to enhance intra- and post-operative learning and coordination between attending and resident surgeons. Our work focuses on multimodal behavioral analysis using eye-tracking, conversation analysis, and computer vision techniques.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI**: Built with Material-UI components and University of Michigan branding
- **Fast Performance**: Optimized React application with code splitting
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Technology Stack

- **React 19** - Frontend framework
- **Material-UI** - UI component library
- **React Router** - Client-side routing
- **Create React App** - Build toolchain

## Available Scripts

### Development
```bash
npm start    # Start development server at http://localhost:3000
```

### Production
```bash
npm run build    # Create optimized build in build/ folder
```

## Project Structure

```
src/
├── index.js            # Main entry point - Application bootstrap
├── index.css           # Global styles
├── components/         # Reusable React components
│   ├── Navbar.js       # Navigation header
│   ├── Footer.js       # Site footer
│   ├── Banner.js       # Homepage banner
│   └── CardSection.js  # Homepage feature cards
└── pages/              # Main page components
    ├── Home.js         # Homepage
    ├── Team.js         # Team member profiles
    ├── Project.js      # Research projects and publications
    ├── News.js         # News and updates
    └── CallForPartners.js  # Partner recruitment
```


## Research Information

This website represents research funded by the National Science Foundation under Award #2406218. For more information about our research, visit our [project page](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2406218&HistoricalAwards=false).

## Key File Locations

- **Main Entry Point**: `src/index.js` - Application bootstrap and routing configuration
- **Pages**: `src/pages/` - Individual page components (Home, Team, Project, News, etc.)
- **Components**: `src/components/` - Reusable UI components (Navbar, Footer, Banner, etc.)
- **Static Assets**: `public/` - Images, icons, and static files
- **Configuration**: `package.json` - Project dependencies and build scripts

## Environment Requirements

- **Node.js**: Version 16 or higher
- **npm**: Version 8 or higher (comes with Node.js)
- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)

## Build Instructions

### Development Build
```bash
# Install dependencies (first time only)
npm install

# Start development server
npm start
# Opens http://localhost:3000 in browser
```

### Production Build
```bash
# Create optimized production build
npm run build

# Output will be in build/ directory
# Deploy the contents of build/ folder to web server
```

## Content Management

### Update Team Members
Edit `src/pages/Team.js` - Add/modify entries in `professors` or `otherMembers` arrays

### Update News
Edit `src/pages/News.js` - Add new items to `newsItems` array

### Update Research Content
Edit `src/pages/Project.js` - Modify project overview and publications

### Update Images
- Team photos: `public/fig/`
- Publication figures: `public/paperfig/`
