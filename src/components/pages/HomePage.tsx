import { useContext, useEffect } from "react";
import FooterContext from "../../contexts/FoooterContext";
import styled from "styled-components";
import GameCard from "../UI/molecules/GameCard";


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
`;

const HomePage = () => {

    const {setShowFooter } = useContext(FooterContext);

    useEffect(() => {
        setShowFooter(true);
    }, [setShowFooter]);  
    
    return (  
        <>
        <Home>
        <GameCard/>
        <GameCard/>
        <GameCard/>
        </Home>
       
        </>
    );
}
 
export default HomePage;