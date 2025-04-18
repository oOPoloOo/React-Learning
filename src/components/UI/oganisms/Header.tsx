import styled from 'styled-components';
import LoginBtn from '../atoms/LoginButton';
import NavLogo from '../atoms/NavLogo';
import SearchButton from '../atoms/SearchButton';
import { Link } from 'react-router';
import { useContext } from 'react';
import FooterContext from '../../../contexts/FoooterContext';
import UsersContext from '../../../contexts/UsersContext';
import { UsersContextTypes } from '../../../types';

const HeaderS = styled.header`
   
    display: flex;
    justify-content: center;
    align-items: center; 
   
    margin: 0;
    padding: 0;
    height: 84px;
    /* width: auto; */
    min-width: 240px;
    background-color: #531750;
   
   
     
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

        > div.hidden 
        {
            display: none;
        
        }

        > div.flex 
        {
            display: flex;
            align-items: center;
            gap: 15px;              
        }
    }
`;

const Header = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UsersContext) as UsersContextTypes;

    const {showFooter} = useContext(FooterContext);
    console.dir("Header loggedInUser", loggedInUser);
    return (  
        <HeaderS>
            <div>          
                <a href="">
                    <Link to={`/`}>
                        <NavLogo></NavLogo>  
                    </Link>           
                </a> 
                
                <div className={`${showFooter ? 'flex': 'hidden'}`}>
                    {loggedInUser ? 
                        (
                            <>    
                            <Link to={`/from`}>                             
                               <LoginBtn data={loggedInUser.photo} key={loggedInUser.id}/>
                               </Link>
                               <SearchButton/>
                            </>
                        ) 
                        : 
                        (
                            <>
                                <Link to={`/to`}>                 
                                    <LoginBtn data= ""/>
                                </Link>
                                <SearchButton/>
                            </>
                        )
                    }                    
                    
                </div>
            </div>
        </HeaderS>
    );
}
 
export default Header;