import { AppBar, Badge, Box, Button, IconButton, Toolbar } from "@mui/material";
import { AccountCircle, MailOutline, Notifications } from "@mui/icons-material";
// @ts-ignore
import VGU_Logo from "../assets/logo_white.png";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import AccountMenu from "./AccountMenu";

function NavigationBar() {
    const navigator = useNavigate();
    const [isAdmin, setIsAdmin] = useState(true);

    return (
        <AppBar position="fixed" sx={{ height: "64px" }}>
            <Toolbar>
                <div
                    style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        marginLeft: "16px",
                    }}
                    onClick={() => navigator("/")}
                >
                    <img
                        src={VGU_Logo}
                        alt="VGU Logo"
                        className="logo"
                        style={{ height: "48px" }}
                    />
                </div>
                <Box sx={{ flexGrow: 1 }} />
                <Box
                    sx={{
                        display: "flex",
                    }}
                >
                    <IconButton
                        aria-label="show 4 new mails"
                        color="inherit"
                        size="large"
                        sx={{ width: 64, height: 64 }}
                    >
                        <Badge badgeContent={4} color="secondary">
                            <MailOutline sx={{ width: 44, height: 44 }} />
                        </Badge>
                    </IconButton>
                    <IconButton
                        aria-label="show 17 new notifications"
                        color="inherit"
                        size="large"
                        sx={{ width: 64, height: 64 }}
                    >
                        <Badge badgeContent={17} color="secondary">
                            <Notifications sx={{ width: 44, height: 44 }} />
                        </Badge>
                    </IconButton>
                    <AccountMenu />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;
