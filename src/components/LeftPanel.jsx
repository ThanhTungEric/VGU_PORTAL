import React from "react";
import PropType from "prop-types";
import { Box } from "@mui/material";

export default function LeftPanel({ children, sx }) {
    return (
        <Box
            sx={{
                display: "flex",
                width: "30%",
                height: "100%",
                backgroundColor: "#E7ECED",
                minWidth: "250px",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                ...sx,
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
