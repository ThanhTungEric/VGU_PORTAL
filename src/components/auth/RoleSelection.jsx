// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";
import { FaUserGraduate, FaUserTie, FaChalkboardTeacher } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
// @ts-ignore
import Logo from "../../assets/logo.png";
const roles = [
    { title: "Student", icon: <FaUserGraduate />, color: "#A78BFA" },
    { title: "Parent/Guardian", icon: <MdFamilyRestroom />, color: "#A78BFA" },
    { title: "Administrator", icon: <FaUserTie />, color: "#A78BFA" },
    { title: "Teacher/Lecturer", icon: <FaChalkboardTeacher />, color: "#A78BFA" },
];

const RoleButton = styled(Button)(({ theme }) => ({
    width: "100%",
    padding: "12px",
    justifyContent: "flex-start",
    textTransform: "none",
    borderRadius: "12px",
    color: "#333",
    fontSize: "1rem",
    fontWeight: 500,
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    "&:hover": {
        backgroundColor: "#FFEDD5",
        transform: "scale(1.02)",
        transition: "0.2s ease-in-out",
    },
}));

const RoleSelection = ({ onSelectRole }) => {
    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                width: "100%",
            }}
        >
            {/* Left Panel */}
            <Box
                sx={{
                    width: "40%",
                    backgroundColor: "#F9FAFB",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                }}
            >
                {/* Logo */}
                <Box
                    component="img"
                    src={Logo}
                    alt="VGU Logo"
                    sx={{
                        width: { xs: 180, sm: 220 },
                        height: "auto",
                        mb: 4,
                    }}
                    // onError={(e) => {
                    //     e.target.onerror = null;
                    //     e.target.src = "https://via.placeholder.com/220x100?text=VGU+Logo";
                    // }}
                />

                {/* Role Buttons */}
                <Container maxWidth="sm">
                    <Grid container spacing={2}>
                        {roles.map((role) => (
                            <Grid item xs={12} key={role.title}>
                                <RoleButton onClick={() => onSelectRole(role.title)}>
                                    <Box
                                        sx={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            backgroundColor: role.color,
                                            color: "white",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mr: 2,
                                        }}
                                    >
                                        {role.icon}
                                    </Box>
                                    {role.title}
                                </RoleButton>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Right Panel */}
            <Box
                sx={{
                    width: "60%",
                    backgroundColor: "#F4A261",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h2" sx={{ color: "#FFF", fontWeight: "bold", textAlign: "center" }}>
                    VGU <br />
                    Vietnamese-German University
                </Typography>
            </Box>
        </Box>
    );
};

export default RoleSelection;
