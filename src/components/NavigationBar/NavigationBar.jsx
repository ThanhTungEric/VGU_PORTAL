import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import { MailOutline, Notifications } from "@mui/icons-material";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import AccountMenu from "./AccountMenu";
import SchoolLogo from "./SchoolLogo";

function NavigationBar() {
    const navigator = useNavigate();
    const [isAdmin, setIsAdmin] = useState(true);

    return (
        <AppBar position="fixed" sx={{ height: "72px", px: 2, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <Toolbar sx={{ minHeight: "64px", padding: "0 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <SchoolLogo navigator={navigator} />
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <IconButton
                        aria-label="show mails"
                        color="inherit"
                        size="small"
                        sx={{ width: 40, height: 40, padding: 0.5 }}
                    >
                        <Badge badgeContent={4} color="secondary">
                            <MailOutline sx={{ width: 28, height: 28 }} />
                        </Badge>
                    </IconButton>
                    <IconButton
                        aria-label="show notifications"
                        color="inherit"
                        size="small"
                        sx={{ width: 40, height: 40, padding: 0.5 }}
                    >
                        <Badge badgeContent={17} color="secondary">
                            <Notifications sx={{ width: 28, height: 28 }} />
                        </Badge>
                    </IconButton>
                    <AccountMenu />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;
