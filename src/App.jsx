import React from "react";
import { Routes, Route, BrowserRouter } from "react-router";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./libs/theme.js";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPageNew";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminPage from "./pages/admin/AdminPage";
import Error404Page from "./pages/Error404Page";

function App() {
    const isLogin = true;
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <NavigationBar />
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route index element={<HomePage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="*" element={<Error404Page />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
