import { useContext, useEffect } from "react";
import FooterContext from "../../contexts/FoooterContext";
import styled from "styled-components";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useNavigate } from "react-router";
import { UsersContextTypes } from "../../types";
import UsersContext from "../../contexts/UsersContext";


const FromPage = styled.div`
  background: linear-gradient(180deg, #0f2027, #203a43, #2c5364);
  height: max-content;

  display: flex;
  justify-content: center;

  #avatar 
  {
    object-fit: fill;
    height: 122px;     
  }
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



const StyledMainIconWrapper = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  width: 90px;
  height: 90px;
  margin: 0 auto 20px;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.05);
`;

const ToLogout = () => {
   
    const {setShowFooter } = useContext(FooterContext);
    const { loggedInUser, setLoggedInUser } = useContext(UsersContext) as UsersContextTypes;
    
    const navigate = useNavigate();

    useEffect(() => {
        setShowFooter(false);
    }, [setShowFooter]);    
   
    return ( 
        <FromPage>     
          <Container>
            <StyledMainIconWrapper>              
                <img id="avatar" src={loggedInUser?.photo} alt="" />
            </StyledMainIconWrapper>

            <Title>Hello there!</Title>
            <Subtitle>Dear guest, are you leaving?</Subtitle>                     
                    
              <AuthButton
                onClick={() => {
                  setLoggedInUser(null);
                  localStorage.removeItem("loggedInUser"); // ✅ manually remove from storage
                  navigate("/");
                }}
              >     
                <AppRegistrationIcon />                    
                Logout
              </AuthButton>  
          </Container>
        </FromPage>
    );
}
 
export default ToLogout;