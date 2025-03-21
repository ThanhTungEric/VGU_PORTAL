import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar"; // Import NavigationBar
import Footer from "./components/Footer"; // Import Footer
import "./App.css";
import { ThemeProvider, Box } from "@mui/material";
import theme from "./libs/theme.js";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPageNew";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminPage from "./pages/admin/AdminPage";
import Error404Page from "./pages/Error404Page"; // Import trang 404

function App() {
    const isLogin = true;
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Box 
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "100vh",
                        width: "100%", // ✅ Đảm bảo layout không bị giới hạn
                    }}
                >
                    {/* Chỉ hiển thị NavigationBar khi đăng nhập */}
                    {isLogin && <NavigationBar />}

                    {/* Nội dung chính */}
                    <Box sx={{ flex: 1, mt: "64px", mb: "64px", width: "100%" }}> 
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/admin" element={<AdminPage />} />
                            <Route path="*" element={<Error404Page />} /> {/* Trang 404 */}
                        </Routes>
                    </Box>

                    {/* Footer luôn hiển thị */}
                    <Footer />
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
