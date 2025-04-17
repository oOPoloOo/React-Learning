import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import FaceIcon from '@mui/icons-material/Face'; 
import WebLogo from '../../../assets/WebLogo.png';
import NavLogo from '../atoms/NavLogo';

const HeaderS = styled.header`
    margin: 0;
    padding: 0;
    height: 84px;
    width: auto;
    background-color: lightblue;
   
    display: flex;
    justify-content: center;
    align-items: center; 
 
    > div 
    {   
        display: flex;
        justify-content: space-between;
        height: 48px;
        width: 95%;
        /* background-color: black; */
        /* color: black; */

        > a 
        {

            > div#webLogo 
            {
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
            }
        }

        > div#btnContainer 
        {
            display: flex;
            align-items: center;
            gap: 15px;

            > div#loginBtn 
            {
                

            }

            > button#gameSerchBtn 
            {
                

            }
        }
    }
`;

const Header = () => {
    return (  
        <HeaderS>
            <div>
                {/* <a href="">
                    <div id="webLogo">
                      <img src={WebLogo} alt="WebLogo" />
                      <h2>MY-GAME-LIST</h2>
                    </div>                    
                </a>  */}
                <a href="">
                    <NavLogo></NavLogo>             
                </a> 
                
                <div id='btnContainer'>

                    <div id='loginBtn'>
                        {/* <nav></nav> */}
                       
                            <div className='rounded'>
                                <FaceIcon/>
                            </div>
                     
                    </div>

                    <button id='gameSerchBtn'>
                        <SearchIcon/>
                        Game
                    </button>

                </div>
            </div>
        </HeaderS>
    );
}
 
export default Header;