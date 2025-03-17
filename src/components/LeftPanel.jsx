import React from "react";
import PropType from "prop-types";
import { Box } from "@mui/material";

export default function LeftPanel({ children, sx }) {
    return (
        <Box
            sx={{
                display: "flex",
                width: "30vw",
                height: "100%",
                backgroundColor: "#f5f5f5",
                minWidth: "260px",
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
