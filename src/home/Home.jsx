import React, { useState } from "react";
import { Box, Typography, Grid, Paper, TextField, InputAdornment, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import Logo from "../assets/official VGU logo.png";

const studentApps = {
  favorite: ["Moodle", "SIS", "ILIAS", "Another App"],
  academic: [],
};

const staffApps = {
  favorite: ["Web", "Wiki", "SAP Business", "DMS", "iHRP", "OpenProject"],
  academic: ["Moodle", "SIS", "ILIAS", "Another App"],
  google: ["Account", "Gmail", "Drive", "Classroom", "Docs", "Sheets", "Slides", "Meet", "Calendar", "Forms"],
};

const Home = ({ userType, onShowRolePermission }) => {
  const apps = userType === "staff" ? staffApps : studentApps;
  const [selectedApp, setSelectedApp] = useState(null);
  const [open, setOpen] = useState(false);

  const handleAppClick = (app) => {
    setSelectedApp(app);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedApp(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F9FAFB",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: "90%",
          paddingTop: "16px",
          paddingBottom: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "4px solid #f58220",
        }}
      >
        <Box component="img" src={Logo} alt="VGU Logo" sx={{ width: "150px" }} />
        <TextField
          placeholder="Hinted search text"
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            width: "250px",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">☰</InputAdornment>,
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Manage Permissions Button */}
      <Button
        variant="contained"
        color="secondary"
        sx={{ marginTop: "20px" }}
        onClick={onShowRolePermission}
      >
        Manage Permissions
      </Button>
    </Box>
  );
};

export default Home;
