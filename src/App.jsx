import React from "react";
import { Routes, Route } from "react-router";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./libs/theme.js";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPageNew";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminPage from "./pages/admin/AdminPage";

function App() {
    const isLogin = true;
    return (
        <>
            <ThemeProvider theme={theme}>
                {isLogin ? <NavigationBar /> : null}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/admin" element={<AdminPage />} />
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;