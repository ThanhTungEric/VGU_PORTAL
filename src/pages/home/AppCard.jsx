import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AppCard = ({ name, logo, description }) => {
    return (
        <Card sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
            {/* Icon Ứng Dụng */}
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
                <Typography variant="h2">{logo}</Typography>
            </Box>

            {/* Tên ứng dụng */}
            <Typography variant="h6" sx={{ fontWeight: "bold", fontStyle: "italic", mb: 1 }}>
                {name}
            </Typography>

            {/* Mô tả */}
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                {description}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 0.5 }}>
                <Typography
                    component="a"
                    href="#"
                    variant="body2"
                    sx={{
                        color: "#c65500",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" }
                    }}
                >
                    Go to {name}
                </Typography>
            </Box>

        </Card>
    );
};

export default AppCard;
