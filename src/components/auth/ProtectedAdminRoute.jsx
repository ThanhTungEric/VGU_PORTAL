import { useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router";

function ProtectedRoute({ children }) {
    const user = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null && user.isAdmin === false) {
            navigate("/login", { replace: true });
        }
    }, [navigate, user]);

    return children;
}

export default ProtectedRoute;
