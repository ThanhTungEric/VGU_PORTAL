import React, { useState } from "react";
import Login from "./authen/Login";
import Home from "./home/Home";
import RolePermissionMatrix from "./permissions/RolePermissionMatrix"; // Import giao diện mới

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRolePermission, setShowRolePermission] = useState(false); // Trạng thái hiển thị Role-Permission

  return (
    <>
      {!isAuthenticated ? (
        <Login onLogin={() => setIsAuthenticated(true)} />
      ) : showRolePermission ? (
        <RolePermissionMatrix onBack={() => setShowRolePermission(false)} />
      ) : (
        <Home onShowRolePermission={() => setShowRolePermission(true)} />
      )}
    </>
  );
}

export default App;