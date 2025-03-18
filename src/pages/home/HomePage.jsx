// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";

function Home({ name }) {
    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            {/* Tiêu đề */}
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                Welcome, {name}!
            </Typography>
            <Typography variant="h6" color="textSecondary" sx={{ mb: 4 }}>
                This is your personalized homepage with various sections to explore.
            </Typography>

            {/* Hình ảnh minh họa */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 4,
                }}
            >
                <img
                    src="https://source.unsplash.com/800x400/?technology"
                    alt="Technology"
                    style={{ width: "100%", borderRadius: "10px" }}
                />
            </Box>

            {/* Section 1: Thông tin chính */}
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                                Explore Features
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Discover amazing functionalities that enhance your experience on our platform.
                            </Typography>
                            <Button variant="contained" sx={{ mt: 2 }}>
                                Learn More
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                                Stay Updated
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Get the latest news, trends, and updates directly on your homepage.
                            </Typography>
                            <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                                Subscribe Now
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Section 2: Danh sách nội dung giả lập */}
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                    Latest Articles
                </Typography>
                <Grid container spacing={3}>
                    {[1, 2, 3, 4].map((item) => (
                        <Grid item xs={12} md={6} lg={3} key={item}>
                            <Card sx={{ boxShadow: 3 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={`https://source.unsplash.com/300x200/?nature,technology${item}`}
                                    alt="Article"
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                        Article {item}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        A brief description of the article content. Stay informed!
                                    </Typography>
                                    <Button size="small" sx={{ mt: 1 }}>
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

Home.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Home;
