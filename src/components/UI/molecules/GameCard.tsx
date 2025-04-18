import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import styled from 'styled-components';
import { Game } from '../../../types';

const StyledCard = styled(Card)`
  background-color: #181818;
  color: white;
  border-radius: 10px;
  width: 300px; 
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

type Props = 
{
data: Game;
};
  
const GameCard: React.FC<Props> = ({ data }) => {

return ( 
    
    <StyledCard>
      <CardImage
        image={data.photo}  
        title=""
      />
      <CardContent>
        <Typography variant="h5" component="div">
        {data.title}
        </Typography>       
        <Typography color="text.secondary">
          {data.genre[0]}
        </Typography>
        <Typography variant="caption" color="text.secondary">
        {data.releaseYear}
        </Typography>
        <PlusButton>
          +
        </PlusButton>
      </CardContent>
    </StyledCard>
  );
};

export default GameCard;


