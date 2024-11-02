// AppGrid.js

import React from 'react';
import { Grid, Container, Typography, Avatar, Box } from '@mui/material';
import TLDRCard from './TLDRCard';
import ViewpointsCard from './ViewpointsCard';
import logo from './WhatsApp Image 2024-10-24 at 20.24.04.jpeg';
import './popup.css';


const AppGrid = () => (
  <Container maxWidth="sm"> {/* Adjust width here */}
    {/* Header Section */}
    <Box display="flex" alignItems="center" mb={2}>
      <Avatar src={logo} alt="Infomixed Logo" sx={{ width: 40, height: 40, mr: 2 }} />
      <Typography variant="h5" component="h1">
        Infomixed
      </Typography>
    </Box>

    {/* Main Content */}
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <TLDRCard />
      </Grid>
      <Grid item xs={12}>
        <ViewpointsCard />
      </Grid>
    </Grid>
  </Container>
);

export default AppGrid;
