// src/components/ViewpointsCard.js
import React from 'react';
import { Card, CardContent, Typography, Grid, Divider, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info'; // Icon for section headers
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Icon for time display

function ViewpointsCard() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 400, margin: 'auto', textAlign: 'left' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
          Alternative viewpoints
        </Typography>

        {/* New Information Section */}
        <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
          <InfoIcon sx={{ color: 'blue', mr: 1 }} />
          <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.9rem' }}>
            New Information
          </Typography>
        </Box>
        <Divider sx={{ bgcolor: 'blue', height: 2, mb: 1 }} />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Card variant="outlined" sx={{ mb: 1, padding: '8px' }}>
              <CardContent sx={{ padding: '4px 8px' }}>
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" sx={{ fontSize: '0.85rem', flex: 1 }}>
                    Security Measures at Political Rallies
                  </Typography>
                  <Box display="flex" alignItems="center" sx={{ color: 'text.secondary' }}>
                    <AccessTimeIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                    <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                      (2 hours ago)
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card variant="outlined" sx={{ mb: 1, padding: '8px' }}>
              <CardContent sx={{ padding: '4px 8px' }}>
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" sx={{ fontSize: '0.85rem', flex: 1 }}>
                    Analysis: Frequency of Security Threats
                  </Typography>
                  <Box display="flex" alignItems="center" sx={{ color: 'text.secondary' }}>
                    <AccessTimeIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                    <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                      (6 hours ago)
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Contradictory Information Section */}
        <Box display="flex" alignItems="center" sx={{ mt: 2, mb: 1 }}>
          <InfoIcon sx={{ color: 'red', mr: 1 }} />
          <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.9rem' }}>
            Contradictory Information
          </Typography>
        </Box>
        <Divider sx={{ bgcolor: 'red', height: 2, mb: 1 }} />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Card variant="outlined" sx={{ mb: 1, padding: '8px' }}>
              <CardContent sx={{ padding: '4px 8px' }}>
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" sx={{ fontSize: '0.85rem', flex: 1 }}>
                    Suspect's Lawyer Claims Mistake
                  </Typography>
                  <Box display="flex" alignItems="center" sx={{ color: 'text.secondary' }}>
                    <AccessTimeIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                    <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                      (Just now)
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card variant="outlined" sx={{ padding: '8px' }}>
              <CardContent sx={{ padding: '4px 8px' }}>
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" sx={{ fontSize: '0.85rem', flex: 1 }}>
                    Local Gun Rights Group Criticizes Arrest
                  </Typography>
                  <Box display="flex" alignItems="center" sx={{ color: 'text.secondary' }}>
                    <AccessTimeIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                    <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                      (4 days ago)
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ViewpointsCard;
