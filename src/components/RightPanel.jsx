import React from "react";
import PropType from "prop-types";
import { Box } from "@mui/material";

export default function RightPanel({ children, sx }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "10px",
                paddingRight: "10px",
                width: "100%",
                minWidth: "700px",
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
