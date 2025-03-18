import React from "react";
import { Routes, Route } from "react-router";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer"; // Import Footer
import "./App.css";
import { ThemeProvider, Box } from "@mui/material";
import theme from "./libs/theme.js";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPageNew";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminPage from "./pages/admin/AdminPage";

function App() {
    const isLogin = true;
    return (
        <ThemeProvider theme={theme}>
            {/* Thêm width: "100%" để tránh bị giới hạn */}
            <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    width: "100%", // ✅ Đảm bảo chiếm đủ toàn bộ chiều rộng
                }}
            >
                {isLogin && <NavigationBar />}
                
                {/* Nội dung chính */}
                <Box sx={{ flex: 1, mt: "64px", mb: "64px", width: "100%" }}> 
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/admin" element={<AdminPage />} />
                    </Routes>
                </Box>

                {/* Đảm bảo Footer tràn full */}
                <Footer />
            </Box>
        </ThemeProvider>
    );
}

export default App;
