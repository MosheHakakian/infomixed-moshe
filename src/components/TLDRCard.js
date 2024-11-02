import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CircularProgress, List, ListItem } from '@mui/material';

function TLDRCard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const mockData = [
      "Political event security is under scrutiny following the arrest",
      "Experts are reviewing and proposing enhanced safety measures",
      "Research shows trends in security incidents at political rallies",
      "Suspect's lawyer claims misunderstanding, asserts weapons' legality"
    ];

    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 1000); // 1-second delay to simulate loading
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Card variant="outlined" sx={{ backgroundColor: '#f5f5f5', padding: '10px' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          TLDR: Full Picture
        </Typography>
        <List>
          {data.map((item, index) => (
            <ListItem key={index} disablePadding>
              <Typography variant="body2">• {item}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default TLDRCard;
