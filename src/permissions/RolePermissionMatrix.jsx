import React, { useState } from "react";
import { Box, Button, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const roles = ["admin", "editor", "user"];
const permissions = [
  "view_dashboard", "manage_users", "edit_users", "delete_users",
  "view_roles", "manage_roles", "assign_roles", "view_permissions",
  "manage_permissions", "access_admin_panel", "create_applications",
  "edit_applications", "delete_applications", "view_applications",
  "assign_applications", "manage_categories", "view_logs", "clear_cache",
];

const defaultRoles = {
  admin: [...permissions],
  editor: ["view_dashboard", "edit_applications", "view_applications"],
  user: ["view_dashboard", "view_applications"],
};

const RolePermissionMatrix = ({ onBack }) => {
  const [matrix, setMatrix] = useState(
    permissions.reduce((acc, perm) => {
      acc[perm] = roles.reduce((roleAcc, role) => {
        roleAcc[role] = defaultRoles[role].includes(perm);
        return roleAcc;
      }, {});
      return acc;
    }, {})
  );

  const handleCheckboxChange = (permission, role) => {
    setMatrix((prevMatrix) => ({
      ...prevMatrix,
      [permission]: {
        ...prevMatrix[permission],
        [role]: !prevMatrix[permission][role],
      },
    }));
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Role-Permission Matrix
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Permission \ Role</TableCell>
              {roles.map((role) => (
                <TableCell key={role} align="center">{role}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {permissions.map((perm) => (
              <TableRow key={perm}>
                <TableCell>{perm}</TableCell>
                {roles.map((role) => (
                  <TableCell key={role} align="center">
                    <Checkbox
                      checked={matrix[perm][role]}
                      onChange={() => handleCheckboxChange(perm, role)}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={onBack} sx={{ marginTop: "20px" }}>
        Back
      </Button>
    </Box>
  );
};

export default RolePermissionMatrix;
