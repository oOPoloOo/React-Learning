import { useContext, useEffect } from "react";
import FooterContext from "../../contexts/FoooterContext";

const ToRegistrationLoginPage = () => {
   
    const { showFooter, setShowFooter } = useContext(FooterContext);

    useEffect(() => {
        setShowFooter(false);
    }, [setShowFooter]);    
   
    console.log("ToRegistrationLoginPage " + showFooter); 
    return ( 
        <div>
            <p>Register</p>
            <p>Login</p>
        </div>
     );
}
 
export default ToRegistrationLoginPage;