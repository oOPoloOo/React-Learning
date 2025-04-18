import { useContext, useEffect } from "react";
import FooterContext from "../../contexts/FoooterContext";
import styled from "styled-components";


const Home = styled.div`
    
    background: linear-gradient(180deg, #0f2027, #203a43, #2c5364);
    height: 50vh;
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
         <p>Home</p>
        </Home>
       
        </>
    );
}
 
export default HomePage;