import styled from "styled-components";
import LogoImg from '../../../assets/WebLogo.png';
import Media from '../../../contexts/MediaContext';


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
    Media
    const notSmallResolution = Media("(min-width:410px)", true);
    return (         
        <WebLogo>            
            <img src={LogoImg} alt="WebLogo" />
            {
               notSmallResolution && <h2>MY-GAME-LIST</h2>
            }
        </WebLogo> 
    );
}
 
export default NavLogo;