import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from "../src/pages/Login/Login.jsx";
import Registr from "../src/pages/Registr/Registr.jsx";
import Hero from "../src/pages/Hero/Hero.jsx";
import Password from "../src/pages/Password/Password.jsx";
import Profile from "./pages/Profile/ProfilePage.jsx";
import ProfilePage from './pages/Profile/ProfilePage.jsx';

function App(props) {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Registr/>} />
            <Route path="/password" element={<Password/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/hero" element={< Hero/>} />
        </Routes>
    );
}

export default App;