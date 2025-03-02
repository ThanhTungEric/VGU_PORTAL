import React, { useState } from "react";
import LeftPanel from "../../components/LeftPanel";
import RighPanel from "../../components/RightPanel";
import { AccountBox, AccountCircle, Padding, Settings } from "@mui/icons-material";
import { Box, Button, Switch, Typography } from "@mui/material";

/*
TODO: Many upate
*/

export default function ProfilePage() {
    const [darkMode, setDarkMode] = useState(false);
    const [twoFactor, setTwoFactor] = useState(false);
    const handleChangePassword = () => {
        throw new Error("Not implemented");
    };

    const handleDarkMode = (e) => {
        darkMode ? setDarkMode(false) : setDarkMode(true);
        alert("Dark mode is " + (darkMode ? "off" : "on"));
    };

    const handleTwoFactor = (e) => {
        twoFactor ? setTwoFactor(false) : setTwoFactor(true);
        alert("Two-factor authentication is " + (twoFactor ? "off" : "on"));
    };

    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                height: "calc(100vh - 64px)",
                marginTop: "64px",
            }}
        >
            <LeftPanel>
                <AccountCircle sx={{ width: 120, height: 120 }} color="primary" />
                <div>
                    {/* Display user's name, please use React context useUser to update */}
                    <Typography variant="h4">Nguyen Van A</Typography>
                    <Typography variant="h6" color="gray">
                        Student
                    </Typography>
                </div>
            </LeftPanel>
            <RighPanel
                sx={{
                    flexDirection: "column",
                    gap: "50px",
                    paddingTop: "15vh",
                    paddingBottom: "10vh",
                    paddingLeft: "128px",
                    paddingRight: "64px",
                }}
            >
                <div>
                    <Box display="flex" alignItems="center" marginBottom={2}>
                        <AccountBox sx={{ width: "50px", height: "50px" }} />
                        <Typography variant="h4" sx={{ textAlign: "left" }}>
                            Personal Information
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            textAlign: "left",
                            width: "100%",
                        }}
                    >
                        <Box display="flex" alignItems="center">
                            <Typography variant="h6" sx={{ mr: 1, fontWeight: "700" }}>
                                Full Name:
                            </Typography>
                            <Typography variant="h6">Nguyen Van A</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Typography variant="h6" sx={{ mr: 1, fontWeight: "700" }}>
                                Student ID:
                            </Typography>
                            <Typography variant="h6">104240000</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Typography variant="h6" sx={{ mr: 1, fontWeight: "700" }}>
                                Email:
                            </Typography>
                            <Typography variant="h6">example@student.vgu.edu</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Typography variant="h6" sx={{ mr: 1, fontWeight: "700" }}>
                                Phone Number:
                            </Typography>
                            <Typography variant="h6">0987654321</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Typography variant="h6" sx={{ mr: 1, fontWeight: "700" }}>
                                Date of birth:
                            </Typography>
                            <Typography variant="h6">01/01/2000</Typography>
                        </Box>
                    </Box>
                </div>
                <div>
                    <Box display="flex" alignItems="center" marginBottom={2}>
                        <Settings sx={{ width: "50px", height: "50px" }} />
                        <Typography variant="h4" sx={{ textAlign: "left" }}>
                            Settings
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            textAlign: "left",
                            width: "100%",
                        }}
                    >
                        <Box display="flex" alignItems="center">
                            <Typography variant="h6" sx={{ mr: 1 }}>
                                Dark Mode:
                            </Typography>
                            <Switch checked={darkMode} onChange={handleDarkMode} />
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Typography variant="h6" sx={{ mr: 1 }}>
                                Two-Factor Authentication:
                            </Typography>
                            <Switch checked={twoFactor} onChange={handleTwoFactor} />
                        </Box>
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ width: "210px", height: "50px", fontSize: "1rem" }}
                            onClick={handleChangePassword}
                        >
                            Change Password
                        </Button>
                    </Box>
                </div>
            </RighPanel>
        </div>
    );
}
