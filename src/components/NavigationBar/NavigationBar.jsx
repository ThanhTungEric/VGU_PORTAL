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
        <AppBar position="fixed" sx={{ height: "72px" }}>
            <Toolbar>
                <SchoolLogo navigator={navigator} />
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
