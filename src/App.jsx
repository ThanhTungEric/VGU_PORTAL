import React, { useState } from "react";
import RoleSelection from "./authen/RoleSelection";
import Login from "./authen/Login";
import Home from "./home/Home"; // Import trang Home

function App() {
  const [selectedRole, setSelectedRole] = useState(null); // Vai trò người dùng
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Trạng thái đăng nhập

  return (
    <>
      {!isAuthenticated ? (
        selectedRole ? (
          <Login 
            onBack={() => setSelectedRole(null)} 
            onLogin={() => setIsAuthenticated(true)} // Khi đăng nhập thành công
          />
        ) : (
          <RoleSelection onSelectRole={(role) => setSelectedRole(role)} />
        )
      ) : (
        <Home userType={selectedRole === "Administrator" ? "staff" : "student"} />
      )}
    </>
  );
}

export default App;
