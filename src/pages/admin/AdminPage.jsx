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
        <>
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
                        width: "20vw",
                        backgroundColor: "white",
                        borderRadius: "10px",
                    }}
                >
                    <Tab label="User Management" {...tabProps(0)} />
                    <Tab label="App Management" {...tabProps(1)} />
                    <Tab label="Group Management" {...tabProps(2)} />
                </Tabs>
            </LeftPanel>
            <RightPanel>
                <TabPanel value={value} index={0}></TabPanel>
                <TabPanel value={value} index={1}></TabPanel>
                <TabPanel value={value} index={2}></TabPanel>
            </RightPanel>
        </>
    );
}
