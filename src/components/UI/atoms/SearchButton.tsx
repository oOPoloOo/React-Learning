import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';


const GameSerchBtn = styled.button`    

    height: 48px;
    border-radius:50px 50px 50px 50px;   
    background-color: rgba(229,229,229,255);
    > div 
    {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        margin: 0 10px;

        > span 
        {
            margin-right: 5px;
            color: rgba(0,0,0,255);
        }
    }
           
`;

const SearchIStyled= styled(SearchIcon)`
  &.override 
  {
    font-size: 20px;
    color: #7a7878;    
    margin-top: 20px;
    margin: 0;
  }
`;




const SearchButton = () => {
    return (  
        <GameSerchBtn>
            <div>
                <SearchIStyled className={"override"}/>
                <span>Game</span>
            </div>
        </GameSerchBtn>
    );
}
 
export default SearchButton;