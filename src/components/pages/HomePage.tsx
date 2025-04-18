import { useContext, useEffect } from "react";
import FooterContext from "../../contexts/FoooterContext";

const HomePage = () => {

    const {setShowFooter } = useContext(FooterContext);

    useEffect(() => {
        setShowFooter(true);
    }, [setShowFooter]);  
    
    return (  
        <>
        </>
    );
}
 
export default HomePage;