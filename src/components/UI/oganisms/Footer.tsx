import styled from "styled-components";
import FooterContext from "../../../contexts/FoooterContext";
import { useContext } from "react";

const FooterS = styled.footer`
   >div.block 
   {
        display: block;
   }

   >div.hidden 
   {
        display: none;
   }
`;

const Footer = () => {
    const {showFooter} = useContext(FooterContext);

    return ( 
        
        <FooterS >
            <div className={`${showFooter ? 'block': 'hidden'}`}>
                <p>CIA YRA FOOTERIS</p>
            </div>
        </FooterS>       
     );
}
 
export default Footer;