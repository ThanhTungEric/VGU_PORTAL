import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import "./NavigationBar.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { AccountCircle, MailOutline, Notifications } from "@mui/icons-material";
// @ts-ignore
import VGU_Logo from "../../assets/logo_white.png";
import { useNavigate } from "react-router";

function NavigationBar() {
    let navigator = useNavigate();
    return (
        <AppBar position="fixed" sx={{ height: "64px" }}>
            <Toolbar>
                <div
                    style={{ cursor: "pointer", display: "flex", alignItems: "center", paddingTop: "8px", paddingBottom: "8px" }}
                    onClick={() => navigator("/")}
                >
                    <img src={VGU_Logo} alt="VGU Logo" className="logo" style={{ height: "48px" }} />
                </div>
                <Box sx={{ flexGrow: 1 }} />
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                    }}
                >
                    <IconButton aria-label="show 4 new mails" color="inherit" size="large">
                        <Badge badgeContent={4} color="secondary">
                            <MailOutline />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit" size="large">
                        <Badge badgeContent={17} color="secondary">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                        size="large"
                        onClick={() => {
                            navigator("/profile");
                        }}
                    >
                        <AccountCircle />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;
