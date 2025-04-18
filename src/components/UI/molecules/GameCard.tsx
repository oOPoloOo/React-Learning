import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  background-color: #181818;
  color: white;
  border-radius: 10px;
  max-width: 300px;
  min-width: 235.4px;
  height:330px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CardImage = styled(CardMedia)`
  height: 200px;
`;

const PlusButton = styled(IconButton)`
  background-color: #007bff;
  color: white;
  &:hover {
    background-color: #0056b3;
  }
`;

const GameCard = () => {
  return (
    <StyledCard>
      <CardImage
        image="path_to_image.jpg"  // Replace this with the actual path of the image
        title="Orphans"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Orphans
        </Typography>
        <Typography color="text.secondary">
          Adventure
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Apr 18
        </Typography>
        <PlusButton>
          +
        </PlusButton>
      </CardContent>
    </StyledCard>
  );
};

export default GameCard;