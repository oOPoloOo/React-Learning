import { useContext, useEffect, useState } from "react";
import {  Link, useNavigate } from "react-router";
import styled from "styled-components";
import FooterContext from "../../contexts/FoooterContext";
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import UsersContext from "../../contexts/UsersContext";
import { LoginValues, UsersContextTypes } from "../../types";
import bcrypt from "bcryptjs";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from 'yup';

const Login = styled.div`
  background: linear-gradient(180deg, #0f2027, #203a43, #2c5364);
  height: max-content;

  display: flex;
  justify-content: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
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

const StyledMainIcon = styled(SportsEsportsRoundedIcon)`
  font-size: 150px;
  color: white;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #d5d9d9;
  margin: 20px 0;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: bold; 
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 6px;
  font-size: 12px;
  border: 1px solid #a6a6a6;
  border-radius: 3px;
  margin-bottom: 8px;
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 16px;

  label {
    display: flex;
    align-items: center;
    gap: 3px;
  }
`;

const Checkbox = styled(Field)`
  margin-right: 6px;
`;

const ErrorText = styled.div`
  font-size: 12px;
  color: red;
  margin-bottom: 8px;
`;

const PasswordRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
`;

const LoginPage = () => {
    const {setShowFooter } = useContext(FooterContext);
        
    useEffect(() => {
        setShowFooter(false);
    }, [setShowFooter]);    

    
    const { users, setLoggedInUser } = useContext(UsersContext) as UsersContextTypes;
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const initialValues: LoginValues = {
      email: '',
      password: '',
      stayLoggedIn: false,
    };
  
    const validationSchema = Yup.object({
      email: Yup.string().email('Please enter a valid email').required('Email is required'),
      password: Yup.string().required('Password is required'),
    });
  
    const handleSubmit = (values: LoginValues, { setSubmitting }: FormikHelpers<LoginValues>) => {
      const foundUser = users.find(
        (user) =>
          user.email === values.email && bcrypt.compareSync(values.password, user.password)
      );
  
      if (foundUser) {
        if (values.stayLoggedIn) {
          localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
        }
        setLoggedInUser(foundUser);
        navigate('/');
      } else {
        setError('Incorrect email or password.');
      }
  
      setSubmitting(false);
    };
  
    
    return ( 
        <Login>     
            <Container>

                <StyledMainIconWrapper>
                    <StyledMainIcon />
                </StyledMainIconWrapper>        
                <Title>Login</Title>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>                        
                                <Label htmlFor="email">Email or mobile phone number</Label>                            
                                <StyledField type="email" name="email" />
                                <ErrorMessage name="email" component={ErrorText} />
                            </div>

                            <div>
                                <PasswordRow>
                                <Label htmlFor="password">Password</Label>                            
                                </PasswordRow>
                                <StyledField type="password" name="password" />
                                <ErrorMessage name="password" component={ErrorText} />
                            </div>
                         
                            <AuthButton type="submit" disabled={isSubmitting}>     
                                Log In
                             </AuthButton>

                            <CheckboxRow>
                                <Checkbox type="checkbox" name="stayLoggedIn" />
                                <label htmlFor="stayLoggedIn">
                                Keep me signed in. 
                                </label>
                            </CheckboxRow>

                            {error && <ErrorText>{error}</ErrorText>}
                          
                            <Divider />
                            
                            <p> Do not have an account?</p>
                            <Link to="/Register">   
                                <AuthButton>                               
                                Create new account
                                </AuthButton>
                            </Link>
                        </Form>
                    )}
                </Formik>  
            </Container>
        </Login>
     );
}
 
export default LoginPage;