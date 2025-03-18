import React, {useEffect} from "react";
import { Container, Typography, Box } from "@mui/material";
import AppCategory from "./AppCategory";
import SearchBar from "./SearchBar";

const Home = () => {
    useEffect(() => {
        document.title = "Home | VGU Portal";
    }, []);
    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <SearchBar />

            <AppCategory
                title="Favorite Apps"
                apps={[
                    { name: "Web", logo: "🌐", description: "Access internal VGU web tools." },
                    { name: "Wiki", logo: "📝", description: "Find documentation and guides." },
                    { name: "DMS", logo: "📂", description: "Manage digital documents." },
                    { name: "SAP", logo: "💼", description: "Enterprise resource planning...." },
                    { name: "Web", logo: "🌐", description: "Access internal VGU web tools." },
                    { name: "Wiki", logo: "📝", description: "Find documentation and guides." },
                    { name: "DMS", logo: "📂", description: "Manage digital documents." },
                    { name: "SAP", logo: "💼", description: "Enterprise resource planning...." }
                ]}
            />
            <AppCategory
                title="Academic Apps"
                apps={[
                    { name: "Moodle", logo: "📚", description: "Online learning platform." },
                    { name: "SIS", logo: "🎓", description: "Student Information System." },
                    { name: "ILIAS", logo: "🖥", description: "E-learning management." },
                    { name: "RedArrow", logo: "🚀", description: "VGU research tools." }
                ]}
            />
            <AppCategory
                title="Admin Apps"
                apps={[
                    { name: "System Logs", logo: "📜", description: "View and analyze system logs." },
                    { name: "HR Dashboard", logo: "📊", description: "Manage employee records and payroll." }
                ]}
            />
        </Container>
    );
};

export default Home;
