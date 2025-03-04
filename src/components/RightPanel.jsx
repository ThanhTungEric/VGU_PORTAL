import React from "react";
import PropType from "prop-types";
import { Box } from "@mui/material";

export default function RightPanel({ children, sx }) {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                minWidth: "700px",
                ...sx,
            }}
        >
            {children}
        </Box>
    );
}

RightPanel.propTypes = {
    children: PropType.node.isRequired,
    sx: PropType.object,
};
