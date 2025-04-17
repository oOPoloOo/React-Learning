
import styled from "styled-components";
import FaceIcon from '@mui/icons-material/Face'; 


const LoginBtn = styled.div`    
    > div.rounded 
    {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        
        height: 36px;
        width:36px;
        
        background-color: #83cde6;
        border:3px solid blue;    
        border-radius:50%;
        -moz-border-radius:50%;
        -webkit-border-radius:50%;                    
    }             
`;

const FaceIStyled = styled(FaceIcon)`
  &.override 
  {
    font-size: 50px;
    color: #7a7878;    
    margin-top: 20px;
  }
`;


const LoginButton = () => {
    return ( 
        <LoginBtn>
            {/* <nav></nav> */}
       
            <div className='rounded'>
                <FaceIStyled className={"override"}/>
            </div>     
         </LoginBtn>
     );
}
 
export default LoginButton;