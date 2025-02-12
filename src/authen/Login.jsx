import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Logo from "../assets/official VGU logo.png";

const Login = ({ onBack, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Xử lý đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", username, password);
    onLogin(); // Chuyển sang Home
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Full screen height
        width: "100vw",
        backgroundColor: "#F9FAFB",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "400px" }, // Responsive width
          padding: "2rem",
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <Box component="img" src={Logo} alt="VGU Logo" sx={{ width: "150px", marginBottom: "1rem" }} />

        <Typography variant="h5" fontWeight="bold" marginBottom="1rem">
          WELCOME BACK!
        </Typography>

        {/* Form Input */}
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Login Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              marginTop: "1rem",
              padding: "10px",
              borderRadius: "20px",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            Login
          </Button>
        </form>

        {/* Back Button */}
        <Typography
          sx={{
            marginTop: "1rem",
            cursor: "pointer",
            color: "#888",
            "&:hover": { textDecoration: "underline" },
          }}
          onClick={onBack}
        >
          &larr; Back to Role Selection
        </Typography>

        {/* Don't Have an Account */}
        <Typography
          sx={{
            marginTop: "1rem",
            fontSize: "0.9rem",
            color: "#888",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Don't have an account?
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
