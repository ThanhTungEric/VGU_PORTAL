import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const AppCard = ({ name, logo, description }) => {
    return (
        <Card sx={{ p: 3, boxShadow: 3, textAlign: "center", borderRadius: 3 }}>
            {/* Icon Ứng Dụng */}
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", mb: 2 }}>
                <InfoIcon sx={{ position: "absolute", top: 5, left: 5, color: "orange" }} />
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

            {/* Nút mở nhanh ứng dụng */}
            <Button variant="contained" color="primary">
                Open {name}
            </Button>
        </Card>
    );
};

export default AppCard;
