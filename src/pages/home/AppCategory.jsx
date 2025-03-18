import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import AppCard from "./AppCard";

const AppCategory = ({ title, apps }) => {
    return (
        <Box sx={{ mb: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Box sx={{ backgroundColor: "#ddd", p: 1, borderRadius: 2, display: "inline-block", marginLeft: 2.5 }}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", textAlign: "left", whiteSpace: "nowrap" }}
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>

            <Grid container spacing={2} sx={{ backgroundColor: "#fde9d9", p: 2, borderRadius: 2 }}>
                {apps.map((app) => (
                    <Grid item xs={12} sm={6} md={3} key={app.id}>
                        <AppCard name={app.name} logo="📌" description={app.description} url={app.url} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AppCategory;
