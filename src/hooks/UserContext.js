/* eslint-disable no-unused-vars */
import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
