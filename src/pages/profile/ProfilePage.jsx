import React from "react";
import LeftPanel from "../../components/LeftPanel";
import RighPanel from "../../components/RightPanel";
import { AccountCircle, Padding } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

/*
TODO: Many upate
*/

export default function ProfilePage() {
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                height: "calc(100vh - 64px)",
                marginTop: "64px",
            }}
        >
            <LeftPanel sx={{ paddingBottom: "40vh" }}>
                <AccountCircle sx={{ width: 120, height: 120 }} />
                <div>
                    {/* Display user's name, please use React context useUser to update */}
                    <Typography variant="h4">Nguyen Van A</Typography>
                    <Typography variant="h6" color="gray">
                        Student
                    </Typography>
                </div>
            </LeftPanel>
            <RighPanel>
                <div>
                    <Typography variant="h2">Personal Information</Typography>
                    <Padding />
                    <Box
                        sx={{
                            display: "flex",
                            gap: "10px",
                        }}
                    >
                        <Typography variant="h6">
                            Email:
                            <Typography variant="body1">
                                {/* Display user's email, please use React context useUser to update */}
                                example@student.vgu.edu.Van
                            </Typography>
                        </Typography>
                        <Typography variant="h6">
                            Phone:
                            <Typography variant="body1">
                                {/* Display user's phone, please use React context useUser to update */}
                                0123456789
                            </Typography>
                        </Typography>
                        <Typography variant="h6">
                            Address:
                            <Typography variant="body1">
                                {/* Display user's address, please use React context useUser to update */}
                                273 An Duong Vuong, District 5, Ho Chi Minh City
                            </Typography>
                        </Typography>
                    </Box>
                </div>
            </RighPanel>
        </div>
    );
}
