import styled from 'styled-components';
import LoginBtn from '../atoms/LoginButton';
import NavLogo from '../atoms/NavLogo';
import SearchButton from '../atoms/SearchButton';
import { Link } from 'react-router';

const HeaderS = styled.header`
    margin: 0;
    padding: 0;
    height: 84px;
    width: auto;
    min-width: 240px;
    background-color: #531750;
   
    display: flex;
    justify-content: center;
    align-items: center; 
     
    > div 
    {   
        display: flex;
        justify-content: space-between;
        height: 48px;
        width: 95%;

        > a 
        {
            text-decoration: none;
        }

        > a:hover
        {
            text-decoration: underline;
            text-decoration-color: var(--first-color);      
        }
        > div#btnContainer 
        {
            display: flex;
            align-items: center;
            gap: 15px;          
        }
    }
`;



const Header = () => {
    return (  
        <HeaderS>
            <div>          
                <a href="">
                    <NavLogo></NavLogo>             
                </a> 
                
                <div id='btnContainer'>
                <Link to={`/to`}>                 
                    <LoginBtn/>
                </Link>
                  <SearchButton/>
                </div>
            </div>
        </HeaderS>
    );
}
 
export default Header;