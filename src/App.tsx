

import { Route, Routes } from 'react-router'
import './App.css'
import MainOutlet from './components/outlets/MainOutlet'
import RegisterPage from './components/pages/RegisterPage'
import LoginPage from './components/pages/LoginPage'
import HomePage from './components/pages/HomePage'
import AddPage from './components/pages/AddPage'
import UserPage from './components/pages/UserPage'
import ToRegistrationLoginPage from './components/pages/ToRegistrationLoginPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="" element={<MainOutlet />}>
          <Route path="/to" element={<ToRegistrationLoginPage /> } />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route index element={<HomePage />} />
          <Route path="addGame" element={<AddPage />}/>
          <Route path="user/:id" element={<UserPage />} />      
        </Route>
    </Routes>
    </>
  )
}

export default App
