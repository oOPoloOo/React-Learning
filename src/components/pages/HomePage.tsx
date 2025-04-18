import { useContext, useEffect } from "react";
import FooterContext from "../../contexts/FoooterContext";
import styled from "styled-components";
import GameCard from "../UI/molecules/GameCard";
import useGamesContext from "../../contexts/GamesContex";


const Home = styled.div`
    
    padding: 20px;
    background: linear-gradient(180deg, #0f2027, #203a43, #2c5364);
    /* height: 50vh; */
    display: flex;
    gap: 15px;
    >p 
    {
        margin: 0;
        padding: 15px;
    }

    > .cardsContainer
  {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;    
}
`;

const HomePage = () => {

    const { games } = useGamesContext(); 
    const {setShowFooter } = useContext(FooterContext);

    useEffect(() => {
        setShowFooter(true);
    }, [setShowFooter]);  
    

   
    return (  
        
        <Home>
            <div className="cardsContainer">
            {!games.length ? (
                <p>Loading...</p>
                ) :
                (
                games.map((game) => (
                    <GameCard data={game} key={game.id} />
                ))
                )           
            }           
            </div>        
        </Home>      
   
    );
}
 
export default HomePage;