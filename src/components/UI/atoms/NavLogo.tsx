import styled from "styled-components";
import LogoImg from '../../../assets/WebLogo.png';


const WebLogo = styled.div`     
    display: flex;
    align-items: center;
    gap: 5px;
    
    > img 
    {
        height: 48px;
        width: auto;
    }

    > h2 
    {
        margin: 0;
    }    
`;

const NavLogo = () => {
    return (         
        <WebLogo>
            <img src={LogoImg} alt="WebLogo" />
            <h2>MY-GAME-LIST</h2>
        </WebLogo> 
    );
}
 
export default NavLogo;