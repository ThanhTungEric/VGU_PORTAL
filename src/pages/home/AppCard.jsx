import React from "react";
import { Card, Typography, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AppCard = ({ name, logo, description, url }) => {
    return (
        <Card sx={{ p: 2, textAlign: "center", borderRadius: 3 }}>
            {/* Icon Ứng Dụng */}
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 1 }}>
                <Typography variant="h4">{logo}</Typography>
            </Box>

            {/* Tên ứng dụng */}
            <Typography variant="body1" sx={{ fontWeight: "bold", fontStyle: "italic", mb: 0.5 }}>
                {name}
            </Typography>

            {/* Mô tả */}
            <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                {description}
            </Typography>

            {/* Link đến ứng dụng */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 0.5 }}>
                <Typography
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                    sx={{
                        color: "#c65500",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" }
                    }}
                >
                    Go to {name}
                </Typography>
                <ArrowForwardIcon sx={{ color: "#c65500", fontSize: 18 }} />
            </Box>
        </Card>
    );
};

export default AppCard;
