import React from "react";
import PropType from "prop-types";
import { Box } from "@mui/material";

export default function LeftPanel({ children, sx }) {
    return (
        <Box
            sx={{
                display: "flex",
                width: "20%",
                backgroundColor: "#E7ECED",
                ...sx,
                minWidth: "250px",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            {children}
        </Box>
    );
}

LeftPanel.propTypes = {
    children: PropType.node.isRequired,
    sx: PropType.object,
};
