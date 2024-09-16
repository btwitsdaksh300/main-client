import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Faq from './components/Faq';
import Chatbot from './components/Chatbot';
import Translator from './components/Translator';
import About from './components/About';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => setIsAuthenticated(true);
    const handleLogout = () => setIsAuthenticated(false);

    return (
        <Router>
            {isAuthenticated && <Navbar onLogout={handleLogout} />}
            <Routes>
                <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
                <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
                <Route path="/faq" element={isAuthenticated ? <Faq /> : <Navigate to="/" />} />
                <Route path="/chatbot" element={isAuthenticated ? <Chatbot /> : <Navigate to="/" />} />
                <Route path="/translator" element={isAuthenticated ? <Translator /> : <Navigate to="/" />} />
                <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
