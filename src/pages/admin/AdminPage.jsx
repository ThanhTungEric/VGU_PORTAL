import React from "react";
import LeftPanel from "../../components/LeftPanel";
import RightPanel from "../../components/RightPanel";
import { Box, Tab, Tabs } from "@mui/material";
import TabPanel from "../../components/TabPanel";

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
                height: "calc(100vh - 64px)",
                marginTop: "64px",
            }}
        >
            <LeftPanel>
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
                    <Tab label="User Management" {...tabProps(0)} />
                    <Tab label="App Management" {...tabProps(1)} />
                    <Tab label="Group Management" {...tabProps(2)} />
                </Tabs>
            </LeftPanel>
            <RightPanel
                sx={{
                    paddingTop: "10vh",
                    paddingBottom: "10vh",
                    paddingLeft: "64px",
                    paddingRight: "64px",
                }}
            >
                <TabPanel value={value} index={0}>
                    <div></div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Dick
                </TabPanel>
                <TabPanel value={value} index={2}>
                    KOPDWQ
                </TabPanel>
            </RightPanel>
        </div>
    );
}
