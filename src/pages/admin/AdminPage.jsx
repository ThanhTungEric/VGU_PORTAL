import React from "react";
import LeftPanel from "../../components/LeftPanel";
import RightPanel from "../../components/RightPanel";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../../components/TabPanel";
import UserManagerView from "./UserManagerView";

import QandAview from "./QandAview";

function tabProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
        sx: { width: "100%" },
    };
}

export default function AdminPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                height: "calc(100vh - 72px)",
                marginTop: "72px",
            }}
        >
            <LeftPanel>
                <Typography variant="h3" sx={{ textAlign: "center", marginBottom: "" }}>
                    Admin Panel
                </Typography>
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    aria-label="Vertical tabs"
                    sx={{
                        borderRight: 1,
                        borderColor: "divider",
                        backgroundColor: "white",
                        borderRadius: "10px",
                    }}
                >
                    <Tab label="User" {...tabProps(0)} />
                    <Tab label="Application" {...tabProps(1)} />
                    <Tab label="Group" {...tabProps(2)} />
                    <Tab label="Permissions" {...tabProps(3)} />
                    <Tab label="Q&A" {...tabProps(4)} />
                </Tabs>
            </LeftPanel>
            <RightPanel
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <TabPanel value={value} index={0}>
                    <UserManagerView />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    pppppp
                </TabPanel>
                <TabPanel value={value} index={2}>
                    KOPDWQ
                </TabPanel>
                <TabPanel value={value} index={3}>
                    what the up 123
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <QandAview />
                    </Box>
                </TabPanel>
            </RightPanel>
        </div>
    );
}
