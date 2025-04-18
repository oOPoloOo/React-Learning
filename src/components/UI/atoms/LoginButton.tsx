
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
        
        /* background-color: rgba(0,67,71,255); */
        background-color: #004347;
        border:3px solid #0073f4;    
        border-radius:50%;
        -moz-border-radius:50%;
        -webkit-border-radius:50%;                    
    }             
`;

const FaceIStyled = styled(FaceIcon)`
  &.override 
  {
    font-size: 50px;
    color: rgba(231,236,237,255);    
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