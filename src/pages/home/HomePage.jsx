import React, { useEffect, useState } from "react";
import { Container, CircularProgress } from "@mui/material";
import AppCategory from "./AppCategory";
import SearchBar from "./SearchBar";
import {CATEGORIES, APPLICATIONS} from "../../api/admin";
import Chatbot from "./Chatbot";

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Home | VGU Portal";

        // Fetch categories & applications
        const fetchData = async () => {
            try {
                const categoryRes = await fetch(`${CATEGORIES}`);
                const applicationRes = await fetch(`${APPLICATIONS}`);

                const categoryData = await categoryRes.json();
                const applicationData = await applicationRes.json();

                setCategories(categoryData);
                setApplications(applicationData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <Container maxWidth="lg" sx={{ mt: 5, textAlign: "center" }}>
                <CircularProgress />
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <SearchBar />

            {categories.map((category) => (
                <AppCategory
                    key={category.id}
                    title={category.name}
                    apps={applications.filter((app) => app.categoryId === category.id)}
                />
            ))}

            <Chatbot />

        </Container>
    );
};

export default Home;
