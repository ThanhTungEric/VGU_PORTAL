// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography, Paper, Container, Button } from "@mui/material";
// @ts-ignore
import { useNavigate } from "react-router-dom";
// @ts-ignore
import Logo from "../assets/official VGU logo.png";

const UserGuide = () => {
    const navigate = useNavigate(); // Điều hướng quay lại trang chính

    return (
        <Container maxWidth="md" sx={{ marginTop: 4 }}>
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#F4A261",
                    padding: "16px",
                    borderRadius: "8px",
                }}
            >
                <Box component="img" src={Logo} alt="VGU Logo" sx={{ width: "150px" }} />
                <Button variant="contained" color="primary" onClick={() => navigate("/")}>
                    Back to Home
                </Button>
            </Box>

            {/* Content */}
            <Paper sx={{ padding: 4, marginTop: 4 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Website User Guide
                </Typography>

                <Typography variant="h6" gutterBottom>
                    1. Logging In
                </Typography>
                <Typography paragraph>
                    Click on the <b>Login</b> button and enter your credentials to access the portal.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    2. Navigating the Dashboard
                </Typography>
                <Typography paragraph>
                    The homepage displays various applications. Click on an app to either <b>Login</b> or view its
                    guide.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    3. Searching for Applications
                </Typography>
                <Typography paragraph>Use the search bar on the top right to quickly find an application.</Typography>

                <Typography variant="h6" gutterBottom>
                    4. Logging Out
                </Typography>
                <Typography paragraph>
                    Click on your profile at the top and select <b>Logout</b> to safely sign out.
                </Typography>
            </Paper>
        </Container>
    );
};

export default UserGuide;
