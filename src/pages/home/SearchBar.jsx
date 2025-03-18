import React from "react";
import { Box, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "flex-end", mb: 3 }}>
            {/* Thanh tìm kiếm */}
            <TextField
                variant="outlined"
                placeholder="Search applications..."
                size="small"
                sx={{
                    width: "300px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "10px",
                    boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
                    "&:hover": { backgroundColor: "#e0e0e0" },
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                        "& fieldset": { border: "none" },
                        "&.Mui-focused": { backgroundColor: "white" },
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton sx={{ color: "#555" }}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            <Button
                variant="contained"
                sx={{
                    backgroundColor: "#c65500",
                    color: "white",
                    borderRadius: "10px",
                    px: 3,
                    "&:hover": { backgroundColor: "#a34700" },
                }}
                onClick={() => window.open("http://172.16.3.36/um/", "_blank")}
            >
                Guidelines
            </Button>
        </Box>
    );
};

export default SearchBar;
