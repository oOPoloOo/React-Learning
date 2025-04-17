import { Routes, Route } from "react-router";
import LoginPage from "./LoginPage";
import MainOutlet from "../outlets/MainOutlet";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import AddPage from "./AddPage";

const RegisterPage = () => {
    return (  
        <>
            <Routes>
                <Route path="" element={<MainOutlet />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route index element={<HomePage />} />
                    <Route path="watchlist" element={<UserPage />}/>
                    <Route path="addGame" element={<AddPage />}/>
                    <Route path="user/:id" element={<UserPage />} />                  
                </Route>
            </Routes>
        </>
    );
}
 
export default RegisterPage;