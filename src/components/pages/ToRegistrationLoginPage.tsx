import { useContext, useEffect } from "react";
import FooterContext from "../../contexts/FoooterContext";
import styled from "styled-components";
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PasswordIcon from '@mui/icons-material/Password';
import { Link } from "react-router";


const ToPage = styled.div`
  background: linear-gradient(180deg, #0f2027, #203a43, #2c5364);
  height: max-content;

  display: flex;
  justify-content: center;
`;


const Container = styled.div`
  background: linear-gradient(180deg, #0f2027, #203a43, #2c5364);
  border-radius: 24px;
  padding: 40px 24px;
  max-width: 400px;
  margin: 80px 0;
  text-align: center;
  color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #aaa;
  margin-bottom: 32px;
`;

const AuthButton = styled.button`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  width: 100%;
  font-size: 16px;
  border-radius: 9999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const Footer = styled.p`
  font-size: 12px;
  color: #aaa;
  margin-top: 24px;

  a {
    color: #00ffff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledMainIconWrapper = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  width: 90px;
  height: 90px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
`;

const StyledMainIcon = styled(SportsEsportsRoundedIcon)`
  font-size: 150px;
  color: white;
`;

const ToRegistrationLoginPage = () => {
   
    const {setShowFooter } = useContext(FooterContext);

    useEffect(() => {
        setShowFooter(false);
    }, [setShowFooter]);    
   
    return ( 
        <ToPage>     
            <Container>
                <StyledMainIconWrapper>
                    <StyledMainIcon />
                </StyledMainIconWrapper>

                <Title>Welcome ghost!</Title>
                <Subtitle>I mean guest..</Subtitle>                     
                    
                <Link to={`register`}>                 
                    <AuthButton>     
                        <AppRegistrationIcon />                    
                        Continue with Registrationn
                    </AuthButton>              
                </Link>                     
                   
                <Link to={`login`}>                 
                    <AuthButton>
                        <PasswordIcon />
                        Continue with Login
                    </AuthButton>
                </Link>

                <Footer>
                    By signing up, you agree to our{' '}
                    <a href="#">Terms of Service</a> and{' '}
                    <a href="#">Privacy Policy</a>. For information on how we utilize cookies, please refer to our{' '}
                    <a href="#">Cookies Policy</a>.
                </Footer>
            </Container>
        </ToPage>
     );
}
 
export default ToRegistrationLoginPage;